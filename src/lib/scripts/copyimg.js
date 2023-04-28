import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';
import { glob } from 'glob';

const fsPromises = fs.promises;
// const targetDir = 'static/post';
// const postsDir = 'src/routes/post';

async function copyImagesToPublic(images, slug, postsDir, targetDir) {
	for (const image of images) {
		await fsPromises.copyFile(`${postsDir}/${slug}/${image}`, `${targetDir}/${slug}/${image}`);
	}
}

async function createPostImageFoldersForCopy(targetDir, postsDir) {
	await fsExtra.emptyDir(targetDir);

	// Use glob to recursively get all post directories
	const postDirectories = await glob(`${postsDir}/**/*`, { onlyDirectories: true });

	for (const directory of postDirectories) {
		// Check if there is a .md file in the post folder
		const hasMdFile = await fsPromises
			.stat(`${directory}/+page.svx`)
			.then((stat) => stat.isFile())
			.catch(() => false);

		if (hasMdFile) {
			const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

			// Read all files inside current post folder
			const postDirFiles = await fsPromises.readdir(`${directory}`);

			// Filter out files with allowed file extension (images)
			const images = postDirFiles.filter((file) =>
				allowedImageFileExtensions.includes(path.extname(file))
			);

			if (images.length) {
				// Extract post slug from the directory path
				const slug = directory.slice(16, directory.length);

				console.log(`${directory}`);
				// Create a folder for images of this post inside public
				await fsPromises.mkdir(`${targetDir}/${slug}`, { recursive: true });

				await copyImagesToPublic(images, slug, postsDir, targetDir);
			}
		}
	}
}

createPostImageFoldersForCopy('static/post', 'src/routes/post');

import fs from 'fs';
import path from 'path';
import webp from 'webp-converter';
import fsExtra from 'fs-extra';
const inputDir = 'src/posts';
const outputDir = 'static/article';

fs.readdir(inputDir, (err, postDirs) => {
	if (err) throw err;

	postDirs.forEach((postDir) => {
		const postPath = path.join(inputDir, postDir);

		fs.readdir(postPath, (err, files) => {
			if (err) throw err;
			files.forEach((file) => {
				if (!file.endsWith('.png') && !file.endsWith('.jpg')) return;
				const extension = file.split('.').at(-1);
				const inputPath = path.join(postPath, file);
				const outputPath = path.join(outputDir, postDir, file.replace(extension, 'webp'));

				// Create output directory if it doesn't exist
				if (!fs.existsSync(path.dirname(outputPath))) {
					fs.mkdirSync(path.dirname(outputPath), { recursive: true });
				}
				// Convert image to WebP
				webp.cwebp(inputPath, outputPath, '-q 80');
			});
		});
	});
});

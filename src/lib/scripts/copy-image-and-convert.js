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
				const inputPath = path.join(postPath, file);
				const fileName = file.split('.').at(0);
				const outputPath = path.join(outputDir, postDir, `${fileName}.webp`);
				mkdir(outputPath);
				// Convert image to WebP
				webp.cwebp(inputPath, outputPath, '-q 80');

				// reduced image for plavceholder
				const outputPathPlaceholder = path.join(outputDir, postDir, `${fileName}_placeholder.webp`);
				console.log(outputPathPlaceholder);
				mkdir(outputPathPlaceholder);
				webp.cwebp(inputPath, outputPathPlaceholder, '-q 5');
			});
		});
	});
});

function mkdir(outputPath) {
	// Create output directory if it doesn't exist
	if (!fs.existsSync(path.dirname(outputPath))) {
		fs.mkdirSync(path.dirname(outputPath), { recursive: true });
	}
}

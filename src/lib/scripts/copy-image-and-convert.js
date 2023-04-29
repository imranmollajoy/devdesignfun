import fs from 'fs';
import path from 'path';
import webp from 'webp-converter';

const inputDir = 'src/posts';
const outputDir = 'static/article';

fs.readdir(inputDir, (err, postDirs) => {
	if (err) throw err;

	postDirs.forEach((postDir) => {
		const postPath = path.join(inputDir, postDir);

		fs.readdir(postPath, (err, files) => {
			if (err) throw err;

			files.forEach((file) => {
				if (!file.endsWith('.png')) return;

				const inputPath = path.join(postPath, file);
				const outputPath = path.join(outputDir, postDir, file.replace('.png', '.webp'));

				// Create output directory if it doesn't exist
				if (!fs.existsSync(path.dirname(outputPath))) {
					fs.mkdirSync(path.dirname(outputPath), { recursive: true });
				}
				// Convert PNG to WebP
				const result = webp.cwebp(inputPath, outputPath, '-q 80');
			});
		});
	});
});

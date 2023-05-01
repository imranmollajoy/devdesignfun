import fs from 'fs';
const args = process.argv;
const WORDS_PER_MINUTE = 200;
const CAPTION_LENGTH = 25; // average number of words per image caption

if (args && args.length > 0) {
	const workspaceArg = args[2]; // The workspace path
	const fileArg = args[3]; // The file path
	const frontMatterArg = args[4]; // Front matter data

	const buffer = fs.readFileSync(fileArg);
	const content = buffer.toString().split('---').at(-1);

	const imageRegex = /!\[.*?\]\((.*?)\)/g;
	const img = content.match(imageRegex);
	const imageCount = img.length;
	let imgTimeInSec = 0;
	for (let i = 0; i < imageCount; i++) {
		if (i === 0) {
			imgTimeInSec += 12;
		} else if (i === 1) {
			imgTimeInSec += 11;
		} else if (i >= 2 && i <= 9) {
			imgTimeInSec += 12 - i;
		} else {
			imgTimeInSec += 3;
		}
	}
	const imgTime = imgTimeInSec / 60;

	const clean = content?.replace(/<\/?[^>]+(>|$)/g, '');
	const numberOfWords = clean?.split(/\s/g).length;
	const time = numberOfWords && Math.ceil(imgTime + numberOfWords / WORDS_PER_MINUTE);
	const output = JSON.stringify({
		frontmatter: {
			readingTime: `${time} minutes`
		}
	});
	console.log(output);
}

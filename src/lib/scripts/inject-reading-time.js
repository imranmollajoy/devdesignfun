import fs from 'fs';
const args = process.argv;
const WORDS_PER_MINUTE = 200;
if (args && args.length > 0) {
	const workspaceArg = args[2]; // The workspace path
	const fileArg = args[3]; // The file path
	const frontMatterArg = args[4]; // Front matter data

	const buffer = fs.readFileSync(fileArg);
	const content = buffer.toString().split('---').at(-1);
	const clean = content?.replace(/<\/?[^>]+(>|$)/g, '');
	const numberOfWords = clean?.split(/\s/g).length;
	const time = numberOfWords && Math.ceil(numberOfWords / WORDS_PER_MINUTE);
	const output = JSON.stringify({
		frontmatter: {
			readingTime: `${time} minutes`
		}
	});
	console.log(output);
}

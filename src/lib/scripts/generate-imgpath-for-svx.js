const args = process.argv;

if (args && args.length > 0) {
	const workspaceArg = args[2]; // The workspace path
	const fileArg = args[3]; // The file path
	const frontMatterArg = args[4]; // Front matter data

	const sliced = fileArg.slice(47, fileArg.length - 10);
	const cover = JSON.parse(frontMatterArg).cover;
	const image = `https://devdesignfun.com/${sliced}/${cover.image}`;

	const output = JSON.stringify({
		frontmatter: {
			image: image
		}
	});
	console.log(output);
}

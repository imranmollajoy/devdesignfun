const args = process.argv;

if (args && args.length > 0) {
	const workspaceArg = args[2]; // The workspace path
	const fileArg = args[3]; // The file path
	const frontMatterArg = args[4]; // Front matter data

	const sliced = fileArg.split('/').at(-2);
	// const cover = JSON.parse(frontMatterArg).cover;

	const output = JSON.stringify({
		frontmatter: {
			slug: sliced
		}
	});
	console.log(output);
}

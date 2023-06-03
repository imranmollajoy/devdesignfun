export function getPlaceholder(src) {
	if (!src) return;
	let parts = src.split('/');
	const filename = parts.pop();
	const extension = filename.split('.').pop();
	const placeholderFilename = filename.replace('.' + extension, '_placeholder.' + extension);
	parts.push(placeholderFilename);
	return parts.join('/');
}

console.log(
	getPlaceholder('https://localhost.com/article/google-new-feature-june23/featured.webp')
);

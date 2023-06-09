export function getFormattedDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
}

export function getPlaceholder(src: string) {
	if (!src) return;
	let parts = src.split('/');
	const filename = parts.pop();
	const extension = filename.split('.').pop();
	const placeholderFilename = filename.replace('.' + extension, '_placeholder.' + extension);
	parts.push(placeholderFilename);
	return parts.join('/');
}

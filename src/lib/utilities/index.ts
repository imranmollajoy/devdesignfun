export function getFormattedDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
}

export function getPlaceholder(src: string) {
	if (!src) return;
	const splitted = src.split('.');
	const path = splitted.at(0);
	const extension = splitted.at(-1);
	return path + '_placeholder.' + extension;
}

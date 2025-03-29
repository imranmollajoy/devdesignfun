import { base } from '$app/paths';

import { redirect } from '@sveltejs/kit';
export const load = () => {
	throw redirect(301, base + '/archives/1');
};

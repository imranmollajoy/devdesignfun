import { redirect } from '@sveltejs/kit';
export const load = () => {
	throw redirect(301, '/archives/1');
};

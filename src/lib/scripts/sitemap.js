// Import the `getRoutes` function from SvelteKit
import { getRoutes } from '@sveltejs/kit';

// Define an asynchronous function to get the routes
export async function getAllRoutes() {
	// Call the `getRoutes` function and await its result
	const routes = await getRoutes();

	// Return the routes
	return routes;
}

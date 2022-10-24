import type { HandleFetch, Handle, HandleServerError } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	console.log(event.url.pathname);
	
	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}

	event.locals.user = {
		name: 'AhEhIOhYou'
	}

	const response = await resolve(event);
	return response;
 }
 
 export const handleError: HandleServerError = async ({ error, event }) => {
	console.error(event.url, error);
 }
 
 export const handleFetch: HandleFetch = async (request) => {

 }
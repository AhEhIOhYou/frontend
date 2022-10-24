import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log(event.url.pathname);

	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}

	event.locals.user = {
		name: 'AhEhIOhYou'
	};

	const response = await resolve(event);
	return response;
};

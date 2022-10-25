import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// const accessToken: string = event.cookies.get('AuthorizationToken') ?? '';
	console.log(event.locals.session);

	const accessToken: string | undefined = event.locals.session?.accessToken;
	if (accessToken) {
		event.request.headers.set('authorization', accessToken);
	}

	const response = await resolve(event);
	return response;
};

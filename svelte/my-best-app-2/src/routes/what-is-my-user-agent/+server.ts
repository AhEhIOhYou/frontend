import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	console.log(...event.request.headers);

	return json({
		userAgent: event.request.headers.get('user-agent')
	});
};

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (event) => {
	let body: FormData = await event.request.formData();
	const uuid = crypto.randomUUID();
	return json({
		uuid: uuid,
		url: event.url.pathname,
		importantData: body.get('important-data') ?? 'world'
	});
};

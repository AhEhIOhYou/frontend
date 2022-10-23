import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import LayoutSvelte from '../+layout.svelte';

export const GET: RequestHandler = async (event):Promise<Response> => {
	const min:number = Number(event.url.searchParams.get('min') ?? '0');
	const max:number = Number(event.url.searchParams.get('max') ?? '0');
	const dif:number = max - min;
	if (isNaN(dif) || dif <= 0)
		throw error(400, 'fuck u');
	return json({
		res: dif,
	});
};

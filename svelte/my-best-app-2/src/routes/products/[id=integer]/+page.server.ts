import type { PageServerLoad } from './$types';
import type { Product } from '@/models/product.model';
import { redirect } from '@sveltejs/kit';

type OutputType = {
	product: Product;
};

export const load: PageServerLoad<OutputType> = async ({ params, locals, cookies }) => {
	const product: Product = {
		name: `${params.id} product`,
		color: 'blue'
	};

	let username: string = cookies.get('userName') ?? '';

	if (!username) {
		username =  locals.user ? locals.user.name : `no user here :9`;
		cookies.set('userName', username);
	}

	return {
		product,
		username: username,
	};
};

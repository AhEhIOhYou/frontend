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

	let username: string = cookies.get('userName') ?? 'default';

	return {
		product,
		username: username
	};
};

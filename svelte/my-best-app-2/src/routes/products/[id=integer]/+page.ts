import type { PageLoad, PageServerData } from './$types';

// type OutputProps = Pick<PageServerData, 'product'> & { id: string };

export const load: PageLoad = async ({ params, data }) => {
	return {
		product: data.product,
		id: params.id
	};
};

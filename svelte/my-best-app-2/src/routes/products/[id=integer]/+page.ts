import type { PageLoad, PageServerData } from './$types';

type OutputProps = Pick<PageServerData, 'product'> & { id: string };

export const load: PageLoad<OutputProps> = async ({ params, data }) => {
	console.log(data.username);

	return {
		product: data.product,
		id: params.id
	};
};

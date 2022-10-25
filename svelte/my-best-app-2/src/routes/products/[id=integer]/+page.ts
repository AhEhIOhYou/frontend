import type { PageLoad, PageServerData } from './$types';

type OutputProps = Pick<PageServerData, 'product'> & { id: string; user: string };

export const load: PageLoad<OutputProps> = async ({ params, data, setHeaders }) => {
	return {
		id: params.id,
		user: data.username,
		product: data.product
	};
};

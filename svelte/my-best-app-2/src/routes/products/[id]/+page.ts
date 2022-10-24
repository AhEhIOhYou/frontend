import type { PageLoad, PageServerData } from './$types';

type OutputProps = Pick<PageServerData, 'product'> & { id: string}

export const load: PageLoad<OutputProps> = async ({ params,data,}) => {
	console.log(data.username);
	

	return {
		product: data.product,
		// we enhance the data we get from the endpoint with the Id
		id: params.id,
	}
}
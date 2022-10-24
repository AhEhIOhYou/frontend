import type { PageServerLoad } from './$types';
import type { Product } from '@/models/product.model';

type OutputTpe = {
    product: Product
}

export const load: PageServerLoad<OutputTpe> = async ({params, locals}) => {
    const product: Product = {
        name: `${params.id} product`,
        color: 'blue',
    }

    return {
        product,
        username: locals.user ? locals.user.name : `no user ${params.id}`,
    };
};
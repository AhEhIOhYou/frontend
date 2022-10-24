export type Product = {
	name: string;
	color: 'red' | 'blue' | 'white';
};

declare const _productId: unique symbol;
export type ProductId = string & { readonly [_productId]: never };

import type { Actions } from './$types';
import type { User } from '@/models/user.model';

type OutputType = {
	success: boolean;
};

export const actions: Actions = {
	login: async ({ request, cookies, locals }): Promise<OutputType> => {
		let url: string = 'https://modelshowtime.serdcebolit.ru/api/';
		const headers = {};

		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const response = await fetch(url + 'users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});
		const result = await response.json();
		if (!response.ok) {
			throw new Error(`Attention! ${response}`);
		}

		locals.session = {
			user: {
				id: result.id,
				name: result.name
			},
			accessToken: `Bearer ${result.access_token}`,
			refreshToken: result.access_token
		};

		return { success: true };
	},
	logout: async ({ request, cookies, locals }): Promise<any> => {
		locals.session = undefined;
		console.log('logout!');
		return { logout: true };
	}
};

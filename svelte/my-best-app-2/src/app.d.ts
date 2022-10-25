declare namespace App {
	interface Locals {
		session?: {
			user: {
				id: number;
				name: string;
			};
			accessToken: string;
			refreshToken: string;
		};
	}
}

import type { Load } from "@sveltejs/kit";
import { faker } from "@faker-js/faker";

export const load: Load = async () => {
	return {
		chats: [
			...Array.from({ length: 20 }).map(() => {
				return {
					id: faker.string.uuid(),
					Name: faker.internet.userName(),
					pic: faker.internet.avatar(),
					LastMessage: {
						content: faker.lorem.text(),
						date: faker.date.past(),
					},
				};
			}),
		],
	};
};

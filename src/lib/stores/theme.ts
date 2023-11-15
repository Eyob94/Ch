import { writable } from "svelte/store";

const themeStore = () => {
	const { subscribe, set, update } = writable(false);

	set(false)

	return {
		subscribe,
		toggleDark: () => update((n) => !n),
	};
};

export const theme = themeStore();

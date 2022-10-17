import {derived, writable} from "svelte/store";

function createCount() {
	const {subscribe, set, update} = writable(0);

	return {
		subscribe,
		increment: (num) => update(n => n + num),
		decrement: (num) => update(n => n - num),
		reset: () => set(0),
		set: (num) => set(num),
	}
}

export const count = createCount();
export const word = writable('world');
export const greeting = derived(word, 	$name => `Привет, ${$name}!`);
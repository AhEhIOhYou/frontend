<script lang="ts">
	import { onMount } from 'svelte';

	let promise: Promise<string>;
	onMount(async () => {
		promise = getRandomCatFacts();
	});

	const getRandomCatFacts = async (): Promise<string> => {
		const res = await fetch('https://catfact.ninja/fact')
			.then((response) => response.json())
			.then((data) => {
				if (data.fact) {
					return data.fact;
				} else {
					throw new Error('Data not found');
				}
			})
			.catch((error) => console.error(`Some problems: ${error}`));
		return res;
	};

	const reload = () => {
		promise = getRandomCatFacts();
	};
</script>

<main>
	<h1>Cat Facts</h1>
	<div class="cat-fact-container">
		{#await promise}
			<p>...loading...</p>
		{:then fact}
			<p>{fact}</p>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
	<button on:click={() => reload()}>One more fact</button>
</main>

<style lang="scss">
	.cat-fact-container {
		font-size: 30px;
	}
</style>

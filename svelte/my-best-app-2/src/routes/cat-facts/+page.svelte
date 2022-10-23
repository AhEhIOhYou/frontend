<script lang="ts">
	import { onMount } from 'svelte';

	let promise;
	onMount(async () => {
		promise = getRandomCatFacts();
	});

	const getRandomCatFacts = async () => {
		const res = await fetch("https://catfact.ninja/fact");
		const resJson = await res.json();

		console.log(resJson);
		

		if (resJson.fact) {
			return resJson.fact;
		} else {
			throw new Error("Data not found");
		}
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
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

<div class="cat-facts">
	<div class="cat-fact-container">
		<div class="title">
			<h1 class="title__text">Cat Facts</h1>
		</div>
		<div>
			{#await promise}
				<p>...loading...</p>
			{:then fact}
				<p>{fact}</p>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>
		<button on:click={() => reload()}>One more fact</button>
	</div>
	<div class="cat-fact-container">
		<div class="title">
			<h1 class="title__text">Cat Facts</h1>
		</div>
		<div>
			{#await promise}
				<p>...loading...</p>
			{:then fact}
				<p>{fact}</p>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>
		<button on:click={() => reload()}>One more fact</button>
	</div>
	<div class="cat-fact-container">
		<div class="title">
			<h1 class="title__text">Cat Facts</h1>
		</div>
		<div>
			{#await promise}
				<p>...loading...</p>
			{:then fact}
				<p>{fact}</p>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>
		<button on:click={() => reload()}>One more fact</button>
	</div>
</div>

<style lang="scss">
	.cat-facts {
		display: flex;
		flex-wrap: wrap;
	}
	.cat-fact-container {
		font-size: 20px;
		width: 400px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
		margin: 8px;
		position: relative;
	}
</style>

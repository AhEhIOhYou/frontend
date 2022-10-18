<script>
	import Counter from "./lib/Counter.svelte";
	import Toggle from "./lib/Toggle.svelte";
	import Each from "./lib/Each.svelte";
	import Await from "./lib/Await.svelte";
	import MouseEvents from "./lib/MouseEvents.svelte";
	import Inner from "./lib/inner.svelte";
	import Bind from "./lib/Bind.svelte";
	import VideoControl from "./lib/VideoControl.svelte";
	import RGBLogo from "./lib/RGBLogo.svelte";
	import Keypad from "./lib/Keypad.svelte";
	import ElysiaChat from "./lib/ElysiaChat.svelte";
	import { count, greeting, word } from "./lib/store.js";
	import Ball from "./lib/Ball.svelte";
	import Fly from "./lib/Fly.svelte";
	import { closeClick } from './lib/modal.js';
	import { fade } from 'svelte/transition';
	import Emoji from './lib/emoji.svelte';

	// let showModal = false;

	// let pin;
	// $: view = pin ? pin.replace(/\d(?!$)/g, "*") : "enter pin";

	// function handleSubmit() {
	// 	alert(pin);
	// }

	// function handleMessage(event) {
	// 	console.log(event.detail.text);
	// }

	// $: {
	// 	if (!showModal) {
	// 		pin = "";
	// 	}
	// }
</script>

<!-- <main>
	<h1>Vite + Svelte</h1>

	<div class="card"> -->
		<!-- <ElysiaChat />
		<Counter />
		<Toggle />
		<br />
		<RGBLogo />
		<Each />
		<Await />
		<MouseEvents />
		<Inner on:foo={handleMessage} />
		<br />
		<Bind />
		<VideoControl />
		<h1>Count is {$count}</h1>
		<button on:click={() => count.increment(2)}>+</button>
		<button on:click={() => count.decrement(3)}>-</button>
		<button on:click={count.reset}>reset</button>
		<label>
			<p>Edit value</p>
			<input
				bind:value={$count}
				on:change={() => count.set($count)}
				type="number"
			/>
		</label>
		<h2>{$greeting}</h2>
		<input bind:value={$word} />
		<Fly /> -->
		<!-- <button on:click={() => showModal = true}>Вызвать модальное</button>
		{#if showModal}
			<div transition:fade={{duration: 200}} use:closeClick on:clickoutside={() => {showModal = !showModal}} class="modal">
				<h1>{view}</h1>
				<Keypad bind:value={pin} on:submit={handleSubmit} />
				<a href="#" class="close" on:click={() => showModal = false}>
			</div>
		{/if} -->
		<Emoji/>
	<!-- </div> -->
<!-- 
	<p>
		Check out <a
			href="https://github.com/sveltejs/kit#readme"
			target="_blank">SvelteKit</a
		>, the official Svelte app framework powered by Vite!
	</p>

	<p class="read-the-docs">
		Click on the Vite and Svelte logos to learn more
	</p>
</main> -->

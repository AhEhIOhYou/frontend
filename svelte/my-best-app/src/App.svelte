<script>
  import Counter from './lib/Counter.svelte'
  import Toggle from "./lib/Toggle.svelte";
  import Each from "./lib/Each.svelte";
  import Await from "./lib/Await.svelte";
  import MouseEvents from "./lib/MouseEvents.svelte";
  import Inner from "./lib/inner.svelte";

	function handleMessage(event) {
		console.log(event.detail.text);
	}

</script>

<main>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
    <Toggle />
    <Each />
    <Await/>
    <MouseEvents />
    <Inner on:foo={handleMessage} />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>
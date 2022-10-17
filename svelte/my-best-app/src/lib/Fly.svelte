<script>
	import { blur, fade } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	let visible = true;

	let arrItems = {
		pointer: 5,
		items:
		[
			'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'
		],
	}

	let showItems = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	показать
</label>
<p on:click={() => visible = !visible}>
	Aaaaa
</p>

{#if visible}
	<p in:blur out:fade>
		Появляется и исчезает
	</p>
{/if}

<label>
	<input type="checkbox" bind:checked={showItems}>
	Show list
</label>

<label>
	<input type="range" step="1" min="0" bind:value={arrItems.pointer} max={arrItems.items.length}>
</label>

{#if showItems}
	<div class="container__items">
		{#each arrItems.items.slice(0, arrItems.pointer) as item}
			<div transition:slide>{item}</div>
		{/each}
	</div>
{/if}

<style>
	.container__items {
		width: 200px;
		height: 200px;
		display: flex;
		justify-content: start;
		flex-direction: column;
	}
	li {
		list-style-type: none;
		border-bottom: 1px grey solid;
	}
</style>
<!--AhEhIOhYou-->
<!--

      __                 __  .__.       .__    ___   __.    __
_____ \ \______. _____  / /  |__|  _____| |    \  \ /  |____\ \  __
\__   \\  ___  |/  __ \/ /___|  | /  _  \ \_____\  |  /  _  \\ \ \ \
  / __ \\ \  | |\  ___/ ___  |  \(   <>  ) ___  \\   /   <>  )\ \ \ \
 | /__\ \\_\ | | \___ \/  / /|__/ \  -  / |   \ | / / \  -  /  \ \/ /\
 \_=---=_\   |_|    /\/   \/       \___/|/    /_| \/   \___/    \__/\ \

-->
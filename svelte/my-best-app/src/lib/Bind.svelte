<script>
	let a = {
		value: 18,
		max: 50,
		min: 0,
	}
	let b = {
		value: 18,
		max: 50,
		min: 0,
	}
	let checked = false;
	$: {
		console.log(a);
	}

	let todos = [
		{done: false, text: 'kekw1'},
		{done: false, text: 'kekw2'},
	];

	let remaining = todos.length;

	function clear() {
		todos = todos.filter(item => !item.done)
	}

	function add() {
		todos = todos.concat({done: false, text: ''});
	}

	$: remaining = todos.filter(t => !t.done).length;

</script>

<label>
	<input type="number" min={a.min} max={a.max} bind:value={a.value}>
	<input type="range" min={a.min} max={a.max} bind:value={a.value}>
</label>

<label>
	<input type="number" min={b.min} max={b.max} bind:value={b.value}>
	<input type="range" min={b.min} max={b.max} bind:value={b.value}>
</label>

<p>{a.value} + {b.value} = {a.value + b.value}</p>

<label>
	<input type=checkbox bind:checked={checked}>
	Yes! Send me regular email spam
</label>

<button disabled={!checked}>Subscribe</button>

<div>
	<h1>Todos</h1>
	{#each todos as todo}
		<div class={todo.done}>
			<input type="checkbox" bind:checked="{todo.done}">
			<input placeholder="to do?" bind:value={todo.text}>
		</div>
	{/each}
</div>

<p>{remaining} remaining</p>

<button on:click={add}>Add</button>
<button on:click={clear}>Clear done</button>
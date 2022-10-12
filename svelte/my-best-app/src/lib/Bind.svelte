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
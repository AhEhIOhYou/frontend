<script>
	let touhouGames = [
		{id: "6", name: "Touhou 6: EoSD"},
		{id: "7", name: "Touhou 7: PCB"},
		{id: "8", name: "Touhou 8: IN"},
		{id: "9", name: "Touhou 9: PoFV"},
		{id: "10", name: "Touhou 10: MoF"},
		{id: "11", name: "Touhou 11: SA"},
	];
</script>

<ul>
	{#each touhouGames as touhouGame}
		<li id={touhouGame.id}>
			{touhouGame.name}
		</li>
	{/each}
</ul>
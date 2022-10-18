<script>
	import { onMount } from 'svelte';
    import { debug } from 'svelte/internal';

	let emojiList = ['💩','👾','🤡', '🥁'];
	let emojiArr = ['💩'];
	let speed = 1;
	let size = 1;

	let confetti = new Array(200).fill()
		.map((_, i) => {
			let rad = Math.random() / 4 * size;
			return {
				emoji: emojiArr[i % emojiArr.length],
				x: Math.random() * 200,
				y: -20 - Math.random() * 200,
				r: rad,
				defR: rad,
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			confetti = confetti.map(emoji => {
				emoji.y += speed * emoji.r;
				if (emoji.y > 120) {
					emoji.y = -20;
				}
				return emoji;
			});
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});

	const changeSize = () => {
		confetti = confetti.map(emoji => {
				emoji.r = emoji.defR * size;
				return emoji;
			});
	}

	// Math.random() * (max - min) + min;

	const updateEmojiArr = (index) => {
		if (!emojiArr.includes(emojiList[index])) {
			emojiArr.concat(emojiList[index]);
			
			confetti = confetti.map((emoji, i) => {
				if (i % emojiArr.length == 0) {
					emoji.emoji = emojiList[index];
				}
				return emoji;
			});
		} else {
			emojiArr = emojiArr.filter(e => e !== emojiList[index])
			
			confetti = confetti.map((emoji, i) => {
				if (i % emojiArr.length == 0) {
					emoji.emoji = '*';
				}
				return emoji;
			});
		}
	}
</script>

{#each confetti as c}
	<span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.emoji}</span>
{/each}
<div class="settings__text">
	<div>
		Speed
		<input type="range" step="0.1" min="0" max="1" bind:value={speed}>
	</div>
	<div>
		Size
		<input type="range" step="0.008" min="1" max="2" on:change={changeSize} bind:value={size}>
	</div>
</div>
<div class="emoji__list">
	{#each emojiList as emoji, i}
		<label>
			<input on:click={() => updateEmojiArr(i)} type="checkbox">
			<p>{emoji}</p>
		</label>
	{/each}
</div>

<style>
	:global(body) {
		overflow: hidden;
		background: linear-gradient(#e66465, #9198e5);
		color: white;
	}

	.settings__text {
		text-shadow: black 1px 0 10px;
	}

	.emoji__list {
		display: flex;

	}

	span {
		color:rgb(126, 126, 255);
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}
</style>
<script>
	import { onMount } from "svelte";

	let defaultEmoji = "❄️";
	let emojiList = [
		{ e: "✨", show: false },
		{ e: "🤡", show: false },
		{ e: "🔥", show: false },
	];

	let speed = 0.5;
	let size = 1;

	let confetti = new Array(200).fill().map((_, i) => {
		let rad = (Math.random() / 4) * size;
		return {
			emoji: defaultEmoji,
			x: Math.random() * 200,
			y: -20 - Math.random() * 200,
			r: rad,
			defR: rad,
		};
	});

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			confetti = confetti.map((emoji) => {
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
		confetti = confetti.map((emoji) => {
			emoji.r = emoji.defR * size;
			return emoji;
		});
	};

	const updateEmojiArr = (index) => {
		if (emojiList[index].show) {
			confetti = confetti.map((emoji, i) => {
				if ((i + index) % 4 == 0) {
					emoji.emoji = emojiList[index].e;
					emojiList[index].show = true;
				}
				return emoji;
			});
		} else {
			confetti = confetti.map((emoji, i) => {
				if ((i + index) % 4 == 0) {
					emoji.emoji = defaultEmoji;
					emojiList[index].show = false;
				}
				return emoji;
			});
		}
	};
</script>

{#each confetti as c}
	<span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">
		{c.emoji}
	</span>
{/each}
<div class="settings__range">
	<div class="settings__item">
		Speed
		<input type="range" step="0.1" min="0" max="1" bind:value={speed} />
	</div>
	<div class="settings__item">
		Size
		<input type="range"step="0.008" min="1" max="2" 
			on:change={changeSize}
			bind:value={size}/>
	</div>
</div>
<div class="emoji__list">
	{#each emojiList as emoji, i}
		<label>
			<input
				bind:checked={emoji.show}
				on:change={() => updateEmojiArr(i)}
				type="checkbox"
			/>
			<p>{emoji.e}</p>
		</label>
	{/each}
</div>

<style>
	:global(body) {
		overflow: hidden;
		background: linear-gradient(#e66465, #9198e5);
		color: white;
	}

	.settings__range {
		max-width: 300px;
		width: auto;
		text-shadow: black 1px 0 10px;
		display: flex;
	}

	.emoji__list {
		display: flex;
		justify-content: center;
	}

	span {
		color: rgb(126, 126, 255);
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}
</style>

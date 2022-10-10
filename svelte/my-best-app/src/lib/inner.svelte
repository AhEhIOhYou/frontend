<script>
	import {createEventDispatcher} from "svelte";

	const dispatcher = createEventDispatcher();

	function sayHello() {
		dispatcher('foo', {
			text: 'hi ahehiohyou',
		})
	}

</script>

<button on:click={sayHello}>
	Click here
</button>
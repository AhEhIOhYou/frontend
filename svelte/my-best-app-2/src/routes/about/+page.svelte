<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="test">hello</div>

<style lang="scss">
	$font-stack: Helvetica, sans-serif;
	$primary-color: red;

	.test {
		font: 100% $font-stack;
		color: $primary-color;
	}
</style>

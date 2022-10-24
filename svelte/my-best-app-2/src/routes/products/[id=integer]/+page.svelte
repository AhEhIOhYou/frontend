<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="title">
	<h1 class="title__text">Product {data.id}</h1>
</div>

{JSON.stringify(data.product)}

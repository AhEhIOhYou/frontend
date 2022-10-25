<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let form: ActionData;
</script>

<form method="post" action="?/login">
	<input name="email" type="email" value="test@test.ru" />
	<input name="password" type="password" value="1234" />
	<button>Log in</button>
</form>

<form method="post" action="?/logout">
	<button>Log out</button>
</form>

{#if form?.success}
	<div>
		<h2>Wellcome back!</h2>
	</div>
{/if}

{#if form?.logout}
	<div>
		<h2>Logout!</h2>
	</div>
{/if}

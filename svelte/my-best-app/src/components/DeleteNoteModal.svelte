<script lang="ts">
	import Modal from "./Modal.svelte";
	import { createEventDispatcher } from "svelte";

	export let id: number | undefined = undefined;
	export let title: string | undefined = undefined;

	const dispatch = createEventDispatcher();
</script>

<Modal on:closeModal={() => dispatch("close")}>
	<div slot="title" class="title">Confirm delete</div>
	<div slot="body" class="modal-nody">
		Are you sure about that? Delete {title}?
	</div>

	<div slot="footer" class="model-footer">
		<button
			class="button delete"
			on:click|stopPropagation={() => dispatch("delete", "id")}
		>
			Delte</button
		>
		<button
			class="button"
			on:click|stopPropagation={() => dispatch("close")}
		>
			Cancel</button
		>
	</div>
</Modal>

<style lang="scss">
	.modal {
		&-body {
			padding: 30px 15px;
			width: 330px;
		}

		&-footer {
			padding: 0 15px;
			text-align: right;

			.button {
				height: 30px;
				padding: 0 15px;
				text-align: center;
				box-sizing: content-box;
				border-radius: 3px;
				border: 1px solid #000;

				&:active {
					background-color: #b9b7b7;
				}

				&.delete {
					background-color: #e81414;
					color: #fff;

					&:active {
						background-color: #b11111;
					}
				}
			}
		}
	}
</style>

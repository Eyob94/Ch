<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { colorType } from "./Button.d.ts";

	export let loading: boolean = false;
	export const disabled: boolean = false;
	export let onClick: (...args: unknown[]) => void;
	export let color: colorType = "";
</script>

<button
	on:click={() => onClick()}
	class="cursor-pointer rounded flex items-center justify-center w-5/6 aspect-square transition-all duration-150i ease-in-out"
	class:primary={color == "PRIMARY"}
	class:secondary={color == "SECONDARY"}
	class:glass={!color}
>
	{#if loading == true}
		<div class:loadingState={true == true}>
			<Icon icon="ph:spinner-thin" />
		</div>
	{:else}
		<slot name="main" />
	{/if}
</button>

<style lang="postcss">
	.loadingState {
		@apply animate-spin;
	}
	.primary {
		@apply bg-green-400;
		@apply hover:opacity-95;
	}
	.secondary {
		@apply bg-green-100;
	}
	.glass {
		@apply bg-transparent;
		@apply hover:bg-green-300/10 dark:hover:bg-bgDarkSecondary/100;
	}
</style>

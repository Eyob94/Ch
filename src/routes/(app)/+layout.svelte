<script lang="ts">
	import "../../app.postcss";
	import Logo from "$lib/components/Logo/Logo.svelte";
	import Icon from "@iconify/svelte";
	import Button from "$lib/components/Button/Button.svelte";
	import { theme as darkTheme } from "$lib/stores";
	import { onMount } from "svelte";

	let topIcons = [
		{ key: "inbox", icon: "ic-round-inbox" },
		{ key: "calendar", icon: "majesticons:calendar-line" },
	];
	let bottomIcons = [
		{ key: "dark", icon: "ph:moon", alternate: "ph:sun" },
		{ key: "setting", icon: "codicon:settings" },
		{ key: "user", icon: "ph:user" },
	];

	onMount(() => {
		darkTheme.subscribe((val) => {
			if (!document) return;
			val
				? document.documentElement.classList.add("dark")
				: document.documentElement.classList.remove("dark");
		});
	});
</script>

<div class="h-screen flex overflow-hidden w-screen">
	<div
		class="flex w-[5%] justify-between dark:border-none dark:bg-bgDark border-r border-gray-200 flex-col items-center h-full py-[1%] px-4"
	>
		<Logo />
		<div class="flex py-[1%] h-1/3 flex-col justify-start gap-[10%] w-full items-center">
			{#each topIcons as icon}
				<Button onClick={() => console.log("done")}>
					<svelte:fragment slot="main">
						<Icon icon={icon.icon} class="text-2xl text-gray-400" />
					</svelte:fragment>
				</Button>
			{/each}
		</div>
		<div class="flex h-1/3 flex-col justify-between w-full items-center" />
		<div class="flex py-4 h-1/5 flex-col justify-between w-full items-center">
			{#each bottomIcons as icon (icon.key)}
				<Button
					onClick={() => {
						if (icon.key == "dark") {
							darkTheme.toggleDark();
						}
					}}
				>
					<svelte:fragment slot="main">
						<Icon
							icon={icon.alternate ? ($darkTheme ? icon.alternate : icon.icon) : icon.icon}
							class="text-2xl text-gray-600"
						/>
					</svelte:fragment>
				</Button>
			{/each}
		</div>
	</div>
	<div class="p-[1%] px-[0] w-full h-full text-neutral-700 dark:text-white">
		<slot />
	</div>
</div>

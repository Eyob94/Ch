<script lang="ts">
	import Cards from "$lib/components/Cards/Cards.svelte";
	import Icon from "@iconify/svelte";

	export let data: { chats: Record<string, any>[] };
</script>

<div
	class="3xl:w-1/4 gap-[2%] border-r border-neutral-200 dark:border-none w-1/3 max-w-lg flex flex-col px-[2%] justify-between h-full min-h-full"
>
	<div class=" flex items-center justify-between h-[5%]">
		<span class="heading">Messages</span>
		<Icon
			icon="streamline:interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing"
			class="text-2xl"
		/>
	</div>
	<div
		class="rounded bg-neutral-100 text-neutral-500 dark:bg-bgDark/50 px-2 flex justify-between p-2 text-xl items-center"
	>
		<input class="outline-none bg-transparent" placeholder="Search..." />
		<Icon icon="iconamoon:search-bold" />
	</div>

	<div class="h-5/6 chats overflow-y-auto">
		<div class="h-max gap-4 flex flex-col">
			{#each data.chats as { pic, Name, LastMessage }}
				<Cards {Name} {pic} lastChat={LastMessage?.content} lastChatDate={LastMessage?.date} />
			{/each}
		</div>
	</div>
</div>

<style lang="css">
	.chats::-webkit-scrollber {
		display: none;
	}
</style>

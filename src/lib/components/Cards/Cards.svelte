<script lang="ts">
	export let Name: string;
	export let lastChat: string;
	export let lastChatDate: Date;
	export let pic: string;

    $:date = new Date(lastChatDate)
</script>

<div class="rounded-xl dark:hover:bg-darkPrimary flex justify-between items-center overflow-hidden hover:bg-green-100  cursor-pointer px-[5%] w-full h-24 py-[3%] gap-[5%] bg-transparent dark:bg-bgDark">
	<div class="rounded-full w-1/6 p-0 overflow-hidden h-full aspect-square flex items-center justify-center">
		<img src={pic} alt="pic" class="rounded-full p-0 aspect-square object-cover" />
	</div>
	<div class="flex h-5/6 justify-between flex-col w-2/3">
		<span class="font-bold text-[125%]">
			{Name}
		</span>
		<span class="opacity-50 whitespace-nowrap overflow-hidden overflow-ellipsis">
			{lastChat}
		</span>
	</div>
	<div class="flex  flex-col justify-between h-5/6 w-1/6">
		<span>{parseInt((date.getHours()).toString())}:{date.getMinutes()}</span>
        <span class=""></span>
	</div>
</div>

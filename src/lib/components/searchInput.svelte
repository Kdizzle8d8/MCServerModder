<script>
	import { Input } from './ui/input';
	import { Search, X } from 'lucide-svelte';

	let { search = $bindable() } = $props();

	function clearSearch() {
		search = '';
	}
</script>

<div
	class="border-border bg-secondary focus-within:border-primary inline-flex h-min w-[60%] items-center gap-2 rounded-lg border-2 p-[5px]"
>
	<Search class="text-muted-foreground size-5" />
	<input class="w-full bg-inherit outline-none" bind:value={search} />
	{#if search}
		<button
			onclick={clearSearch}
			class="text-muted-foreground hover:text-primary focus:outline-none"
		>
			<X class="size-5" />
		</button>
	{/if}
</div>

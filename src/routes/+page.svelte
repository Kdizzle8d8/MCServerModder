<script>
	import { fetchMods } from '$lib/api/fetchMods';
	import SearchInput from '$lib/components/searchInput.svelte';
	import Mod from './mod.svelte';
	import SearchCard from './searchCard.svelte';

	let search = $state();
	let result = $state([]);
	let isLoading = $state(false);

	let sortBy = $state({
		value: 'relevance',
		label: 'Relevance',
		disabled: false
	});

	$effect(() => {
		isLoading = true;
		fetchMods(search, sortBy.value).then((newResult) => {
			result = newResult;
			isLoading = false;
		});
	});
</script>

<div class="flex h-full flex-1 justify-center p-2">
	<div class="mt-16 flex w-full flex-col items-center">
		<SearchCard bind:search class="w-[50rem]" bind:sortBy />
		<div class="mt-4 flex w-full flex-col items-center gap-4">
			{#if result.hits}
				{#each result.hits as item}
					<Mod mod={item} />
				{/each}
			{:else}
				<p>No results found.</p>
			{/if}
		</div>
	</div>
</div>

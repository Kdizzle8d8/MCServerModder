<script>
	import SearchInput from '$lib/components/searchInput.svelte';
	import * as Select from '$lib/components/ui/select';

	let { class: className, sortBy = $bindable(), search = $bindable() } = $props();

	$inspect(sortBy);
</script>

<div class="{className} bg-card h-min rounded-lg p-4 shadow-lg">
	<div class="flex items-center gap-4">
		<div class="flex-grow">
			<SearchInput bind:search />
		</div>
		<Select.Root bind:selected={sortBy}>
			Sort by:
			<Select.Trigger class="w-[120px]">
				<Select.Value placeholder="Sort" />
			</Select.Trigger>
			<Select.Content>
				<Select.Item value="relevance" label="Relevance"></Select.Item>
				<Select.Item value="downloads" label="Downloads"></Select.Item>
				<Select.Item value="published" label="Published"></Select.Item>
				<Select.Item value="updated" label="Updated"></Select.Item>
			</Select.Content>
		</Select.Root>
	</div>
</div>

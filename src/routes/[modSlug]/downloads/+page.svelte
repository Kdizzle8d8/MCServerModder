<script>
	import { fade, fly } from 'svelte/transition';
	import VersionCard from './versionCard.svelte';

	let { data } = $props();

	const tableData = data.mod.map(({ game_versions, loaders, name }) => ({
		name,
		supports: game_versions.flatMap((version) => loaders.map((loader) => `${loader}\n${version}`))
	}));
</script>

<div in:fade class="grid w-full grid-cols-[3rem_1fr_1fr_auto] gap-2 p-2">
	<strong></strong>
	<strong>Name</strong>
	<strong>Supports</strong>
	<strong>Stats</strong>
	<span class="border-border col-span-4 mb-2 mt-1 h-1 border-t-2"></span>
	{#each data.mod as mod}
		<VersionCard {mod} />
	{/each}
</div>

<style>
	strong {
		@apply w-min;
	}
</style>

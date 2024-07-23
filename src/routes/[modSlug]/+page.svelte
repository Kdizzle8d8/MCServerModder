<script lang="ts">
	import { writable } from 'svelte/store';

	let { data } = $props();

	let selectedVersion = writable('');
	let selectedLoader = writable('');
	let sortBy = writable('game_version'); // New store for sorting option

	let filteredVersions: any[] = $state([]);
	let uniqueVersions: string[] = $state([]);
	let uniqueLoaders: string[] = $state([]);

	$effect(() => {
		uniqueVersions = [...new Set(data.versions.flatMap((v: any) => v.game_versions))]
			.sort()
			.reverse();
		uniqueLoaders = [...new Set(data.versions.flatMap((v: any) => v.loaders))].sort();
	});

	$effect(() => {
		const mappedVersions = data.versions.map((version) => ({
			...version,
			version_number: version.version_number.split('-')[1]
		}));

		filteredVersions = mappedVersions.filter((version: any) => {
			const versionMatch = !$selectedVersion || version.game_versions.includes($selectedVersion);
			const loaderMatch = !$selectedLoader || version.loaders.includes($selectedLoader);
			return versionMatch && loaderMatch;
		});

		filteredVersions.sort((a, b) => {
			if ($sortBy === 'game_version') {
				return b.game_versions[0].localeCompare(a.game_versions[0]);
			} else {
				return b.version_number.localeCompare(a.version_number);
			}
		});
	});
</script>

<div class="bg-b;">
	<label>
		Filter by version:
		<select bind:value={$selectedVersion}>
			<option value="">All versions</option>
			{#each uniqueVersions as version}
				<option value={version}>{version}</option>
			{/each}
		</select>
	</label>

	<label>
		Filter by loader:
		<select bind:value={$selectedLoader}>
			<option value="">All loaders</option>
			{#each uniqueLoaders as loader}
				<option value={loader}>{loader}</option>
			{/each}
		</select>
	</label>

	<label>
		Sort by:
		<select bind:value={$sortBy}>
			<option value="game_version">Game Version</option>
			<option value="version_number">Version Number</option>
		</select>
	</label>
</div>

<ul>
	{#each filteredVersions as version}
		<li>
			<strong>Game Version:</strong>
			{version.game_versions.join(', ')}
			<strong>Loaders:</strong>
			{version.loaders.join(', ')}
			<strong>Version:</strong>
			{version.version_number}
		</li>
	{/each}
</ul>

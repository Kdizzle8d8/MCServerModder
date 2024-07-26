<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import type { Mod } from '$lib/types';
	import { Download } from 'lucide-svelte';
	import VersionStatus from './versionStatus.svelte';

	let { mod }: { mod: Mod } = $props();

	const modStatus = mod.status === 'listed' ? 'Released' : mod.status;
</script>

<div
	class="mocha bg-muted col-span-4 grid w-full grid-cols-[auto_1fr_1fr_auto] gap-2 rounded-lg bg-opacity-0 p-2 hover:bg-opacity-20 hover:shadow-xl"
>
	<button
		class="bg-red mr-2 h-8 w-8 self-center rounded-lg p-1 transition-transform hover:opacity-70 active:scale-95"
	>
		<Download class="mx-auto h-4 w-4 text-black" />
	</button>

	<div class="flex flex-col">
		<span class="">{mod.name}</span>
		<VersionStatus status={'released'} />
	</div>

	<div class="flex w-min flex-col">
		<span>{mod.game_versions}</span>
		<span>{mod.loaders}</span>
	</div>
	<div>{mod.downloads}</div>
</div>

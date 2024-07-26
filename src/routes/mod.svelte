<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Download, RefreshCcw } from 'lucide-svelte';

	let { mod }: { mod: any } = $props();

	let formattedDownloads = $derived.by(() => {
		if (mod.downloads >= 1000000) {
			return (mod.downloads / 1000000).toFixed(1) + 'M';
		} else if (mod.downloads >= 1000) {
			return (mod.downloads / 1000).toFixed(1) + 'K';
		} else {
			return mod.downloads.toString();
		}
	});

	let lastUpdated = $derived.by(() => {
		const now = new Date();
		const modified = new Date(mod.date_modified);
		const diffTime = Math.abs(now.getTime() - modified.getTime());
		const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

		if (diffHours < 24) {
			return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
		} else if (diffDays === 1) {
			return 'Yesterday';
		} else if (diffDays < 30) {
			return `${diffDays} days ago`;
		} else if (diffDays < 365) {
			const months = Math.floor(diffDays / 30);
			return `${months} ${months === 1 ? 'month' : 'months'} ago`;
		} else {
			const years = Math.floor(diffDays / 365);
			return `${years} ${years === 1 ? 'year' : 'years'} ago`;
		}
	});
</script>

<a
	class="border-border hover:border-primary bg-card flex w-full items-start justify-start rounded-lg border-2 p-4 shadow-xl transition-all hover:bg-opacity-50"
	href={`/${mod.slug}`}
>
	<div class="bg-secondary size-20 rounded-md">
		<img class="size-20" src={mod.icon_url} alt={mod.title} />
	</div>
	<div class="ml-4 grid grid-rows-3 gap-1">
		<h1 class="w-full text-start text-xl font-bold">{mod.title}</h1>
		<p class="text-muted-foreground w-full">{mod.description}</p>
		<div class="flex w-full gap-2">
			<div class="bg-primary flex flex-row items-center rounded-md px-2 py-1">
				<Download size={15} class="mr-1" />
				{formattedDownloads}
			</div>

			<div class="bg-primary flex flex-row items-center rounded-md px-2 py-1">
				<RefreshCcw size={15} class="mr-1" />
				{lastUpdated}
			</div>
		</div>
	</div>
</a>

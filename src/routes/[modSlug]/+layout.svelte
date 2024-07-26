<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { crossfade } from 'svelte/transition';

	let { children } = $props();

	const activePage = $derived.by(() => {
		const path = $page.url.pathname;
		if (path.endsWith('/description')) {
			return 'description';
		} else if (path.endsWith('/downloads')) {
			return 'downloads';
		} else {
			return 'description';
		}
	});

	const [send, receive] = crossfade({ duration: 400 });
</script>

<div class="p-4">
	<div class="bg-card flex flex-1 gap-4 rounded-lg p-4">
		<div class="flex flex-col">
			<a
				href="description"
				class={`${activePage === 'description' ? 'text-primary' : 'text-text'} transition-all`}
				>Description</a
			>
			{#if activePage === 'description'}
				<div
					in:receive={{ key: 'bar' }}
					out:send={{ key: 'bar' }}
					class="bg-primary h-1 w-full"
				></div>
			{/if}
		</div>
		<div class="flex flex-col">
			<a
				href="downloads"
				class={`${activePage === 'downloads' ? 'text-primary' : 'text-text'} transition-all`}
				>Downloads</a
			>
			{#if activePage === 'downloads'}
				<div
					in:receive={{ key: 'bar' }}
					out:send={{ key: 'bar' }}
					class="bg-primary h-1 w-full"
				></div>
			{/if}
		</div>
	</div>
	<div class="bg-card mt-4 flex h-full w-full rounded-lg p-4">
		{@render children()}
	</div>
</div>

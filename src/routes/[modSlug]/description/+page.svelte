<script>
	import { marked } from 'marked';
	import { fade, fly } from 'svelte/transition';
	let { data } = $props();

	const description = data.description.body;
</script>

<div in:fade class="bg-card w-full rounded-lg p-4 shadow-lg">
	<div
		class="prose mocha prose-invert prose-h1:text-green prose-h2:text-mauve prose-h3:text-red prose-h4:text-sapphire prose-h5:text-blue prose-h6:text-mauve prose-strong:text-red prose-a:text-blue max-w-none"
	>
		{@html marked.parse(description)}
	</div>
</div>

<style lang="postcss">
	:global(.prose a) {
		@apply hover:text-white;
	}

	:global(.prose details) {
		@apply border-border bg-card mb-4 overflow-hidden rounded-lg border-2;
	}

	:global(.prose summary) {
		@apply bg-muted cursor-pointer p-1 pl-2 font-semibold;
	}

	:global(.prose details > *:not(summary)) {
		@apply p-2;
	}
</style>

<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	let { status } = $props();
	const statusConfig = {
		released: { color: 'bg-green-500', textColor: 'text-green-500', text: 'Released' },
		beta: { color: 'bg-orange-300', textColor: 'text-orange-300', text: 'Beta' },
		alpha: { color: 'bg-red-500', textColor: 'text-red-500', text: 'Alpha' }
	};

	const { color, textColor, text } = statusConfig[status as keyof typeof statusConfig];
</script>

<div class=" flex items-center gap-2">
	<div class={`h-2 w-2 rounded-full ${color}`}></div>
	<strong class={textColor}>{text}</strong>
</div>

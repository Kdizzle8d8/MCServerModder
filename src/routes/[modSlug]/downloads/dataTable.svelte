<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import type { Mod } from '$lib/types';

	let { data } = $props<{ data: Mod[] }>();

	const properties = Object.keys(data[0] || {});

	function formatRow(value: any): string {
		if (Array.isArray(value)) {
			return value.map((item) => formatRow(item)).join(', ');
		}
		return String(value)
			.replace(/^\[|\]$/g, '')
			.replace(/^(.)/, (match) => match.toUpperCase());
	}
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			{#each properties as property}
				<Table.Head>{property.charAt(0).toUpperCase() + property.slice(1)}</Table.Head>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data as mod}
			<Table.Row>
				{#each properties as property}
					<Table.Cell>{formatRow(mod[property])}</Table.Cell>
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>

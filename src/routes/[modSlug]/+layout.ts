import type { Mod } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	const [downloadsResult, descriptionResult] = await Promise.all([
		fetch(`https://api.modrinth.com/v2/project/${params.modSlug}/version?limit=5`),
		fetch(`https://api.modrinth.com/v2/project/${params.modSlug}`)
	]);

	const downloadsData = await downloadsResult.json();
	const descriptionData = await descriptionResult.json();

	return {
		mod: downloadsData as Mod[],
		description: descriptionData
	};
};

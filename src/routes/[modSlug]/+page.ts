import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { modSlug } = params;
	const response = await fetch(`https://api.modrinth.com/v2/project/${modSlug}/version`);

	if (!response.ok) {
		throw new Error(`Failed to fetch mod versions: ${response.statusText}`);
	}

	const versions = await response.json();
	return { versions };
};

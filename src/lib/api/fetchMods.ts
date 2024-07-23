export async function fetchMods(modName: string, index: string) {
	const response = await fetch(
		`https://api.modrinth.com/v2/search?query=${modName}&facets=[[%22project_type:mod%22]]&limit=20&index=${index}`
	);
	const data = await response.json();
	return data;
}

export interface Mod {
	game_versions: string[];
	loaders: string[];
	id: string;
	project_id: string;
	author_id: string;
	featured: boolean;
	name: string;
	version_number: string;
	changelog: string;
	changelog_url: null;
	date_published: Date;
	downloads: number;
	version_type: string;
	status: string;
	requested_status: null;
	files: File[];
	dependencies: any[];
}

export interface File {
	hashes: Hashes;
	url: string;
	filename: string;
	primary: boolean;
	size: number;
	file_type: null;
}

export interface Hashes {
	sha1: string;
	sha512: string;
}

import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.js';
import type { Link } from '$lib/types/link.js';

export async function load({params})
{
    return {
        category : params.category,
        entries : getEntries(params.category)
    }
}

function getEntries(category : string) : string[]
{
    return FileSystemHelper.getDirectories("./data/taxonomy/" + category)
}
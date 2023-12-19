import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.js';
import type { Link } from '$lib/types/link.js';

export async function load({params})
{
    return {
        categories : getCategories()
    }
}

function getCategories() : string[]
{
    return FileSystemHelper.getDirectories("./data/taxonomy")
}
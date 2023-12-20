import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.js';

export async function load({params})
{
    return {
        category : params.category,
        entries : getEntries(params.category),
        timestamp : new Date()
    }
}

function getEntries(category : string) : string[]
{
    return FileSystemHelper.getDirectories("./data/taxonomy/" + category)
}
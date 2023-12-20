import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.js'

export async function load({params})
{
    return {
        posts : getBlogpostEntries(),
    }
}

function getBlogpostEntries() : string[]
{
    return FileSystemHelper.getDirectories("./data/blog")
}
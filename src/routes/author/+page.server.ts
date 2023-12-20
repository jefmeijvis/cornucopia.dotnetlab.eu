import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.js'

export function load({params})
{
    return {
        authors : getAuthors()
    }
}

function getAuthors()
{
    return FileSystemHelper.getDirectories("./data/author")
}
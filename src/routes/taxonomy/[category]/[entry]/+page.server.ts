import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.js';
import type { Link } from '$lib/types/link.js';
import fs from "fs"

export async function load({params})
{
    return {
        category : params.category,
        entry : params.entry,
        markdown : getMarkdown(params.category, params.entry)
    }
}

function getMarkdown(category : string, entry : string) : string
{
    let filepath : string = "./data/taxonomy/" + category + '/' + entry + '/index.md';
    let markdown = fs.readFileSync(filepath, 'utf8');
    return markdown;
}
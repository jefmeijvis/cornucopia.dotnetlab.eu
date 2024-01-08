import { FileSystemHelper } from "$lib/filesystem/fileSystemHelper";
import fs from 'fs'
import fm from "front-matter"

export class Blogpost 
{ 
    id : number = -1;
    title : string = "Default title"
    markdown : string = "Default markdown blogpost content goes here :)";
    attributes : any = {};
}

export function getBlogpostEntries() : Blogpost[]
{
    let result : Blogpost[] = []
    let basepath : string = "./data/blog";

    // Collect all directories
    let directories = FileSystemHelper.getDirectories(basepath);

    // For every directory, fetch the 'index.md' file
    for(let i = 0 ; i < directories.length ; i++)
    {
        let directory = directories[i];
        let filepath = basepath + '/' + directory + '/index.md'
        let filecontent = fs.readFileSync(filepath, 'utf8');
        let parsed = fm(filecontent);
        let post : Blogpost = 
        {
            id : parsed.attributes.id ?? -1,
            title : directory,
            markdown : parsed.body,
            attributes : parsed.attributes
        }

        if(post.attributes.published)
            result.push(post)
    }
    result.sort((a : Blogpost, b : Blogpost) => a.id - b.id)
    return result;
}
import { FileSystemHelper } from "$lib/filesystem/fileSystemHelper";
import fs from 'fs'
import fm from "front-matter"
import type { Blogpost } from "./blogpost";

export function getBlogposts() : Blogpost[]
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
        let file = fs.readFileSync(filepath, 'utf8');
        let parsed = fm(file);
        let post : Blogpost = 
        {
            title : directory.substring(9),
            markdown : parsed.body,
            //@ts-ignore
            author : parsed.attributes.author,
            //@ts-ignore
            hidden : parsed.attributes.hidden,
            //@ts-ignore
            date : parsed.attributes.date,
            //@ts-ignore
            tags : parsed.attributes.tags.split(','),
            //@ts-ignore
            path : directory,
        }

        if(!post.hidden)
            result.push(post)
    }

    result.sort((a : Blogpost, b : Blogpost) => ('' + a.date).localeCompare(b.date))
    return result;
}

export function getBlogpostsByAuthor(name : string) : Blogpost[]
{
    let blogposts = getBlogposts();
    return blogposts.filter(post => post.author == name);
}

export function getBlogpostByTitle(title : string) : Blogpost
{
    let blogposts = getBlogposts();
    
    return blogposts.find(post => {return post.path == title}) || {} as Blogpost
}
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
            //@ts-ignore
            id : parsed?.attributes?.id ?? -1,
            title : directory,
            markdown : parsed.body,
            //@ts-ignore
            author : parsed.attributes.author,
            //@ts-ignore
            published : parsed.attributes.published,
            //@ts-ignore
            date : parsed.attributes.date,
            //@ts-ignore
            tags : parsed.attributes.tags.split(',')
        }

        if(post.published)
            result.push(post)
    }

    result.sort((a : Blogpost, b : Blogpost) => a.id - b.id)
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
    return blogposts.find(post => post.title == title) || {} as Blogpost
}
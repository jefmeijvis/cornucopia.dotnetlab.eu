import fs from "fs"
import fm from "front-matter"
import { getBlogpostByTitle } from "../../../domain/blogpost/blogpostController.js";

export async function load({params})
{
    let filepath : string = "./data/blog/" + params.slug + '/index.md';
    let filecontent = fs.readFileSync(filepath, 'utf8');
    let parsed = fm(filecontent);

    return {
        blogpost : getBlogpostByTitle(params.slug)
    }
}
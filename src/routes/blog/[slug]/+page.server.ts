import fs from "fs"
import fm from "front-matter"

export async function load({params})
{
    let filepath : string = "./data/blog/" + params.slug + '/index.md';
    let filecontent = fs.readFileSync(filepath, 'utf8');
    let parsed = fm(filecontent);

    return {
        markdown : parsed.body,
        author : parsed.attributes.author,
        date : parsed.attributes.date,
    }
}
import fs from "fs"

export async function load({params})
{
    return {
        markdown : getAuthorMarkdown(params.name),
        author : params.name,
    }
}

function getAuthorMarkdown(name : string)
{
    let filepath : string = "./data/author/" + name + '/index.md';
    let markdown = fs.readFileSync(filepath, 'utf8');
    return markdown;
}

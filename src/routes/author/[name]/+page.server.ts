import fs from "fs"

export async function load({params})
{
    const images = import.meta.glob('./data/author/ive-verstappen/*');
    console.dir(images)

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

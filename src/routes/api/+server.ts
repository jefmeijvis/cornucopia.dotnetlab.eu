import type { RequestEvent } from "./$types";
import fs from "fs";

export const prerender = true

export async function GET() 
{
    let root : string = "./data"
    let data = {};
    let dirs = await fs.readdirSync("./data"); 
    let treeStructure : any = {};
    for(let i = 0 ; i <dirs.length ; i++)
    {
        let dir = dirs[i];

        let d = await fs.readdirSync(root + '/' + dir); 
        treeStructure[dir] = d
    }

    console.dir(treeStructure)

    return new Response(JSON.stringify(treeStructure));
}
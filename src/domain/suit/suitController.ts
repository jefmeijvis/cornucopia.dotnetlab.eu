import type { Suit } from "./suit";
import { FileSystemHelper } from "$lib/filesystem/fileSystemHelper";
import { getCardsBySuit } from "../card/cardController";

export function getSuits() : Suit[]
{
    let path : string = './data/cards/cornucopia-v1/';
    let directories = FileSystemHelper.getDirectories(path);

    let suits = new Array<Suit>();
    console.dir(directories)

    for(let i = 0 ; i < directories.length ; i++)
    {
        let directory : string = directories[i];
        let suit : Suit = 
        {
            name : directory.substring(2,directory.length),
            cards  : getCardsBySuit(directory)
        };
        suits.push(suit);
    }

    return suits;
}
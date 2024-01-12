import fs from "fs";

export class FileSystemHelper
{
    public static getDirectories(path : string) : string[]
    {
        return fs.readdirSync(path,{ withFileTypes: true })
        .filter(x => x.isDirectory())
        .map(dirent => dirent.name);
    }
}


import fs from "fs";

export class FileSystemHelper
{
    public static getDirectories(path : string) : string[]
    {
        return fs.readdirSync(path);
    }
}


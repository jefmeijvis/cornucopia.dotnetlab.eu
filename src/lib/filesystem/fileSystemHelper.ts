import fs from "fs";

export class FileSystemHelper
{
    public static getDirectories(path : string) : string[]
    {
        //console.log('📂 scanning ' + path + ' for directories')
        return fs.readdirSync(path,{ withFileTypes: true })
        .filter(x => x.isDirectory())
        .map(dirent => dirent.name);
    }

    public static getFiles(path : string) : string[]
    {
        //console.log('📂 scanning ' + path + ' for files')
        return fs.readdirSync(path,{ withFileTypes: true })
        .filter(x => x.isFile())
        .map(dirent => dirent.name);
    }
}


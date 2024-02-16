import fs from "fs";
import path from "path";
import type { Route } from "../../domain/routes/route";

export class FileSystemHelper {
  public static getDirectories(path: string): string[] {
    // console.log('📂 scanning ' + path + ' for directories')
    return fs
      .readdirSync(path, { withFileTypes: true })
      .filter((x) => x.isDirectory())
      .map((dirent) => dirent.name);
  }

  public static getFiles(path: string): string[] {
    // console.log('📂 scanning ' + path + ' for files')
    return fs
      .readdirSync(path, { withFileTypes: true })
      .filter((x) => x.isFile())
      .map((dirent) => dirent.name);
  }

  public static getRouteStructure(): any[] {
    const basePath: string = "data\\taxonomy\\ASVS-4.0.3";
    const sectionRegex = /^(\d{2})-/;
    let routes: Route[] = [];

    const firstLevelDirs = this.getDirectories(basePath).filter((dir) =>
      sectionRegex.test(dir)
    );

    firstLevelDirs.forEach((firstLevelDir) => {
      const firstLevelPath = path.join(basePath, firstLevelDir);
      const firstPart = firstLevelDir.match(sectionRegex)?.[1];

      const secondLevelDirs = this.getDirectories(firstLevelPath).filter(
        (dir) => sectionRegex.test(dir)
      );

      secondLevelDirs.forEach((secondLevelDir) => {
        const secondPart = secondLevelDir.match(sectionRegex)?.[1];
        const section = `${firstPart}.${secondPart}`;
        const fullPath = path.join(firstLevelPath, secondLevelDir);

        routes.push({
          Path: fullPath.replace("data\\", "/").replaceAll('\\','/'),
          Section: section,
        });
      });
    });

    return routes;
  }
}

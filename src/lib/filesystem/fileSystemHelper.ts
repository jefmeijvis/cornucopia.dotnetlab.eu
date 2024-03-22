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

  public static ASVSRouteMap(): any[] {
    const basePath: string = "data/taxonomy/ASVS-4.0.3";
    const sectionRegex = /^(\d{2})-/;
    let routes: Route[] = [];

    const firstLevelDirs = this.getDirectories(basePath).filter((dir) =>
      sectionRegex.test(dir)
    );

    firstLevelDirs.forEach((firstLevelDir) => {
      const firstLevelPath = basePath + "/" + firstLevelDir;
      const firstPart = firstLevelDir.match(sectionRegex)?.[1];

      const secondLevelDirs = this.getDirectories(firstLevelPath).filter(
        (dir) => sectionRegex.test(dir)
      );

      secondLevelDirs.forEach((secondLevelDir) => {
        const secondPart = secondLevelDir.match(sectionRegex)?.[1];
        const section = `${firstPart}.${secondPart}`;
        let fullPath = firstLevelPath + "/" + secondLevelDir;
        fullPath = fullPath.replace("data/taxonomy", "/taxonomy");

        routes.push({
          Path: fullPath,
          Section: section,
        });
      });
    });

    return routes;
  }

  public static TOP10RouteMap(): any[] {
    const basePath: string = "data/taxonomy/OWASP-top-10";
    const sectionRegex = /^(\d{2})-/;
    let routes: Route[] = [];

    const firstLevelDirs = this.getDirectories(basePath).filter((dir) =>
      sectionRegex.test(dir)
    );
    console.log("firstLevelDirs", firstLevelDirs);
    firstLevelDirs.forEach((firstLevelDir) => {
      const firstLevelPath = basePath + "/" + firstLevelDir;
      const firstPart = firstLevelDir.match(sectionRegex)?.[1];

      let fullPath = firstLevelPath + "/";
      fullPath = fullPath.replace("data/taxonomy", "/taxonomy");
      console.log("...."+fullPath, firstLevelDir);
      routes.push({
        Path: fullPath,
        Section: firstPart!,
      });
    });

    return routes;
  }
}

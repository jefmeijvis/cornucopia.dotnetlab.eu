import type { Blogpost } from "../../domain/blogpost/blogpost.js";
import { LocalCache } from "$lib/utils/cache.js";
import { getBlogposts } from "../../domain/blogpost/blogpostController.js";
export const prerender = true;
// Header options
const responseInit: ResponseInit = {
  headers: {
    "Cache-Control": `max-age=0, s-max-age=${600}`,
    "Content-Type": "application/xml",
  },
};

let bodyStart =
  '<?xml version="1.0" encoding="UTF-8" ?>' +
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">' +
  "<channel>" +
  '<atom:link href="https://cornucopia.dotnetlab.eu/rss" rel="self" type="application/rss+xml" />' +
  "<title>Cornucopia dotnetlab</title>" +
  "<link>https://cornucopia.dotnetlab.eu</link>" +
  "<language>en</language>" +
  "<description>Blogging about general secure software development. Often making use of .NET, Azure and Svelte</description>" +
  "<image>" +
  "<url>https://cornucopia.dotnetlab.eu/images/favicon.png</url>" +
  "<title>Cornucopia dotnetlab</title>" +
  "<link>https://cornucopia.dotnetlab.eu</link>" +
  "</image>";

let bodyEnd = "</channel>" + "</rss>";

export async function GET() {
  let json = await LocalCache(() => getBlogposts(), 20, "posts");

  let body: string = bodyStart;
  for (let i = 0; i < json.length; i++) {
    let post: Blogpost = json[i];
    body += "<item>";

    // Title
    body += "<title>";
    body += post.title;
    body += "</title>";
   
    // Link
    body += "<link>";
    body += generateLink(post);
    body += "</link>";
    // Description
    body += "<description>";
    body += generateDescription(post);
    body += "</description>";

    // Guid
    body += '<guid isPermaLink="true">';
    body += generateLink(post);
    body += "</guid>";

    // Guid
    body += '<source url="https://cornucopia.dotnetlab.eu/rss">';
    body += "cornucopia dotnetlab";
    body += "</source>";

    // Category
    for (let j = 0; j < post.tags.length; j++) {
      body += "<category>";
      body += post.tags[j].trim();
      body += "</category>";
    }

    // PubDate
    body += "<pubDate>";
    body += generateDate(post);
    body += "</pubDate>";

    body += "</item>";
  }

  body += bodyEnd;
  return new Response(body, responseInit);
}

function generateDescription(post: Blogpost) {
  let desc: string = post.description?.slice(0, 200)+ "...";
  return desc;
}

function generateDate(post: Blogpost): string {
  let date: string = post.date.toString();
  let year = date.slice(0, 4);
  let month = date.slice(4, 2);
  let day = date.slice(6, 2);

  let d: Date = new Date();
  d.setDate(Number.parseInt(day));
  d.setMonth(Number.parseInt(month));
  d.setFullYear(Number.parseInt(year));
  return d.toUTCString();
}

function generateLink(post: Blogpost): string {
  return "https://cornucopia.dotnetlab.eu/blog/" + post.path;
}

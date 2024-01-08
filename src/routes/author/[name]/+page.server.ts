import { getAuthor } from "../../../domain/author/authorController.js"
import type { Author } from "../../../domain/author/author.js";

export async function load({params})
{
    return {
        author : getAuthor(params.name),
    }
}
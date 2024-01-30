import { getBlogpostByTitle } from "../../../domain/blogpost/blogpostController.js";

export async function load({params})
{
    return {
        blogpost : getBlogpostByTitle(params.slug)
    }
}
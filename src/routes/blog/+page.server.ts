import { getBlogposts } from '../../domain/blogpost/blogpostController.js'

export async function load({params})
{
    return {
        posts : getBlogposts(),
    }
}



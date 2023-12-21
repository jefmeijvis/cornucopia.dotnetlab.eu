import { getBlogpostEntries, type Blogpost } from './posts.js'

export async function load({params})
{
    return {
        posts : getBlogpostEntries(),
    }
}



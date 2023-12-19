export const prerender = true;

export async function load(event) 
{
    //let data = await event.fetch('/api/data');
	//return {data: JSON.stringify(data)}
    return {
        renderTimestamp : getRenderTimestamp(),
    }
}

function getRenderTimestamp()
{
    return new Date();
}
export type Blogpost =
{ 
    id : number,
    title : string,
    author : string,
    markdown : string,
    tags : string[],
    published : boolean,
    date : string,
}
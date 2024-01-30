<script>
    import { goto } from '$app/navigation';
    import { Text } from '$lib/utils/text';

    export let data;
</script>

<h1>Blogposts</h1>

{#if data.posts.length == 0}
<p>No blogposts have been published yet, come back soon!</p>
{:else}
    <div class="list">
        {#each data.posts as post}
            <button title="View {Text.Format(post.path)}" on:click={()=>goto('/blog/' + post.path)}>
                <p class="title">{Text.Format(post.title)}</p>
                <p class="info">
                    {Text.FormatDate(post.date)}
                     • 
                    {Text.Format(post.author)}
                    <a class= "link" href="/blog/{post.path}">>> Read more</a>
                </p>
            </button>
        {/each}
    </div>
{/if}


<p>View <a href="/author">All authors</a></p>
{#each data.authors as author}
    <p style="display:none;">
        <a href="/author/{author.name}">{author.name}</a>
    </p>
{/each}


<style>
    .link
    {
        display: none;
    }
    .info
    {
        font-size: 1rem;
        margin: 1rem;
    }

    .title
    {
        background-color: var(--white);
        color: var(--background);
        margin: 0;
        padding: .5rem;
    }
    button
    {
        padding: 0;
        width : 100%;
        text-align: left;
        font-family: var(--font-title);
        font-weight: 400;
        background: none;
        border:none;
        cursor:pointer;
        color:var(--white);
        outline: 1px white solid;
        margin-bottom: 2rem;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    }

    button:hover
    {
        opacity: 70%;
    }

    p
    {
        font-size: 1.5rem;
    }

    .list
    {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
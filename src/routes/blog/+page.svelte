<script>
    
    export let data;
</script>

<h1>Blogposts</h1>

<div class="list">
{#each data.posts as post}
    <p>
        <a href="/blog/{post}">{post}</a>
    </p>
{/each}
</div>

<p>View <a href="/author">All authors</a></p>


<style>

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
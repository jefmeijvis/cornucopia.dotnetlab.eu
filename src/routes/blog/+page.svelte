<script>
    
    export let data;
</script>

<h1>Overview of blogposts:</h1>

{#each data.posts as post}
    <p>
        <a href="/blog/{post}">{post}</a>
    </p>
{/each}

<p>View <a href="/author">All authors</a></p>
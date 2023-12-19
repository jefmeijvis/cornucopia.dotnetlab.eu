<script>
    export let data;
</script>

<h1>Taxonomy overview:</h1>
{#each data.categories as category}
    <p><a href="/taxonomy/{category}">{category}</a></p>
{/each}
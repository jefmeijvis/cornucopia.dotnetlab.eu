<script>
    import { Text } from "$lib/utils/text";

    export let data;
</script>

<h1>Authors</h1>

{#each data.authors as author}
    <p>
        <a href="/author/{author.name}">{Text.Format(author.name)}</a>
    </p>
{/each}

<style>
    p
    {
        font-size: 1.5rem;
    }
</style>
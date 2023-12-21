<script>
    import { Text } from "$lib/utils/text";

    export let data;
</script>

<h1>Authors</h1>

{#each data.authors as author}
    <p>
        <a href="/author/{author}">{Text.Format(author)}</a>
    </p>
{/each}
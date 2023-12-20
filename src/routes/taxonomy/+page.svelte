<script>
    import { Text } from "$lib/utils/text";

    export let data;
</script>

{#each data.categories as category}
    <p><a href="/taxonomy/{category}">{Text.Format(category)}</a></p>
{/each}
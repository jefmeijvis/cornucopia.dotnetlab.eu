<script>
    import { Text } from "$lib/utils/text";

    export let data;
</script>

{#each data.entries as entry}
    <p><a href="/taxonomy/{data.category}/{entry}">{Text.Format(entry)}</a></p>
{/each}
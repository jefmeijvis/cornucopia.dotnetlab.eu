<script>
    import { Text } from "$lib/utils/text";
    import { fly } from "svelte/transition";

    export let data;
</script>

{#each data.entries as entry}
    <p>
        ├──<a href="/taxonomy/{data.category}/{entry}">{Text.Format(entry)}</a>
    </p>
{/each}

<style>
    p
    {
        font-size: 1.5rem;
        margin:0;
    }
</style>
<script>
    export let data;
</script>

<a href="/taxonomy/">Go back</a>
<h1>{data.category}</h1>
{#each data.entries as entry}
    <p><a href="/taxonomy/{data.category}/{entry}">{entry}</a></p>
{/each}
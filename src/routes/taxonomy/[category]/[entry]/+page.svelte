<script>
    export let data;
    import SvelteMarkdown from 'svelte-markdown'
</script>

<a href="/taxonomy/{data.category}">Go back</a>
<h1>{data.category} - {data.entry}</h1>
<SvelteMarkdown source={data.markdown}></SvelteMarkdown>
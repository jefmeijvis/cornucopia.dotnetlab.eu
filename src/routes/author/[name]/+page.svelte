<script>
    import SvelteMarkdown from "svelte-markdown";
    export let data;
</script>

<SvelteMarkdown source={data.markdown}></SvelteMarkdown>
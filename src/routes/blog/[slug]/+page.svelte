<script>
    import SvelteMarkdown from 'svelte-markdown'
    import BlogpostMetadata from '$lib/components/blogpostMetadata.svelte';
    export let data
</script>

<BlogpostMetadata attributes={data.attributes}></BlogpostMetadata>
<SvelteMarkdown source={data.markdown}></SvelteMarkdown>
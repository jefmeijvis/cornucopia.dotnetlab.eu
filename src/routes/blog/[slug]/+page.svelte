<script>
    import SvelteMarkdown from 'svelte-markdown'
    import renderers from '$lib/components/renderers/renderers';
    import BlogpostMetadata from '$lib/components/blogpostMetadata.svelte';
    export let data
</script>

<BlogpostMetadata attributes={data.attributes}></BlogpostMetadata>
<SvelteMarkdown {renderers} source={data.markdown}></SvelteMarkdown>
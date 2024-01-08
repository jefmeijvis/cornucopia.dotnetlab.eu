<script>
    import SvelteMarkdown from 'svelte-markdown'
    import renderers from '$lib/components/renderers/renderers';
    import BlogpostMetadata from '$lib/components/blogpostMetadata.svelte';
    import Utterances from '$lib/components/utterances.svelte';
    export let data
</script>

<BlogpostMetadata attributes={data.attributes}></BlogpostMetadata>
<SvelteMarkdown {renderers} source={data.markdown}></SvelteMarkdown>
<Utterances delay={100} name={data.attributes.id  + '-' + data.attributes.title}></Utterances>
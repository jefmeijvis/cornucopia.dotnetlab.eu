<script>
    export let data;
    import { Text } from '$lib/utils/text';
    import SvelteMarkdown from 'svelte-markdown'
    import renderers from '$lib/components/renderers/renderers';
</script>

<h1>{Text.Format(data.category)} - {Text.Format(data.entry)}</h1>
<SvelteMarkdown {renderers} source={data.markdown}></SvelteMarkdown>
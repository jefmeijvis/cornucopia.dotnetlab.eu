<script>
    export let data;
    import { Text } from '$lib/utils/text';
    import SvelteMarkdown from 'svelte-markdown'
</script>

<h1>{Text.Format(data.category)} - {Text.Format(data.entry)}</h1>
<SvelteMarkdown source={data.markdown}></SvelteMarkdown>
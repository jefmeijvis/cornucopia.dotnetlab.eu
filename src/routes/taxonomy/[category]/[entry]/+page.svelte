<script>
    export let data;
    import { Text } from '$lib/utils/text';
    import SvelteMarkdown from 'svelte-markdown'
    import renderers from '$lib/components/renderers/renderers';
    import ViewSourceOnGithub from "$lib/components/viewSourceOnGithub.svelte"
    import Utterances from "$lib/components/utterances.svelte"
</script>

<h1>{Text.Format(data.category)} - {Text.Format(data.entry)}</h1>
<SvelteMarkdown {renderers} source={data.markdown}></SvelteMarkdown>
<ViewSourceOnGithub path="data/taxonomy/{data.category}/{data.entry}/index.md"></ViewSourceOnGithub>
<Utterances delay={100} name={data.category + '-' + data.entry}></Utterances>

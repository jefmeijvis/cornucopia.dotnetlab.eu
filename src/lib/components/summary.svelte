<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    import renderers from "$lib/components/renderers/renderers"
    import type { Card } from "../../domain/card/card";
    export let cardObject : Card
</script>

<div>
    <SvelteMarkdown {renderers} source={cardObject.summary}></SvelteMarkdown>
</div>
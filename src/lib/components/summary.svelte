<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    import { getCardBySuitAndName } from "../../domain/card/cardController";
    import renderers from "$lib/components/renderers/renderers"

    export let suit : string;
    export let card : string;
    let cardObject = getCardBySuitAndName(suit,card);
</script>

<div>
    <SvelteMarkdown {renderers} source={cardObject.summary}></SvelteMarkdown>
</div>
<script lang="ts">
    import { page } from "$app/stores";
    import { GetCardAttacks, GetCardDescription, GetCardImageUrl, GetCardMappings, type Attack, type Mapping } from "$lib/cards";
    import AsvsOverview from "$lib/components/ASVSOverview.svelte";
    import MappingsList from "$lib/components/mappingsList.svelte";
    import Utterances from "$lib/components/utterances.svelte";
    import data from "$lib/data";
    import Summary from "./summary.svelte";
    import {Text} from "$lib/utils/text"
    import type { Card } from "../../domain/card/card";
    import CardBrowser from "./cardBrowser.svelte";

    export let suit : string;
    export let card : string;
    export let cardObject : Card;



    function linkASVS(input : string)
    {
        return "https://owasp-aasvs.readthedocs.io/en/latest/requirement-" + input + ".html"
    }

    function linkCapec(input : string)
    {
        return "https://capec.mitre.org/data/definitions/" + input + ".html"
    }

    let title : string = ""
    let mappings : Mapping | undefined = GetCardMappings(suit,card);
    let attacks : Attack[] = GetCardAttacks(suit,card);

    $: 
    {
        title = suit[0].toUpperCase() + suit.substring(1,suit.length) + " " + card.toUpperCase();
        mappings = GetCardMappings(suit,card);
        attacks = GetCardAttacks(suit,card);
    }






</script>

{#key $page.url.pathname}
    <div class="container">
        <h1 class="title">{Text.Format(title)}</h1>
        <Summary {cardObject}></Summary>
        <CardBrowser {card} {suit} {data}></CardBrowser>
        <a class="link" href="/how-to-play">How to play?</a>
        <p>{GetCardDescription(suit,card)}</p>
        {#if mappings}
            <h1 class="title">Mappings</h1>
            <MappingsList title="Owasp ASVS (3.0):" mappings={mappings.owasp_asvs} linkFunction={linkASVS}/>
            <MappingsList title="Capec" mappings={mappings.capec} linkFunction={linkCapec}/>
            <MappingsList title="Owasp SCP:" mappings={mappings.owasp_scp} />
            <MappingsList title="Owasp Appsensor:" mappings={mappings.owasp_appsensor}/>
            <MappingsList title="Safecode" mappings={mappings.safecode}/>
        {/if}

        <h1 class="title">ASVS (4.0) Cheatsheetseries Index</h1>
        {#if mappings}
            <AsvsOverview mappings={mappings.owasp_asvs}></AsvsOverview>
        {/if}
        <h1 class="title">Attacks</h1>
        {#each attacks as attack}
            <p><a href="/taxonomy/attacks/{attack.url}">{attack.name}</a></p>
        {/each}

        <h1 class="title">Comments</h1>
        <Utterances name={suit + ' ' + card}></Utterances>
    </div>
{/key}

<style>
  
    p
    {
        font-size: 1.5rem;
    }
    h1,a,p
    {
        color: var(--white);
        font-family: 'modern-dos';
        font-weight: 400;
    }

    .link
    {
        text-align: center;
        width : 100%;
        display:block;
        margin-top: 1rem;
        font-size: 1.5rem;
    }

    .title
    {
        background: var(--white);
        color: var(--background);
        padding: .5rem;
    }

    .container
    {
        margin: auto;
        width : 60%;
        padding: 1rem;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .container
        {
            width : calc(100% - 2rem);
        }
    }
</style>
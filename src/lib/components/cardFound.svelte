<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onDestroy } from "svelte";
    import { GetCardAttacks, GetCardDescription, GetCardImageUrl, GetCardMappings, type Attack, type Mapping } from "$lib/cards";
    import AsvsOverview from "$lib/components/ASVSOverview.svelte";
    import CardPreview from "$lib/components/cardPreview.svelte";
    import MappingsList from "$lib/components/mappingsList.svelte";
    import Utterances from "$lib/components/utterances.svelte";
    import data from "$lib/data";
    import { browser } from "$app/environment";
    import Summary from "./summary.svelte";

    export let suit : string;
    export let card : string;

    let tape : string[]= [];

    for(let i = 0 ; i < data.suits.length ; i++)
    {
        let suit = data.suits[i];
        let suitName : string = suit.name;
        suitName = suitName.replaceAll(' ','-');
        for(let j = 0 ; j < suit.cards.length ; j++)
        {
            let card = suit.cards[j];
            let value = card.value;
            value = value.replace('joker','joker-')
            tape.push('/' + suitName.toLowerCase() + '/' + value.toLowerCase())
        }
    }

    function linkASVS(input : string)
    {
        return "https://owasp-aasvs.readthedocs.io/en/latest/requirement-" + input + ".html"
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

    function getNextCardLink()
    {
        let index = getCurrentIndex();
        index = addToIndex(index,+1)
        return tape[index]
    }

    function getPreviousCardLink()
    {
        let index = getCurrentIndex();
        index = addToIndex(index,-1)
        return tape[index]
    }

    function addToIndex(index : number, input : -1 | 1) : number
    {
        index =  index + input;

        if(index == -1)
            index = tape.length-1

        if(index == tape.length)
            index = 0;

        
        return index;
    }

    function goNext()
    {
        let url = getNextCardLink();
        console.log(url)
        url = url.replace('/','')
        card = url.split('/')[1];
        suit = url.split('/')[0];
        goto('/' + url)
    }

    function goPrevious()
    {
        let url = getPreviousCardLink();
        console.log(url)
        url = url.replace('/','')
        card = url.split('/')[1];
        suit = url.split('/')[0];
        goto('/' + url)
    }

    function getCurrentIndex() : number
    {
        let path : string = $page.url.pathname;
        return tape.indexOf(path);
    }

    function checkKey(e : any) 
    {
        var event = window.event ? window.event : e;
        if(event.keyCode == 39)
        {
            goNext();
        }

        if(event.keyCode == 37)
        {
            goPrevious();
        }
    }



    onDestroy(()=> {if(browser)document.onkeydown = null})

    if(browser)
        document.onkeydown = checkKey;
</script>

{#key card}
    <div class="container">
        <h1 class="title">{title}</h1>
            <Summary {suit} {card}></Summary>

        <div class="card-panel">
            <div class="left">
                <button title="View previous card" on:click="{()=>goPrevious()}">{"<"}</button>
            </div>
            <div class="center">
                <CardPreview url={GetCardImageUrl(suit,card)}></CardPreview>
            </div>
            <div class="right">
                <button title="View next card" on:click="{()=>goNext()}">{">"}</button>
            </div>
        </div>
        <a class="link" href="/how-to-play">How to play?</a>
        <p>{GetCardDescription(suit,card)}</p>
        {#if mappings}
            <h1 class="title">Mappings</h1>
            <MappingsList title="Owasp ASVS (3.0):" mappings={mappings.owasp_asvs} linkFunction={linkASVS}/>
            <MappingsList title="Capec" mappings={mappings.capec} linkFunction={(input)=>"https://capec.mitre.org/data/definitions/" + input + ".html"}/>
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
    button
    {
        width : 100%;
        height : 100%;
        background: none;
        padding: 0;
        font-size: 5rem;
        border:none;
        cursor:pointer;
    }

    button:hover
    {
        opacity: 50%;
    }

    .left,.right
    {
        min-width: 5rem;
        font-size: 5rem;
        cursor:pointer;
        text-align: center;
    }

    .center
    {
        width : max(15vw, 15vh);
    }

    .card-panel
    {
        margin:0;
        width : 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
    }
    p
    {
        font-size: 1.5rem;
    }
    h1,a,button,p
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

        button
        {
            width : 100%;
        }

        .container
        {
            width : 100vw;
        }

        .center
        {
            width : 70vw;
        }

        .left,.right
        {
            padding-top: 60%;
            font-size: 2rem;
            width : 15vw;
        }
    }
</style>
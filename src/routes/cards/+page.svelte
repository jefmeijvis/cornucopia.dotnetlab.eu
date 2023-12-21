<script lang="ts">
    import { GetCardImageUrl } from "$lib/cards";
    import CardPreview from "$lib/components/cardPreview.svelte";
    import data from "./data";
    let card : string;
    let suit : string;

    let map : Map<string,boolean> = new Map();
    for(let i = 0 ; i < data.suits.length ; i++)
    {
        map.set(data.suits[i].name,false);
    }

    function generateLink(suitParam : string , cardParam : string)
    {
        suitParam = suitParam.toLowerCase();
        suitParam = suitParam.replaceAll(" ","-");

        cardParam = cardParam.replace("JokerA","joker-a");
        cardParam = cardParam.replace("JokerB","joker-b");
        return `/${suitParam}/${cardParam}`;
    }

    function toggle(suit : string)
    {
        let value : boolean = map.get(suit) || false;
        map.set(suit,!value);
        map = map;
    }

    function enter(suitParam : string, cardParam : string)
    {
        suit = suitParam;
        card = cardParam;
    }

    let width: number;
    let height: number;
    export let mobile: boolean = false;

    function getMobile(w: number, h: number) 
    {
        mobile = w / h < 1;
    }

    $: getMobile(width, height);

</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div style="display:none;">
    {#each data.suits as suit}
        {#each suit.cards as card}
            <a href="{generateLink(suit.name,card.value)}">{card.value}</a>
        {/each}
    {/each}
</div>

<div class="container">
    <div class="tree">
        <h1>Cards</h1>
        {#each data.suits as suit}
            <h2 on:keypress="{()=>toggle(suit.name)}" on:click="{()=>toggle(suit.name)}">└── {suit.name}</h2>
            {#if map.get(suit.name)}
                {#each suit.cards as card}
                    <p on:mouseenter={()=>{enter(suit.name,card.value)}}><a href="{generateLink(suit.name,card.value)}">├── {card.value}</a></p>
                {/each}
            {/if}
        {/each}
    </div>
    <div class="preview-container">
        {#if !mobile}
            <CardPreview url={GetCardImageUrl(suit,card)}></CardPreview>
        {/if}
    </div>
</div>

<style>
    .preview-container
    {
        padding-top: 5rem;
        width : 20%;
    }

    .container
    {
        display: flex;
        flex-direction: row;
        width : 100%;
        height : 100%;
        margin-bottom: 50vh;
    }

    h2
    {
        padding-left: 1rem;
        margin:0;
        cursor:pointer;
    }

    h2:hover
    {
        text-decoration: underline;
        background-color: rgba(255,255,255,.1);
    }

    .tree
    {
        padding : 1rem;
        width : 50%;
    }

    p,h1,a,h2 {
        color: var(--white);
        font-family: 'modern-dos';
        font-weight: 400;
    }

    p
    {
        margin:0;
        padding : 0rem;
        margin-left: 3rem;
        width : 100%;
    }

    p:hover
    {
        background-color: rgba(255,255,255,.1);
    }

    a
    {
        text-decoration: none;
    }

    a:hover
    {
        text-decoration: underline;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .tree
        {
            width : 100%;
        }
    }
</style>

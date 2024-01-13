<script lang="ts">
    import { GetCardImageUrl } from "$lib/cards";
    import CardPreview from "./cardPreview.svelte";
    import { onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import type { Card } from "../../domain/card/card";
    import type { Suit } from "../../domain/suit/suit";

    export let data : any;
    export let card : Card;
    export let suits : Suit[];

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
            value = value.replace('Joker','joker-')
            tape.push('/' + suitName.toLowerCase() + '/' + value.toLowerCase())
        }
    }
  
    function checkKey(event : any) 
    {
        const KEYCODE_RIGHT = 39;
        const KEYCODE_LEFT = 37;
        if(event.keyCode == KEYCODE_RIGHT)
            

        if(event.keyCode == KEYCODE_LEFT)
    }

    onDestroy(()=> {if(browser)document.onkeydown = null})

    if(browser)
        document.onkeydown = checkKey;
</script>

<div class="card-panel" id="card">
    <div class="left">
        <a data-sveltekit-reload class="arrow" title="View previous card">{"<"}</a>
    </div>
    <div class="center">
        <CardPreview url={GetCardImageUrl(card.suit,card.card)}></CardPreview>
    </div>
    <div class="right">
        <a data-sveltekit-reload class="arrow" title="View next card">{">"}</a>
    </div>
</div>

<style>
    .arrow
    {
        text-decoration: none;
    }

    .arrow:hover
    {
        opacity: 50%;;
    }

    .left,.right
    {
        min-width: 5rem;
        font-size: 5rem;
        cursor:pointer;
        text-align: center;
        transform: translate(0,10rem);
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

    @media (max-aspect-ratio: 1/1) 
    {
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
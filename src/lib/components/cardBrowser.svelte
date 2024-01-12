<script lang="ts">
    import { GetCardImageUrl } from "$lib/cards";
    import CardPreview from "./cardPreview.svelte";
    import { goto } from "$app/navigation";
    import { onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";

    export let suit : string;
    export let card : string;
    export let data : any;

    let tape : string[]= [];


    function getNextCardLink()
    {
        let index = getCurrentIndex();
        index = addToIndex(index,+1)
        return tape[index] + '/#card';
    }

    function getPreviousCardLink()
    {
        let index = getCurrentIndex();
        index = addToIndex(index,-1)
        return tape[index] + '/#card';
    }


    for(let i = 0 ; i < data.suits.length ; i++)
    {
        let suit = data.suits[i];
        let suitName : string = suit.name;
        suitName = suitName.replaceAll(' ','-');
        for(let j = 0 ; j < suit.cards.length ; j++)
        {
            let card = suit.cards[j];
            let value = card.value;
            value = value.replace('Joker','Joker-')
            tape.push('/' + suitName.toLowerCase() + '/' + value.toLowerCase())
        }
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
        url = url.replace('/','')
        card = url.split('/')[1];
        suit = url.split('/')[0];
        window.location.assign('/' + url);
    }

    function goPrevious()
    {
        let url = getPreviousCardLink();
        url = url.replace('/','');
        card = url.split('/')[1];
        suit = url.split('/')[0];
        window.location.assign('/' + url);
    }

    function getCurrentIndex() : number
    {
        let path : string = $page.url.pathname;
        return tape.indexOf(path);
    }

    function checkKey(event : any) 
    {
        const KEYCODE_RIGHT = 39;
        const KEYCODE_LEFT = 37;
        if(event.keyCode == KEYCODE_RIGHT)
            goNext();

        if(event.keyCode == KEYCODE_LEFT)
            goPrevious();
    }

    onDestroy(()=> {if(browser)document.onkeydown = null})

    if(browser)
        document.onkeydown = checkKey;
</script>

<div class="card-panel" id="card">
    <div class="left">
        <a data-sveltekit-reload class="arrow" title="View previous card" href={getPreviousCardLink()}>{"<"}</a>
    </div>
    <div class="center">
        <CardPreview url={GetCardImageUrl(suit,card)}></CardPreview>
    </div>
    <div class="right">
        <a data-sveltekit-reload class="arrow" title="View next card" href={getNextCardLink()}>{">"}</a>
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
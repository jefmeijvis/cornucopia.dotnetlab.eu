<script>
    import Deck from "./deck.svelte";
    import HeroText from "./heroText.svelte";
</script>

<div class="hero">
    <div class="text-container">
        <HeroText></HeroText>
    </div>
    <div class="card-container">
        <Deck></Deck>
    </div>
</div>


<style>
    .hero
    {
        display: flex;
        flex-direction: row;
        border-bottom: 1px var(--white) solid;
    }
    .card-container
    {
        flex:1;
    }

    .text-container
    {
        flex:1;
        z-index: 50;
    }

    .hero
    {
        height : calc(100vh - 5rem);
        width : 100%;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .hero
        {
            display: flex;
            flex-direction: column;
        }
    }
</style>
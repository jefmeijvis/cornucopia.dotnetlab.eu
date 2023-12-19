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
    .card-container
    {
        background: radial-gradient(circle, rgba(255,255,255,0.21) 0%, rgba(255,255,255,0) 60%);
    }
    .hero
    {
        display: flex;
        flex-direction: row;
        background: rgb(28,28,28);
        border-bottom: 1px var(--white) solid;
        background: radial-gradient(circle at 5px 5px,#0c0d0d70 2px,#ffffff00 0px,#ffffff00 0px) 0 0 / 8px 8px, linear-gradient(180deg, #222222 0%,#000000 200%)
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
<script lang="ts">
    export let reverse = false;
    export let component : any;

    let width: number;
    let height: number;
    let mobile: boolean = false;

    function getMobile(w: number, h: number) 
    {
        mobile = w / h < 1;
    }

    $: getMobile(width, height);
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div class="container">
    {#if (reverse)}
        <div class="text">
            <slot></slot>
        </div>
        <div class="image">
            <svelte:component this={component}></svelte:component>
        </div>
    {:else}
        <div class="image">
            <svelte:component this={component}></svelte:component>
        </div>
        <div class="text">
            <slot></slot>
        </div>
    {/if}
</div>


<style>
    .container
    {
        width: min(100rem , 80%);
        display: flex;
        flex-direction: row;
        margin: auto;
        margin-top: 5rem;
    }

    .text
    {
        width : calc(50% - 2rem);
        padding: 1rem;
    }

    .image
    {
        padding: 1rem;
        width : 50%;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .container
        {
            flex-direction: column;
            width : calc(100% - 2rem);
            margin: 1rem;
        }

        .text,.image
        {
            width : calc(100% - 2rem);
        }
    }
</style>

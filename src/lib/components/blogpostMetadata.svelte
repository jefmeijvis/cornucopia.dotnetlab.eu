<script lang="ts">
    import { goto } from "$app/navigation";
    import { Text } from "$lib/utils/text";

    export let attributes : any;

    let authorLink : string = '/author/' + attributes.author;
</script>

<div class="metadata">
    <div class="left">
        <p>Date: {attributes.date}</p>
        <p>Author: <a href="{authorLink}">{Text.Format(attributes.author)}</a></p>
        <p>Tags: 
            {#each attributes.tags.split(',') as tag}
            <a class="tag" href="/blog">{Text.Format(tag)}</a><span></span>
            {/each}
        </p>
    </div>
    <div class="right">
        <button on:click={()=>goto(authorLink)}>
        <img title="{Text.Format(attributes.author)}" alt="{attributes.author} profile picture" src="/data/author/{attributes.author}/profile-picture.jpg"/>
        </button>
    </div>
</div>

<style>
    .tag
    {
        padding: .25rem;
        color:var(--background);
        background-color: var(--white);
        margin: .25rem;
        text-decoration: none;
    }

    .tag:hover
    {
        opacity: 70%;
    }
    .metadata
    {
        display: flex;
        padding-bottom: 2rem;
    }


    img
    {
        width : 5rem;
        outline: 1px white solid;
        cursor:pointer;
        margin: 1rem;   
    }

    img:hover
    {
        opacity: 70%;
    }

    button
    {
        background: none;
        border:none;
    }
</style>

<script>
    import SvelteMarkdown from "svelte-markdown";
    export let data;
</script>

<img title="{data.author}" alt="{data.author}" src="/data/author/{data.author}/profile-picture.jpg"/>
<SvelteMarkdown source={data.markdown}></SvelteMarkdown>

<style>
    img
    {
        display: block;
        width : 10rem;
        margin:auto;
        outline: 1px white solid
    }
</style>
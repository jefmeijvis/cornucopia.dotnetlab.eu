<script lang="ts">
    export let title : string;
    export let mappings : number[] | string[];
    export let linkFunction : any = ()=>{};
</script>

<p>
    {title} 
    {#each mappings as m} 
        <a href="{linkFunction(m)}">{m}</a>, 
    {/each}
</p>

<style>
    p,a
    {
        color: var(--white);
        font-family: 'modern-dos';
        font-weight: 400;
        font-size: 1.5rem;
    }

    p
    {
        width : 100%;
        word-break: break-all;
        white-space: normal;
    }
</style>

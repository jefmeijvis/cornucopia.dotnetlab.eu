<script>
    import Breadcrumbs from "$lib/components/breadcrumbs.svelte";

</script>

<div>
    <Breadcrumbs></Breadcrumbs>
    <slot></slot>
</div>

<style>
    div
    {
        width : 60%;
        margin : auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
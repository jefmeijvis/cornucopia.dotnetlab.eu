<script lang="ts">
    export let url : string;
</script>

<div class="card-preview" data-umami-event="card-browser-card">
    <div class="card" style="background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.2)),url('{url}')"/>
</div>

<style>
    .card
    {
        width : 100%;
        aspect-ratio: 20/32;
        border-radius: 1.2rem;
        background-position: 50% 50%;
        background-size: 117%;
        transition: all ease .5s;
        margin-top: 2rem;
    }
</style>
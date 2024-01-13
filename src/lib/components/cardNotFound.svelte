<script lang="ts">
    import {type Card} from "../../domain/card/card"
    export let cardObject : Card;
</script>

<p>Unknown card: {cardObject.card} {cardObject.suit}</p>

<style>
    p {
        color: red;
    }
</style>

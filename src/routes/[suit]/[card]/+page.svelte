<script lang="ts">
    import type { PageData } from './$types';
    import CardFound from "$lib/components/cardFound.svelte"
    import CardNotFound from "$lib/components/cardNotFound.svelte"

    export let data : PageData;

    let suit = data.info.suit;
    let card = data.info.card;

    function cardFound() {
      let cards_options = ["a","2","3","4","5","6","7","8","9","10","j","q","k","joker-a","joker-b","cornucopia"]
      let suits_options = ["data-validation-&-encoding","authentication","session-management","authorization","cryptography","cornucopia","wild-card","explanation"]

      return (cards_options.includes(card.toLowerCase()) && suits_options.includes(suit.toLowerCase()))
    }
  </script>


<p><a href="/cards">Back to overview</a></p>
{#if cardFound()}
  <CardFound {suit} {card}/>
{:else}
  <CardNotFound {suit} {card}/>
{/if}

<style>
  a
  {
    font-family: 'modern-dos';
    color: var(--white);
    margin:1rem;
  }
</style>

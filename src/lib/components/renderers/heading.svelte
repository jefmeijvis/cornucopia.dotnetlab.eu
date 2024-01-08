<script lang="ts">
    export let depth : number;
    export let raw : string;
    export let text : string;
  </script>
  
  {#if depth === 1}
    <h1 id={text}><slot></slot></h1>
  {:else if depth === 2}
    <h2 id={text}><slot></slot></h2>
  {:else if depth === 3}
    <h3 id={text}><slot></slot></h3>
  {:else if depth === 4}
    <h4 id={text}><slot></slot></h4>
  {:else if depth === 5}
    <h5 id={text}><slot></slot></h5>
  {:else if depth === 6}
    <h6 id={text}><slot></slot></h6>
  {:else}
    {raw}
  {/if}

  <style>
    h1
    {
      background-color: var(--white);
      color: var(--background);
      padding: .5rem;
    }

    h2
    {
      color: var(--white);
    }

    h2::after,h3::after
    {
      content: '_';
    }

    h3
    {
      color: rgb(0, 209, 0);
      font-size: 1.2rem;
    }
 
  </style>
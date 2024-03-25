<script lang="ts">
  import type { ProactiveControl } from "../../domain/card/ProactiveControl";
  export let title: string;
  export let mappings: number[] | string[] | ProactiveControl[];
  export let linkFunction: any = undefined;
</script>

<p>
  {title}
  {#each mappings as m, index}
    {#if typeof m === "number" || typeof m === "string"}
      {#if linkFunction == undefined}
        <span>{m}</span>{#if index != mappings.length - 1}<span>,</span>{/if}
      {:else}
        <a href={linkFunction(m)}>{m}</a>
        {#if index != mappings.length - 1}<span>,</span>{/if}
      {/if}
    {:else if typeof m === "object"}
      <a href={m.value}>{m.id}</a>
      {#if index != mappings.length - 1}<span>,</span>{/if}
    {/if}
  {/each}
</p>

<style>
  p,
  a {
    color: var(--white);
    font-family: var(--font-title);
    font-weight: 400;
    font-size: 1.5rem;
  }

  p {
    width: 100%;
    word-break: break-all;
    white-space: normal;
  }
</style>

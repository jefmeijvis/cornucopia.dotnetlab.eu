<script lang="ts">
	import { page } from "$app/stores";


    export let href = ''
    export let title : string = ""

    let target : string = "_blank";


    if(href.includes('www.jefmeijvis.com'))
      target = '_self';

    if(href.startsWith('/'))
      target = '_self';

    function click()
    {
      let body = 
      {
        href : href,
        page : $page.url.href
      }
    }

  </script>
  
  <a on:click={click} {target} {href} {title}><slot></slot></a>

  <style>
    a
    {
        padding : .10rem;
        border-radius: .25rem;
        color:var(--color-text-primary);
    }

    a:hover
    {
      color: rgb(0, 209, 0);
      font-weight: bold;
    }    
  </style>
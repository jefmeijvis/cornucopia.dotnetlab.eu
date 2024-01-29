<script lang="ts">
    export let path : string = ""

    let base : string = "https://github.com/jefmeijvis/cornucopia.dotnetlab.eu/blob/master/";
    let href : string = base + path;
</script>

<div>
    <a target="_blank" {href}>
        <img alt="Github logo" src="/icons/github.png"/>
        <span>View source on GitHub</span>
    </a>
</div>

<style>
    a
    {
        background: none;
        border: 1px white solid;
        display: flex;
        flex-shrink: 1;
        color:var(--color-text-primary);
        font-family: var(--font-body);
        background-color: var(--background);
        border-radius: .5rem;
        margin:auto;
        padding: .5rem;
        margin-top: 4rem;
        margin-bottom: 2rem;
        cursor:pointer;
        width:max-content;
        text-decoration: none;
        
    }

    a:hover
    {
        color: #00d100;
        border: 1px rgb(0, 209, 0) solid;

    }

    a:active
    {
        font-weight: bold;
    }

    span
    {
        padding: .5rem;
    }
   
    img
    {
        width : 2rem;
    }
  </style>
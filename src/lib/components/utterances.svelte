<script lang="ts">
	import { onMount } from 'svelte';
	let bindingElement: HTMLElement;
	let loading : boolean = true;
	let percentage : number = 0;

    export let name : string;
	export let delay : number = 250;

	onMount(async ()=> createCommentSection())

	
	async function sleep (time : number) 
	{
    	return new Promise((resolve) => setTimeout(resolve, time));
	}


	async function createCommentSection()
	{
		for(let i = 0 ; i < 10 ; i++)
		{
			await sleep(delay);
			percentage += 10
		}

		loading = false;
		let scriptTag = document.createElement('script');
		scriptTag.classList.add("utterances-script")
		scriptTag.setAttribute('id','comment-section')
		scriptTag.setAttribute('repo', 'jefmeijvis/cornucopia.dotnetlab.eu');
		scriptTag.setAttribute('issue-term', name);
		scriptTag.setAttribute('theme', 'github-dark');
        scriptTag.setAttribute('label', '🔮 Utterances');
		scriptTag.setAttribute('crossorigin', 'anonymous');
		scriptTag.src = 'https://utteranc.es/client.js';

		if(bindingElement)
			bindingElement.appendChild(scriptTag);
	}
</script>

<div bind:this={bindingElement} />
{#if loading}
	<p>Loading comments {percentage}%</p>
{/if}

<style>
	p
	{
		color: var(--white);
        font-family: 'modern-dos';
        font-weight: 400;
		font-size: 1.5rem;
		text-align: center;
	}
</style>
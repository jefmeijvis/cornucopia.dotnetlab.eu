<script lang="ts">
	export let align: 'left' | 'right' = 'left';
	export let id : string = "";
    export let component : any;

	let innerWidth = 0;
	let innerHeight = 0;
	let mobile: boolean;
	$: {
		mobile = innerWidth / innerHeight < 1;
	}

	function getStyle(isMobile: boolean) {
		if (isMobile) return '';

		if (align == 'left') {
			return 'flex-direction:row';
		} else {
			return 'flex-direction:row-reverse';
		}
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if id != ""}
	<div class="anchor" id={id}></div>
{/if}
<div class="container" style={getStyle(mobile)}>
	<div class="image">
        <svelte:component this={component}></svelte:component>
    </div>
	<div style="{align == 'left' && !mobile ? 'padding-left:2rem;' : 'padding-right:2rem;'}" class="text">
		<slot />
	</div>
</div>


<style>
	.anchor
	{
		position: absolute;
		height: 1rem;
		transform: translate(0,-4rem);
		width: 1rem;
		pointer-events: none;
	}
	.container {
		width: 90%;
		margin: auto;
		padding: 0rem;
		display: flex;
		padding-top: 2rem;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.text {
		height: 100%;
		width: 50%;
		opacity: 80%;
	}

	.image {
		width: 50%;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: .3rem;
		filter:grayscale();
	}

	@media (max-aspect-ratio: 1/1) {
		.container {
			flex-direction: column;
		}

		.image {
			width: 90%;
			padding: 0;
			margin: auto;
		}

		.text {
			padding: 1rem;
			height: 100%;
			width: calc(100% - 2rem);
		}
	}
</style>

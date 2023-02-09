<script>
		import '../app.css';
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	let ReloadPrompt;
	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$lib/ReloadPrompt.svelte')).default);
	})

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''

</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<div class="container mx-auto max-w-prose py-4">
	<nav class="rounded-lg mb-4">
		<a class="normal-case text-xl pr-4" href="/">Home</a>
		<a class="normal-case text-xl pr-4" href="/about">About</a>
		<a class="normal-case text-xl pr-4" href="/dates">Dates</a>
	</nav>

	<main class="bg-primary-content">
		<slot />
	</main>
</div>

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}
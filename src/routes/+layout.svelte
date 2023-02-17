<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({
        immediate: true,
        onRegistered(r) {
          console.log(`SW Registered: ${r}`)
        },
        onRegisterError(error) {
          console.log('SW registration error', error)
        }
      })
    }
  })

	let ReloadPrompt;
	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$lib/ReloadPrompt.svelte')).default);
	})

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''

</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<<<<<<< HEAD
<div class="container mx-auto max-w-prose p-4 font-comic">
=======
<div class="container mx-auto max-w-prose py-4">
>>>>>>> 3967c20d9c0844fbc01931c001ae47b9d282d561
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
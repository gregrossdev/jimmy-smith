<script>
	export let data; 
	const {api} = data;
	console.log(api.map(d => d.date))
	
</script>

<svelte:head>
	<title>Dates</title>
	<meta name="description" content="Dates" />
</svelte:head>

<div class="flex-col flex-wrap">
	{#each api as {date}} 
		<p>
			<a href="/dates/{date.slice(5)}">{date.slice(5)}</a>
		</p>
	{/each}
</div>

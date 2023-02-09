<script>
	const dates = [];
	const firstDay = new Date('01/01/2023');
	const lastDay = new Date('01/01/2024');
	let loop = new Date(firstDay);
	while (loop < lastDay) {
		dates.push(
			loop.toLocaleDateString('en-us', {
				month: '2-digit',
				day: '2-digit'
			}).replace('/', '-')
		);
		let newDate = loop.setDate(loop.getDate() + 1);
		loop = new Date(newDate);
	}
	const calendar = dates.sort((dates1, dates2) => dates1 - dates2);
</script>

<svelte:head>
	<title>Dates</title>
	<meta name="description" content="Dates" />
</svelte:head>

<div class="flex flex-wrap">
{#each calendar as date}
		{#if date.slice(0, 2) == '01'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		
		{#if date.slice(0, 2) == '02'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '03'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '04'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '05'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '06'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '07'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '08'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '09'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '10'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '11'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
		{#if date.slice(0, 2) == '12'}
				<a href={`date/${date}`} class="p-2">{date}</a>
		{/if}
{/each}
</div>
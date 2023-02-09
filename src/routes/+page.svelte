<script>
    export let data;
    const {api} = data;
    const today = new Date().toLocaleDateString("en-us", {
        month: "2-digit",
        day: "2-digit"
    })
   
    const jft = api.filter(x => x.date === today.replace("/", "-"));
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description"
          content="Svelte demo app"/>
</svelte:head>


{#each jft as {date, title, content}}
    <article class="prose">
        <h2>{date}</h2>
        <h3>{title}</h3>
        <section>{@html content}</section>
    </article>
{/each}




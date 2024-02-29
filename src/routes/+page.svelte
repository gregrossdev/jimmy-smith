<script>
    export let data;
    const {api} = data;
    // const {date, title, content} = api
    const {title, content} = api
</script>
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description"
          content="Svelte demo app"/>
</svelte:head>


<article class="prose">
   <!-- <h2>{date.slice(5)}</h2> -->
    <h2>02-29</h2>
    <h3>{title}</h3>
    <section>{@html content}</section>
</article>


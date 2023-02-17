<script>
    export let data;
    const {api} = data;
    const {date, title, content} = api
</script>


<article class="prose">
    <h2>{date.slice(5)}</h2>
    <h3>{title}</h3>
    <section>{@html content}</section>
</article>


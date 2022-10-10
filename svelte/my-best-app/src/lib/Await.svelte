<script>
    async function getData() {
        const res = await fetch('https://modelshowtime.serdcebolit.ru/api/model/12', {method: 'get'});
        const data = await res.json();
        if (res.ok) {
            return data;
        } else {
            throw new Error(data);
        }
    }

    let promise = Promise.resolve([]);

    function clickHandler() {
        promise = getData();
    }
</script>

<button on:click={clickHandler}>
    Get Data
</button>

{#await promise}
    <p>...waiting</p>
{:then data}
    <p>
        {#if data.author}
            <p>Author ID: {data.author.id}</p>
            <p>Author: {data.author.name}</p>
        {:else}
            {data}
        {/if}
    </p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<script>
    async function getData() {
        const res = await fetch('https://modelshowtime.serdcebolit.ru/api/model/12', {method: 'get'});
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error('some error occurred');
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

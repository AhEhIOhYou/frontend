<script>
  let sum;
  let arr = [1,2,3,4,5];

  const addNumber = () => {
    arr = [...arr, arr[arr.length - 1] * 2];
  };

  $: sum = arr.reduce((prev, cur) => prev + cur, 0);

</script>

<p>
  {arr.join(' + ')} = {sum}
</p>
<button on:click={addNumber}>
  Add number
</button>

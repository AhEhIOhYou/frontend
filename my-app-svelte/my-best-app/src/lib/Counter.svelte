<script>
  let counter = 0;
  const increment = () => {
    counter++;
  }

  $: if (counter > 5) {
    alert("STOP IT");
    counter = 0;
  }

</script>

<button on:click={increment}>
  COUNTER: {counter}
</button>

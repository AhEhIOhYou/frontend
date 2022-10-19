<script lang="ts">
  // import Home from '@/pages/Home.svelte'
  import Header from "@/components/Header.svelte";
  import Note from "@/components/Note.svelte";
</script>

<Header />

<Note
  id={1234}
  title={"Some Note"}
  content={"This note is about this and that"}
  tags={["test", "text"]}
  date={"20210806120000"}
  isFavorite={false}
/>

<!-- <Home /> -->
<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    height: 100%;
  }

  :global(body) {
    margin: 0;
    height: 100%;
    background-color: #fbfbfb;
  }
</style>

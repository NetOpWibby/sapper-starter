<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    margin: 0 auto; padding: 2rem;

    background-color: white;
    box-sizing: border-box;
    max-width: 56rem;
    position: relative;
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>

<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1rem;
  }

  ul {
    margin: 0; padding: 0;
  }

  /* clearfix */
  ul::after {
    clear: both;
    content: "";
    display: block;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    display: inline-block;
    position: relative;
  }

  .selected::after {
    width: calc(100% - 1rem); height: 2px;

    background-color: rgb(255, 62, 0);
    bottom: -1px;
    content: "";
    display: block;
    position: absolute;
  }

  a {
    display: block;
    padding: 1em 0.5rem;
    text-decoration: none;
  }
</style>

<nav>
  <ul>
    <li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
    <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

    <!--
      for the blog link, we are using rel=prefetch so that Sapper prefetches
      the blog data when we hover over the link or tap it on a touchscreen
    -->

    <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
  </ul>
</nav>

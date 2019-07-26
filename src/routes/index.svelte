<style lang="scss">
  $color: red;

  p {
    color: $color;
  }

  h1, figure, p {
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
  }

  figure {
    margin: 0 0 1rem 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1rem 0;
  }

  p {
    margin: 1rem auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4rem;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
  <img alt="Borat" src="great-success.png"/>
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>

<script>
  import "../app.postcss";
  import Nav from '$lib/components/Nav.svelte';
</script>
<svelte:head>
  <title>The Distress Signal</title>
</svelte:head>
<div class="wrap grid">
  <header class="p-4  center">
    <section class="banner m-auto md:text-center">
      <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold ">The Distress Signal</h1>
      <p class="md:text-center">First, we shape our tools—then our tools shape us.</p>
    </section>
  </header>
  <main class="pl-4"> 
    <section class="prose">
      <slot />
    </section>
  </main>
  <aside class="">
    <section class="">
      <Nav />
    </section>
  </aside>
  <footer class="p-4">
  <section class="prose">
    <p>Some footer stuff down here for sure.</p>
  </section>
  </footer>
</div>
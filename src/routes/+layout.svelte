<script>
  import "../app.postcss";
</script>
<div class="wrap grid">
  <header class="p-4">
    <section class="prose">
      <h1>Welcome to SvelteKit</h1>
      <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>  
    </section>
  </header>
  <main class="pl-4">
    <section class="prose">
      <slot />
    </section>
  </main>
  <aside class="pr-4">
    <section class="prose"></section>
  </aside>
  <footer class="p-4">
  <section class="prose">
    <p>Some footer stuff down here for sure.</p>
  </section>
  </footer>
</div>
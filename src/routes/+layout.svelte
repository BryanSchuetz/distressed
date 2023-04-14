<script>
  import "../app.postcss";
  import Nav from '$lib/components/Nav.svelte';
  import { fly} from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing';
  
  //Check for the size of the viewport, and flip a reactive variable given the breakpoint
  import { onMount, onDestroy } from 'svelte';
  let isBigViewport = false;
  const updateViewportSize = () => {
    isBigViewport = window.innerWidth > 1023;
  };
  onMount(() => {
    updateViewportSize(); // Initial check
    window.addEventListener('resize', updateViewportSize);

    return () => {
      window.removeEventListener('resize', updateViewportSize);
    };
  });
  

</script>
<svelte:head>
  <title>Style Framework</title>
</svelte:head>
<div class="wrap grid">
  <header class="p-4  center">
    <section class="banner m-auto md:text-center">
        <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold ">Style Framework</h1>
      <p class="md:text-center prose-sm mt-4">An easy to work with framework for building DAI branded sites.</p>
    </section>
  </header>
  <main class="pl-4 grid md:m-[auto]"> 
    <section class="prose ">
      <slot />
    </section>
  </main>
{#if isBigViewport}
  <aside class=""  in:fly="{{delay: 0, duration: 200, x: 400, y: 0, opacity: 0.5, easing: cubicInOut}}">
    <section class="">
      <Nav />
    </section>
  </aside>
{/if}
  <footer class="p-4">
  <section class="prose md:m-[auto] md:text-center">
    <p class="prose-sm">Some footer stuff down here for sure.</p>
  </section>
  </footer>
</div>
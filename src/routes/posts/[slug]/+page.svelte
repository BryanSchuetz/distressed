<script>
  export let data;
  import { cubicInOut } from 'svelte/easing';
  import { scale } from 'svelte/transition'
  </script>

<article in:scale="{{delay: 0, duration: 200, x: 400, y: 0, opacity: 0.5, easing: cubicInOut}}" out:scale="{{delay: 0, duration: 10, x: 400, y: 0, opacity: 0.5, easing: cubicInOut}}">
  <h1>{data.title}</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>
<script lang="ts">
  import { spotlight } from '$lib/utils/actions';

  export let className = '';
</script>

<article
  use:spotlight
  class={`group relative overflow-hidden rounded-3xl border border-line/85 bg-soft/90 p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-glow ${className}`}
>
  <div
    class="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
    style="background: radial-gradient(circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(128, 154, 178, 0.12), transparent 34%);"
  ></div>
  <div class="relative z-10">
    <slot />
  </div>
</article>

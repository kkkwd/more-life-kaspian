<script lang="ts">
  export let kicker: string;
  export let title: string;
  export let description: string;
</script>

<div class="max-w-3xl space-y-4">
  <p class="eyebrow">{kicker}</p>
  <div class="space-y-3">
    <h2 class="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
    <p class="max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
  </div>
</div>

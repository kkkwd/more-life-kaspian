<script lang="ts">
  import type { SiteContent } from '$lib/content/shared';
  import { reveal } from '$lib/utils/actions';
  import SectionTitle from './SectionTitle.svelte';

  export let content: SiteContent;
  export let reducedMotion = false;
</script>

<section id="about" class="section-anchor section-shell">
  <div class="container-shell space-y-10">
    <div use:reveal={reducedMotion} class="reveal">
      <SectionTitle kicker={content.about.kicker} title={content.about.title} description={content.about.description} />
    </div>

    <div class="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_360px]">
      <div use:reveal={reducedMotion} class="reveal surface-panel p-7 sm:p-8">
        <div class="space-y-6">
          <p class="text-base leading-8 text-muted sm:text-lg">{content.about.intro}</p>
          <div class="space-y-4">
            {#each content.about.focus as item}
              <div class="flex gap-3">
                <span class="mt-3 h-1.5 w-1.5 rounded-full bg-accent"></span>
                <p class="text-sm leading-7 text-muted sm:text-[0.96rem]">{item}</p>
              </div>
            {/each}
          </div>
          <p class="rounded-2xl border border-line/80 bg-paper/55 px-4 py-4 text-sm leading-7 text-ink/90">
            {content.about.current}
          </p>
        </div>
      </div>

      <aside use:reveal={reducedMotion} class="reveal surface-panel overflow-hidden p-0">
        <div class="border-b border-line/80 px-6 py-4">
          <p class="font-mono text-xs uppercase tracking-[0.26em] text-muted">profile.snapshot</p>
        </div>
        <div class="space-y-4 p-6 font-mono text-sm">
          {#each content.about.terminal as line}
            <div class="grid grid-cols-[84px_minmax(0,1fr)] gap-4 border-b border-dashed border-line/70 pb-4 last:border-b-0 last:pb-0">
              <span class="text-muted">{line.key}</span>
              <span class="leading-7 text-ink/92">{line.value}</span>
            </div>
          {/each}
        </div>
      </aside>
    </div>
  </div>
</section>

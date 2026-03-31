<script lang="ts">
  import type { SiteContent } from '$lib/content/shared';
  import { reveal } from '$lib/utils/actions';

  export let content: SiteContent;
  export let reducedMotion = false;
</script>

<section id="home" class="section-anchor section-shell pt-14 sm:pt-20">
  <div class="container-shell">
    <div use:reveal={reducedMotion} class="reveal grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:items-end">
      <div class="space-y-8">
        <div class="space-y-6">
          <p class="eyebrow">{content.hero.eyebrow}</p>
          <h1 class="max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            {content.hero.title}
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {content.hero.subtitle}
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:translate-y-[-1px] hover:bg-accent"
          >
            {content.hero.primaryCta}
          </a>
          <a
            href={content.contact.resumeHref}
            download
            class="inline-flex items-center gap-2 rounded-full border border-line bg-soft px-5 py-3 text-sm font-medium text-ink transition hover:border-accent/40 hover:text-accent"
          >
            {content.hero.secondaryCta}
          </a>
        </div>

        <p class="text-sm text-muted">{content.hero.availability}</p>
      </div>

      <aside class="surface-panel p-6 sm:p-8">
        <div class="mb-6 flex items-center justify-between">
          <p class="font-mono text-xs uppercase tracking-[0.24em] text-muted">Overview</p>
          <span class="rounded-full border border-line px-3 py-1 font-mono text-[0.72rem] text-muted">
            01
          </span>
        </div>

        <div class="space-y-4">
          {#each content.hero.metrics as metric}
            <div class="flex items-center justify-between gap-6 border-t border-line/80 pt-4 first:border-t-0 first:pt-0">
              <span class="text-sm text-muted">{metric.label}</span>
              <span class="text-right font-medium text-ink">{metric.value}</span>
            </div>
          {/each}
        </div>
      </aside>
    </div>
  </div>
</section>

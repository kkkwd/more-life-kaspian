<script lang="ts">
  import type { SiteContent } from '$lib/content/shared';
  import { reveal } from '$lib/utils/actions';
  import SectionTitle from './SectionTitle.svelte';

  export let content: SiteContent;
  export let reducedMotion = false;

  let activeIndex = 0;
</script>

<section id="experience" class="section-anchor section-shell">
  <div class="container-shell space-y-10">
    <div use:reveal={reducedMotion} class="reveal">
      <SectionTitle
        kicker={content.experience.kicker}
        title={content.experience.title}
        description={content.experience.description}
      />
    </div>

    <div class="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
      <div use:reveal={reducedMotion} class="reveal surface-panel p-3">
        <div class="space-y-2" role="tablist" aria-label={content.experience.kicker}>
          {#each content.experience.items as item, index}
            <button
              type="button"
              role="tab"
              class={`w-full rounded-2xl border px-4 py-4 text-left transition ${activeIndex === index ? 'border-accent/40 bg-paper text-ink shadow-panel' : 'border-transparent text-muted hover:border-line hover:bg-paper/60 hover:text-ink'}`}
              aria-selected={activeIndex === index}
              tabindex={activeIndex === index ? 0 : -1}
              on:click={() => (activeIndex = index)}
              on:keydown={(event) => {
                if (event.key === 'ArrowDown') activeIndex = (index + 1) % content.experience.items.length;
                if (event.key === 'ArrowUp') activeIndex = (index - 1 + content.experience.items.length) % content.experience.items.length;
              }}
            >
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="font-medium text-ink">{item.company}</p>
                  <p class="mt-1 text-sm">{item.role}</p>
                </div>
                <span class="font-mono text-xs uppercase tracking-[0.18em] text-muted">{item.period}</span>
              </div>
            </button>
          {/each}
        </div>
      </div>

      {#if content.experience.items[activeIndex]}
        <div use:reveal={reducedMotion} class="reveal surface-panel p-7 sm:p-8" role="tabpanel">
          <div class="space-y-6">
            <div class="flex flex-col gap-4 border-b border-line/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div class="space-y-2">
                <p class="eyebrow">{content.experience.items[activeIndex].period}</p>
                <h3 class="text-3xl font-semibold">{content.experience.items[activeIndex].role}</h3>
                <p class="text-base text-muted">
                  {content.experience.items[activeIndex].company} · {content.experience.items[activeIndex].location}
                </p>
              </div>
              {#if content.experience.items[activeIndex].link}
                <a
                  href={content.experience.items[activeIndex].link}
                  target="_blank"
                  rel="noreferrer"
                  class="interactive-link"
                >
                  Link ↗
                </a>
              {/if}
            </div>

            <p class="text-base leading-7 text-muted">{content.experience.items[activeIndex].description}</p>

            <ul class="space-y-4">
              {#each content.experience.items[activeIndex].bullets as bullet}
                <li class="flex gap-3 text-sm leading-7 text-muted sm:text-[0.96rem]">
                  <span class="mt-3 h-1.5 w-1.5 rounded-full bg-accent"></span>
                  <span>{bullet}</span>
                </li>
              {/each}
            </ul>

            <div class="flex flex-wrap gap-2">
              {#each content.experience.items[activeIndex].tags as tag}
                <span class="rounded-full border border-line/80 px-3 py-1 font-mono text-xs text-muted">{tag}</span>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<script lang="ts">
  import type { SiteContent } from '$lib/content/shared';
  import { reveal } from '$lib/utils/actions';
  import SectionTitle from './SectionTitle.svelte';
  import SpotlightCard from './SpotlightCard.svelte';

  export let content: SiteContent;
  export let reducedMotion = false;
</script>

<section id="projects" class="section-anchor section-shell">
  <div class="container-shell space-y-10">
    <div use:reveal={reducedMotion} class="reveal">
      <SectionTitle
        kicker={content.projects.kicker}
        title={content.projects.title}
        description={content.projects.description}
      />
    </div>

    <div class="grid gap-6 xl:grid-cols-3 md:grid-cols-2">
      {#each content.projects.items as project, index}
        <div use:reveal={reducedMotion} class="reveal" style={`transition-delay:${index * 70}ms`}>
          <SpotlightCard className="flex h-full flex-col">
            <div class="space-y-5">
              <div class="flex items-start justify-between gap-4">
                <div class="space-y-2">
                  <p class="font-mono text-xs uppercase tracking-[0.24em] text-muted">{project.status}</p>
                  <h3 class="text-2xl font-semibold">{project.name}</h3>
                </div>
                <span class="rounded-full border border-line/80 px-3 py-1 text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div class="space-y-3">
                <p class="text-sm font-medium text-accent">{project.summary}</p>
                <p class="text-sm leading-7 text-muted">{project.description}</p>
              </div>

              <ul class="space-y-3 text-sm leading-6 text-muted">
                {#each project.details as detail}
                  <li class="flex gap-3">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-accent"></span>
                    <span>{detail}</span>
                  </li>
                {/each}
              </ul>

              <p class="rounded-2xl border border-line/75 bg-paper/55 px-4 py-3 text-sm text-ink/90">
                {project.highlight}
              </p>

              <div class="flex flex-wrap gap-2">
                {#each project.tags as tag}
                  <span class="rounded-full border border-line/80 px-3 py-1 font-mono text-xs text-muted">{tag}</span>
                {/each}
              </div>
            </div>

            <div class="mt-8 flex items-center gap-4 border-t border-line/80 pt-5">
              <a href={project.github} target="_blank" rel="noreferrer" class="interactive-link">
                {content.projectActions.code}
                <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
              <a href={project.demo} class="interactive-link">
                {content.projectActions.live}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </SpotlightCard>
        </div>
      {/each}
    </div>
  </div>
</section>

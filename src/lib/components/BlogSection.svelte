<script lang="ts">
  import type { SiteContent } from '$lib/content/shared';
  import { reveal } from '$lib/utils/actions';
  import SectionTitle from './SectionTitle.svelte';

  export let content: SiteContent;
  export let reducedMotion = false;
</script>

<section id="blog" class="section-anchor section-shell">
  <div class="container-shell space-y-10">
    <div use:reveal={reducedMotion} class="reveal">
      <SectionTitle kicker={content.blog.kicker} title={content.blog.title} description={content.blog.description} />
    </div>

    <div class="surface-panel divide-y divide-line/80 overflow-hidden">
      {#each content.blog.items as post, index}
        <a
          use:reveal={reducedMotion}
          href={post.href}
          class="reveal group grid gap-5 px-6 py-6 transition hover:bg-paper/50 sm:px-8 lg:grid-cols-[minmax(0,1fr)_200px]"
          style={`transition-delay:${index * 65}ms`}
        >
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              {#each post.tags as tag}
                <span class="rounded-full border border-line/80 px-3 py-1 font-mono text-xs text-muted">{tag}</span>
              {/each}
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-semibold transition-colors group-hover:text-accent">{post.title}</h3>
              <p class="max-w-3xl text-sm leading-7 text-muted">{post.summary}</p>
            </div>
          </div>
          <div class="flex items-start justify-between gap-4 text-sm text-muted lg:flex-col lg:items-end lg:text-right">
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

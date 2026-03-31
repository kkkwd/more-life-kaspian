<script lang="ts">
  import type { SiteContent } from '$lib/content/shared';
  import { reveal } from '$lib/utils/actions';

  export let content: SiteContent;
  export let reducedMotion = false;
</script>

<footer id="contact" class="section-anchor section-shell pb-10">
  <div class="container-shell">
    <div use:reveal={reducedMotion} class="reveal surface-panel p-7 sm:p-10">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-end">
        <div class="space-y-4">
          <p class="eyebrow">Contact</p>
          <h2 class="text-3xl font-semibold sm:text-4xl">{content.contact.title}</h2>
          <p class="max-w-2xl text-base leading-7 text-muted">{content.contact.subtitle}</p>
          <div class="flex flex-wrap gap-3 pt-2">
            <a href={`mailto:${content.contact.email}`} class="interactive-link">{content.contact.email}</a>
            <a href={content.contact.resumeHref} download class="interactive-link">Resume ↓</a>
          </div>
        </div>

        <div class="space-y-3 text-sm text-muted">
          <a href={content.contact.github} target="_blank" rel="noreferrer" class="flex justify-between gap-4 rounded-2xl border border-line/80 px-4 py-3 transition hover:border-accent/40 hover:bg-paper/55 hover:text-ink">
            <span>GitHub</span>
            <span>↗</span>
          </a>
          <a href={content.contact.linkedin} target="_blank" rel="noreferrer" class="flex justify-between gap-4 rounded-2xl border border-line/80 px-4 py-3 transition hover:border-accent/40 hover:bg-paper/55 hover:text-ink">
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
          <a href={content.contact.x} target="_blank" rel="noreferrer" class="flex justify-between gap-4 rounded-2xl border border-line/80 px-4 py-3 transition hover:border-accent/40 hover:bg-paper/55 hover:text-ink">
            <span>X / Twitter</span>
            <span>↗</span>
          </a>
        </div>
      </div>
      <div class="mt-10 border-t border-line/80 pt-5 text-sm text-muted">
        <p>{content.footerNote}</p>
      </div>
    </div>
  </div>
</footer>

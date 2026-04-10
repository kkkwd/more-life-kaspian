<script lang="ts">
  import type { SiteContent } from '$lib/content/shared';
  import { reveal } from '$lib/utils/actions';

  export let content: SiteContent;
  export let reducedMotion = false;

  let heroNameTiltElement: HTMLDivElement;

  function resetNameTilt() {
    if (!heroNameTiltElement) {
      return;
    }

    heroNameTiltElement.style.setProperty('--name-rotate-x', '0deg');
    heroNameTiltElement.style.setProperty('--name-rotate-y', '0deg');
    heroNameTiltElement.style.setProperty('--name-shift-y', '0px');
    heroNameTiltElement.style.setProperty('--name-scale', '1');
    heroNameTiltElement.style.setProperty('--name-glare-opacity', '0');
    heroNameTiltElement.style.setProperty('--name-glare-x', '50%');
    heroNameTiltElement.style.setProperty('--name-glare-y', '50%');
  }

  function handleNameMove(event: PointerEvent) {
    if (reducedMotion || !heroNameTiltElement) {
      return;
    }

    const rect = heroNameTiltElement.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateY = normalizedX * 4.5;
    const rotateX = -normalizedY * 14;
    const verticalPress = Math.max(0, 1 - Math.abs(normalizedY) * 1.45);
    const shiftY = verticalPress * 16;
    const scale = 0.978;
    const glareOpacity = Math.max(0.05, 0.16 - Math.abs(normalizedY) * 0.08);

    heroNameTiltElement.style.setProperty('--name-rotate-x', `${rotateX.toFixed(2)}deg`);
    heroNameTiltElement.style.setProperty('--name-rotate-y', `${rotateY.toFixed(2)}deg`);
    heroNameTiltElement.style.setProperty('--name-shift-y', `${shiftY.toFixed(2)}px`);
    heroNameTiltElement.style.setProperty('--name-scale', `${scale}`);
    heroNameTiltElement.style.setProperty('--name-glare-opacity', `${glareOpacity.toFixed(3)}`);
    heroNameTiltElement.style.setProperty('--name-glare-x', `${((normalizedX + 0.5) * 100).toFixed(2)}%`);
    heroNameTiltElement.style.setProperty('--name-glare-y', `${((normalizedY + 0.5) * 100).toFixed(2)}%`);
  }

  function handleNameLeave() {
    if (reducedMotion) {
      return;
    }

    resetNameTilt();
  }
</script>

<section id="home" class="section-anchor section-shell pt-14 sm:pt-20">
  <div class="container-shell">
    <div
      use:reveal={reducedMotion}
      class="reveal grid gap-14 lg:grid-cols-[minmax(0,1.14fr)_minmax(300px,0.86fr)] lg:items-center"
    >
      <div class="hero-copy space-y-8">
        <div class="space-y-5">
          <p class="eyebrow text-[0.8rem] tracking-[0.3em]">{content.hero.eyebrow}</p>
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            bind:this={heroNameTiltElement}
            class="hero-name-tilt"
            on:pointermove={handleNameMove}
            on:pointerleave={handleNameLeave}
          >
            <div class="hero-name-glare"></div>
            <h1 class="hero-name max-w-4xl">{content.hero.name}</h1>
          </div>
          <p class="max-w-3xl text-xl font-medium leading-8 text-ink sm:text-2xl sm:leading-9">
            {content.hero.roleLine}
          </p>
          <p class="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {content.hero.summary}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <a
            href={content.contact.github}
            target="_blank"
            rel="noreferrer"
            class="hero-social"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.22.72-.5v-1.77c-2.95.64-3.58-1.25-3.58-1.25-.48-1.2-1.16-1.53-1.16-1.53-.95-.65.07-.64.07-.64 1.05.08 1.6 1.08 1.6 1.08.93 1.59 2.44 1.13 3.03.87.1-.68.37-1.13.67-1.39-2.35-.27-4.82-1.18-4.82-5.25 0-1.16.41-2.11 1.08-2.85-.1-.27-.47-1.37.11-2.85 0 0 .88-.28 2.9 1.09a9.94 9.94 0 0 1 5.28 0c2.01-1.37 2.89-1.1 2.89-1.1.58 1.5.22 2.6.11 2.86.67.74 1.08 1.69 1.08 2.85 0 4.08-2.48 4.97-4.85 5.24.38.33.73.97.73 1.95v2.89c0 .28.19.6.73.5A10.5 10.5 0 0 0 12 1.5Z" />
            </svg>
          </a>
          <a
            href={content.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            class="hero-social"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M5.37 3.02a1.87 1.87 0 1 1 0 3.74 1.87 1.87 0 0 1 0-3.74ZM3.75 8.25h3.24v12H3.75v-12Zm5.28 0h3.1v1.64h.04c.43-.82 1.48-1.69 3.06-1.69 3.27 0 3.87 2.15 3.87 4.95v7.1h-3.23v-6.29c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.64-2.42 3.32v6.4H9.03v-12Z" />
            </svg>
          </a>
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

      <div class="hero-visual" aria-hidden="true">
        <div class="hero-visual__backdrop"></div>
        <div class="hero-visual__glow"></div>
        <div class="hero-visual__floor"></div>
        <img
          class="hero-visual__image"
          src="/Kaspian.JPG"
          alt=""
          loading="eager"
          decoding="async"
        />
        <div class="hero-visual__veil"></div>
      </div>
    </div>
  </div>
</section>

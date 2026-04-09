<script lang="ts">
  import type { Locale, SiteContent, Theme } from '$lib/content/shared';

  export let content: SiteContent;
  export let locale: Locale;
  export let theme: Theme;
  export let activeSection = 'home';
  export let menuOpen = false;
  export let onToggleLocale: () => void;
  export let onToggleTheme: () => void;
  export let onToggleMenu: () => void;
  export let onCloseMenu: () => void;

  const githubHref = 'https://github.com/kkkwd';
</script>

<header class="sticky top-0 z-40 border-b border-line/70 bg-paper/78 backdrop-blur-xl">
  <div class="container-shell flex h-16 items-center justify-between gap-4">
    <a href="#home" class="flex items-center gap-3 font-mono text-sm font-medium tracking-[0.24em] text-ink">
      <span class="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-line bg-soft">K</span>
      <span class="hidden sm:inline">KASPIAN</span>
    </a>

    <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
      {#each content.nav as item}
        <a
          href={item.href}
          class={`group relative rounded-full px-3 py-2 text-sm transition-colors ${activeSection === item.href.slice(1) ? 'text-ink' : 'text-muted hover:text-ink'}`}
        >
          <span>{item.label}</span>
          <span
            class={`absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform duration-300 ${activeSection === item.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
          ></span>
        </a>
      {/each}
    </nav>

    <div class="hidden items-center gap-2 md:flex">
      <a
        href={githubHref}
        target="_blank"
        rel="noreferrer"
        class="rounded-full border border-line bg-soft px-3 py-2 text-sm text-muted transition hover:border-accent/40 hover:text-ink"
        aria-label="GitHub"
      >
        GitHub
      </a>
      <button
        type="button"
        class="rounded-full border border-line bg-soft px-3 py-2 text-sm text-muted transition hover:border-accent/40 hover:text-ink"
        on:click={onToggleLocale}
        aria-label={content.languageSwitchLabel}
      >
        {locale === 'en' ? '中文' : 'EN'}
      </button>
      <button
        type="button"
        class="rounded-full border border-line bg-soft px-3 py-2 text-sm text-muted transition hover:border-accent/40 hover:text-ink"
        on:click={onToggleTheme}
        aria-label={content.themeSwitchLabel}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>

    <button
      type="button"
      class="rounded-full border border-line bg-soft p-2 text-muted md:hidden"
      on:click={onToggleMenu}
      aria-expanded={menuOpen}
      aria-label={menuOpen ? content.closeLabel : content.menuLabel}
    >
      <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        {#if menuOpen}
          <path d="M6 6l12 12M18 6L6 18" />
        {:else}
          <path d="M4 7h16M4 12h16M4 17h16" />
        {/if}
      </svg>
    </button>
  </div>

  {#if menuOpen}
    <div class="border-t border-line/70 bg-paper/96 md:hidden">
      <nav class="container-shell flex flex-col gap-2 py-4" aria-label="Mobile">
        {#each content.nav as item}
          <a
            href={item.href}
            class="rounded-2xl border border-transparent px-4 py-3 text-base text-muted transition hover:border-line hover:bg-soft hover:text-ink"
            on:click={onCloseMenu}
          >
            {item.label}
          </a>
        {/each}
        <div class="mt-2 flex flex-wrap gap-2">
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-line px-4 py-2 text-sm text-muted"
          >
            GitHub
          </a>
          <button type="button" class="rounded-full border border-line px-4 py-2 text-sm text-muted" on:click={onToggleLocale}>
            {locale === 'en' ? '中文' : 'EN'}
          </button>
          <button type="button" class="rounded-full border border-line px-4 py-2 text-sm text-muted" on:click={onToggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </nav>
    </div>
  {/if}
</header>

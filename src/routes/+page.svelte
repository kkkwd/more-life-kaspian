<script lang="ts">
  import { browser } from '$app/environment';
  import Header from '$lib/components/Header.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
  import ExperienceSection from '$lib/components/ExperienceSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { getSiteContent } from '$lib/content';
  import { locale, reducedMotion, theme, toggleLocale, toggleTheme } from '$lib/stores/preferences';
  import type { Locale, Theme } from '$lib/content/shared';
  import { onMount } from 'svelte';

  let currentLocale: Locale = 'en';
  let currentTheme: Theme = 'light';
  let shouldReduceMotion = false;
  let activeSection = 'home';
  let menuOpen = false;

  $: content = getSiteContent(currentLocale);

  const sectionIds = ['home', 'projects', 'experience', 'about', 'contact'];

  onMount(() => {
    const unsubscribeLocale = locale.subscribe((value) => {
      currentLocale = value;
    });

    const unsubscribeTheme = theme.subscribe((value) => {
      currentTheme = value;
    });

    const unsubscribeMotion = reducedMotion.subscribe((value) => {
      shouldReduceMotion = value;
    });

    if (!browser) {
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          activeSection = visible.target.id;
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0.15, 0.3, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onPointerMove = (event: PointerEvent) => {
      if (shouldReduceMotion) {
        return;
      }

      document.documentElement.style.setProperty('--bg-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--bg-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      unsubscribeLocale();
      unsubscribeTheme();
      unsubscribeMotion();
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
    };
  });

  function handleToggleLocale() {
    toggleLocale(currentLocale);
  }

  function handleToggleTheme() {
    toggleTheme(currentTheme);
  }

  function handleToggleMenu() {
    menuOpen = !menuOpen;
  }

  function handleCloseMenu() {
    menuOpen = false;
  }
</script>

<svelte:head>
  <title>{currentLocale === 'zh' ? 'Kaspian | Builder | All in AI and Web3' : 'Kaspian | AI Engineer / Web3 Developer / Builder'}</title>
  <meta
    name="description"
    content={currentLocale === 'zh'
      ? '面向 AI、区块链与自动化系统的个人作品站，包含项目、经历、关于与联系方式。'
      : 'A focused portfolio for AI systems, web3 infrastructure, automation, selected projects, experience, and contact.'}
  />
</svelte:head>

<a href="#home" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3">
  Skip to content
</a>

<Header
  content={content}
  locale={currentLocale}
  theme={currentTheme}
  {activeSection}
  {menuOpen}
  onToggleLocale={handleToggleLocale}
  onToggleTheme={handleToggleTheme}
  onToggleMenu={handleToggleMenu}
  onCloseMenu={handleCloseMenu}
/>

<main>
  <HeroSection content={content} reducedMotion={shouldReduceMotion} />
  <ProjectsSection content={content} reducedMotion={shouldReduceMotion} />
  <ExperienceSection content={content} reducedMotion={shouldReduceMotion} />
  <AboutSection content={content} reducedMotion={shouldReduceMotion} />
  <Footer content={content} reducedMotion={shouldReduceMotion} />
</main>

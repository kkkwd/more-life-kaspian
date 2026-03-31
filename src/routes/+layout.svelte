<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { initPreferences } from '$lib/stores/preferences';

  onMount(() => initPreferences());
</script>

<svelte:head>
  <script>
    const theme = localStorage.getItem('kaspian-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolvedTheme = theme === 'light' || theme === 'dark' ? theme : prefersDark ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  </script>
</svelte:head>

<slot />

import { browser } from '$app/environment';

export function reveal(node: HTMLElement, reducedMotion = false) {
  if (!browser || reducedMotion) {
    node.dataset.revealed = 'true';
    return {
      destroy() {}
    };
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.dataset.revealed = 'true';
          observer.unobserve(node);
        }
      }
    },
    {
      threshold: 0.12
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export function spotlight(node: HTMLElement) {
  if (!browser) {
    return {
      destroy() {}
    };
  }

  const onMove = (event: PointerEvent) => {
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    node.style.setProperty('--spotlight-x', `${x}%`);
    node.style.setProperty('--spotlight-y', `${y}%`);
  };

  node.addEventListener('pointermove', onMove);

  return {
    destroy() {
      node.removeEventListener('pointermove', onMove);
    }
  };
}

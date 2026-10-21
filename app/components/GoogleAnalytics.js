'use client';

import { useEffect } from 'react';

export default function GoogleAnalytics({ gaId }) {
  useEffect(() => {
    let loaded = false;

    const loadScript = () => {
      if (loaded) return;
      loaded = true;

      window.removeEventListener('scroll', loadScript);
      window.removeEventListener('touchstart', loadScript);
      window.removeEventListener('mousemove', loadScript);
      window.removeEventListener('click', loadScript);

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaId);
    };

    // Load on first real user interaction
    window.addEventListener('scroll', loadScript, { passive: true, once: true });
    window.addEventListener('touchstart', loadScript, { passive: true, once: true });
    window.addEventListener('mousemove', loadScript, { passive: true, once: true });
    window.addEventListener('click', loadScript, { passive: true, once: true });

    // Fallback: load after 4 seconds of idle time if no interaction occurs
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(loadScript);
      } else {
        loadScript();
      }
    }, 4000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', loadScript);
      window.removeEventListener('touchstart', loadScript);
      window.removeEventListener('mousemove', loadScript);
      window.removeEventListener('click', loadScript);
    };
  }, [gaId]);

  return null;
}

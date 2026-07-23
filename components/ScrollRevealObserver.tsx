'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const AUTO_REVEAL_SKIP = '.page-hero, .hero';

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const disconnects: Array<() => void> = [];

    const revealEls = document.querySelectorAll('.reveal, .reveal-fade');
    if (revealEls.length) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
      disconnects.push(() => revealObserver.disconnect());
    }

    // Legacy platform-card grids that haven't been migrated to data-stagger yet.
    document.querySelectorAll('.grid-3, .grid-2, .grid-4').forEach((grid) => {
      if (grid.hasAttribute('data-stagger')) return;
      const cards = Array.from(grid.querySelectorAll('.platform-card:not(.is-visible)'));
      if (!cards.length) return;
      const gridObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              cards.forEach((card, index) => {
                setTimeout(() => card.classList.add('is-visible'), index * 120);
              });
              gridObserver.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );
      gridObserver.observe(grid);
      disconnects.push(() => gridObserver.disconnect());
    });

    // Generic staggered reveal: any container with data-stagger tags its direct
    // children as .stagger-item with an incremental --stagger-i, then reveals
    // them together (CSS handles the per-item delay via transition-delay).
    document.querySelectorAll('[data-stagger]').forEach((group) => {
      if (group.classList.contains('stagger-primed')) return;
      const children = Array.from(group.children);
      if (!children.length) return;
      group.classList.add('stagger-primed', 'stagger-group');
      // Elements that already carry their own baseline transform (e.g. the
      // raised "featured" pricing card) opt into data-stagger="fade" so the
      // reveal only animates opacity and never clobbers that transform.
      const itemClass = group.getAttribute('data-stagger') === 'fade' ? 'stagger-item-fade' : 'stagger-item';
      children.forEach((child, index) => {
        child.classList.add(itemClass);
        (child as HTMLElement).style.setProperty('--stagger-i', String(index));
      });

      const rect = group.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        group.classList.add('is-revealed');
        return;
      }
      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              staggerObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
      );
      staggerObserver.observe(group);
      disconnects.push(() => staggerObserver.disconnect());
    });

    // Auto fade/slide-in for every top-level section on the page, so scrolling
    // through any route feels animated without hand-tagging each section.
    const sections = Array.from(document.querySelectorAll('main > section')).filter(
      (section) => !section.matches(AUTO_REVEAL_SKIP)
    );

    if (sections.length) {
      const viewportHeight = window.innerHeight;
      const alreadyVisible: Element[] = [];
      const pending: Element[] = [];

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        (rect.top < viewportHeight * 0.85 ? alreadyVisible : pending).push(section);
      });

      // Sections already in view on load: mark revealed in the same tick so
      // they never actually paint at opacity 0 (no flash of hidden content).
      alreadyVisible.forEach((section) => {
        section.classList.add('auto-reveal', 'is-revealed');
      });

      if (pending.length) {
        pending.forEach((section) => section.classList.add('auto-reveal'));
        const sectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                sectionObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
        );
        pending.forEach((section) => sectionObserver.observe(section));
        disconnects.push(() => sectionObserver.disconnect());
      }
    }

    return () => disconnects.forEach((disconnect) => disconnect());
  }, [pathname]);

  return null;
}

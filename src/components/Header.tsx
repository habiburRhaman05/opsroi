'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/story', label: 'Story' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

      setIsScrolled(scrollTop > 20);
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 600);
      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 14V4M9 4l-5 5M9 4l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    <header className={` container  site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="header-pill">
        <Link href="/" className="brand">
          <Image src="/OpsROI-header.webp" alt="OpsROI logo" width={100} height={32}  />
        </Link>
        <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`} id="siteNav">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? 'active' : ''}
                onClick={() => setIsNavOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <Link href="/contact" className="nav-cta-mobile" onClick={() => setIsNavOpen(false)}>Contact us</Link>
        </nav>
        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary">Contact us</Link>
          <button 
            type="button" 
            className="nav-toggle" 
            id="navToggle" 
            aria-label="Toggle menu" 
            aria-expanded={isNavOpen} 
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </button>
        </div>
      </div>
    </header>
    </>
  );
}

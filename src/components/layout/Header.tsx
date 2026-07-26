'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/why-opsroi', label: 'Why OpsROI' },
  { href: '/features', label: 'Features' },
  { href: '/who-its-for', label: 'Who Its For' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/story', label: 'Our Story' },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isNavOpen]);

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
        className={`back-to-top border-4 shadow-2xl border-[#6BAE36] ${showBackToTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 14V4M9 4l-5 5M9 4l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    <header className={`container site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="header-pill">
        <Link href="/" className="brand" onClick={() => setIsNavOpen(false)}>
          <Image src="/OpsROI-header.webp" alt="OpsROI logo" width={100} height={32} />
        </Link>
        <nav className="nav hidden md:flex" id="siteNav">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? 'active' : ''}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary hidden md:inline-flex">Contact us</Link>
          <button 
            type="button" 
            className="md:hidden text-navy p-1 focus:outline-none flex items-center justify-center" 
            aria-label="Toggle menu" 
            onClick={() => setIsNavOpen(true)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </header>

    {/* Full-screen Mobile Menu Overlay */}
    <div className={`fixed inset-0 z-[100] bg-white transform transition-transform duration-300 ease-in-out flex flex-col md:hidden ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between p-6 border-b border-line bg-mist">
        <Link href="/" onClick={() => setIsNavOpen(false)}>
          <Image src="/OpsROI-header.webp" alt="OpsROI logo" width={110} height={35} />
        </Link>
        <button 
          type="button" 
          className="text-navy p-2 bg-white rounded-full shadow-sm border border-line focus:outline-none" 
          onClick={() => setIsNavOpen(false)}
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div className="flex flex-col flex-1 overflow-y-auto px-6 py-8">
        <div className="flex flex-col gap-6">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsNavOpen(false)}
                className={`text-2xl font-bebas tracking-wide uppercase transition-colors flex items-center justify-between group ${isActive ? 'text-green' : 'text-navy'}`}
              >
                <span>{label}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`transition-transform duration-300 ${isActive ? 'translate-x-0 opacity-100 text-green' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-green/50'}`}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu Footer CTA */}
      <div className="p-6 border-t border-line bg-mist pb-8">
        <Link 
          href="/contact" 
          onClick={() => setIsNavOpen(false)}
          className="w-full flex items-center justify-center bg-green hover:bg-green-deep text-white font-bebas text-xl tracking-widest uppercase rounded-xl py-4 transition-colors shadow-md gap-3"
        >
          <span>Contact Us</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
    </>
  );
}

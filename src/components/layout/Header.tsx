'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/why-opsroi', label: 'Why OpsROI' },
  { href: '/features', label: 'Features' },
  { href: '/who-its-for', label: "Who It's For" },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
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
        className={`back-to-top border-4 shadow-2xl border-green-deep ${showBackToTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 14V4M9 4l-5 5M9 4l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-line/70 shadow-[0_1px_20px_-10px_rgba(15,43,53,0.15)]'
            : 'bg-white border-b border-line/40'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[72px] lg:px-8">
          <Link href="/" onClick={() => setIsNavOpen(false)} className="flex items-center">
            <Image src="/OpsROI-header.webp" alt="OpsROI logo" width={110} height={32} priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-[13px] font-bold uppercase tracking-[0.14em] font-display transition-colors duration-200 ${
                    isActive ? 'text-navy' : 'text-navy/70 hover:text-navy'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-green"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book-a-demo"
              className="group hidden lg:inline-flex items-center justify-center gap-2 rounded-full bg-green px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors duration-200 hover:bg-green-deep hover:text-white font-display"
            >
              Book a Demo
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <button
              type="button"
              className="lg:hidden text-navy p-1 focus:outline-none flex items-center justify-center"
              aria-label="Toggle menu"
              onClick={() => setIsNavOpen(true)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div className={`fixed inset-0 z-[110] bg-white transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto px-6 py-8">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsNavOpen(false)}
                  className={`text-2xl font-bold tracking-wide uppercase transition-colors flex items-center justify-between group font-display ${isActive ? 'text-green' : 'text-navy'}`}
                >
                  <span>{label}</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`transition-transform duration-300 ${isActive ? 'translate-x-0 opacity-100 text-green' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-green/50'}`}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="p-6 border-t border-line bg-mist pb-8">
          <Link
            href="/book-a-demo"
            onClick={() => setIsNavOpen(false)}
            className="w-full flex items-center justify-center bg-green hover:bg-green-deep text-white font-bold text-lg tracking-widest uppercase rounded-xl py-4 transition-colors shadow-md gap-3 font-display"
          >
            <span>Book a Demo</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}

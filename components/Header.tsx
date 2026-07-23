'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="header-pill">
        <Link href="#home" className="brand">
          <Image src="/OpsROI-header.webp" alt="OpsROI logo" width={120} height={32} style={{ height: 'auto' }} />
        </Link>
        <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`} id="siteNav">
          <Link href="/" className="active" onClick={() => setIsNavOpen(false)}>Home</Link>
          <Link href="/product" onClick={() => setIsNavOpen(false)}>Product</Link>
          <Link href="/pricing" onClick={() => setIsNavOpen(false)}>Pricing</Link>
          <Link href="/story" onClick={() => setIsNavOpen(false)}>Story</Link>
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
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 sm:pt-24 sm:pb-8 text-white relative z-10 border-t border-navy-deep">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image src="/OpsROI-footer.webp" alt="OpsROI logo" width={140} height={40} className="h-auto w-[140px]" />
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm mb-8">
              The CRM and client-ops platform designed specifically to turn your agency&apos;s client work into a clear, visible return.
            </p>
            <div className="flex flex-wrap gap-4 mt-7">
              <a href="https://x.com/opsroi" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/50 hover:text-green transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="https://www.facebook.com/opsroi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-green transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
              </a>
              <a href="https://www.instagram.com/opsroi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-green transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/opsroi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/50 hover:text-green transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a href="https://www.youtube.com/@opsroi" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/50 hover:text-green transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bebas tracking-widest text-lg mb-6 uppercase">Product</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link href="/#product" className="hover:text-green transition-colors">Platform Overview</Link></li>
              <li><Link href="/who-its-for" className="hover:text-green transition-colors">Who It&apos;s For</Link></li>
              <li><Link href="/why-opsroi" className="hover:text-green transition-colors">Why OpsROI</Link></li>
              <li><Link href="/pricing" className="hover:text-green transition-colors">Pricing Plans</Link></li>
              <li><Link href="/#integrations" className="hover:text-green transition-colors">Integrations</Link></li>
              <li><Link href="/#compare" className="hover:text-green transition-colors">Compare Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bebas tracking-widest text-lg mb-6 uppercase">Company</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link href="/story" className="hover:text-green transition-colors">Our Founders</Link></li>
              <li><Link href="/#faq" className="hover:text-green transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-green transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-green transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bebas tracking-widest text-lg mb-6 uppercase">Legal</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link href="/privacy-policy" className="hover:text-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-green transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-green transition-colors">Cookie Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-green transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-medium">
          <span>&copy; 2026 OpsROI. All rights reserved.</span>
          <span>Built by business owners, for business owners.</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Star, ExternalLink, Clock } from "lucide-react";

export function Footer() {
  const gmbMapUrl = "https://www.google.com/maps/place/Quantum+Reach+Media,+Pune/data=!4m2!3m1!1s0x0:0xe9c0270609fb909b?sa=X&ved=1t:2428&hl=en&ictx=111";

  return (
    <footer className="relative z-10 pt-16 pb-0 overflow-hidden transition-colors bg-gradient-to-b from-purple-50/80 via-purple-100/40 to-background dark:from-[#17062b] dark:via-[#0e031c] dark:to-[#040109]">
      {/* Luminous Top Gradient Horizon Divider Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 via-purple-400/60 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
      
      {/* Ambient Top Glow Halo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-32 bg-gradient-to-b from-purple-600/20 via-purple-900/10 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle Grid Texture for Structural Depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40 dark:opacity-60" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid - Symmetrically Balanced 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Brand & Mission & Socials (4 Cols) */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <Image 
                src="/qrm-logo-transparent.webp" 
                alt="QRM Logo" 
                width={50} 
                height={18} 
                className="h-6 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(126,34,206,0.15)] dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.45)] dark:brightness-110" 
              />
              <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-purple-950 dark:text-white flex flex-col leading-[1.1]">
                <span>Quantum Reach</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
                  Media
                </span>
              </span>
            </Link>
            
            <p className="text-purple-950/80 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium max-w-[275px]">
              Architecting high-performance digital experiences, local map pack dominance, and Generative Engine Optimization (GEO/AEO) for ambitious brands.
            </p>

            {/* Social Media Icons */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-950/60 dark:text-zinc-500 block">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-xl bg-purple-100/80 dark:bg-zinc-900 border border-purple-200 dark:border-white/10 flex items-center justify-center text-purple-950 dark:text-zinc-300 hover:text-white hover:bg-purple-950 dark:hover:bg-saas-purple dark:hover:border-saas-purple transition-all duration-300 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-purple-100/80 dark:bg-zinc-900 border border-purple-200 dark:border-white/10 flex items-center justify-center text-purple-950 dark:text-zinc-300 hover:text-white hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:border-[#0A66C2] transition-all duration-300 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-purple-100/80 dark:bg-zinc-900 border border-purple-200 dark:border-white/10 flex items-center justify-center text-purple-950 dark:text-zinc-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 transition-all duration-300 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-purple-100/80 dark:bg-zinc-900 border border-purple-200 dark:border-white/10 flex items-center justify-center text-purple-950 dark:text-zinc-300 hover:text-white hover:bg-[#1877F2] dark:hover:bg-[#1877F2] dark:hover:border-[#1877F2] transition-all duration-300 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-purple-100/80 dark:bg-zinc-900 border border-purple-200 dark:border-white/10 flex items-center justify-center text-purple-950 dark:text-zinc-300 hover:text-white hover:bg-[#FF0000] dark:hover:bg-[#FF0000] dark:hover:border-[#FF0000] transition-all duration-300 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2: Navigation Links (4 Cols, centered with deliberate left padding) */}
          <div className="md:col-span-4 md:pl-8 lg:pl-14 space-y-4">
            <h4 className="font-bold text-zinc-900 dark:text-white text-xs font-mono uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-purple-950/70 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-saas-cyan transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-purple-950/70 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-saas-cyan transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-950/70 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-saas-cyan transition-colors font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-purple-950/70 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-saas-cyan transition-colors font-medium">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-purple-950/70 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-saas-cyan transition-colors font-medium">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-950/70 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-saas-cyan transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Pune Office & Contact (4 Cols) */}
          <div className="md:col-span-4 md:pl-2 lg:pl-6 space-y-4">
            <h4 className="font-bold text-zinc-900 dark:text-white text-xs font-mono uppercase tracking-wider">
              Pune Office & Contact Us
            </h4>
            
            <div className="text-xs text-purple-950/80 dark:text-zinc-400 leading-relaxed space-y-3.5 font-medium">
              
              {/* Interactive Address Link to GMB */}
              <a 
                href={gmbMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 hover:text-purple-950 dark:hover:text-white transition-colors"
              >
                <MapPin size={16} className="text-purple-700 dark:text-saas-cyan shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">
                  Survey Number 43, Lohar Arcade, Somnath Nagar, Wadgaon Sheri, Pune, MH 411014
                </span>
                <ExternalLink size={12} className="shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5" />
              </a>

              {/* Phone Link */}
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-purple-700 dark:text-saas-cyan shrink-0" />
                <a 
                  href="tel:07738812028" 
                  className="hover:text-purple-700 dark:hover:text-saas-cyan transition-colors font-mono font-bold text-purple-950 dark:text-white"
                >
                  077388 12028
                </a>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-2.5">
                <Clock size={15} className="text-purple-700 dark:text-saas-cyan shrink-0" />
                <span className="text-purple-950/80 dark:text-zinc-300 font-mono text-[11px]">
                  24/7 Digital Operations • Always Open
                </span>
              </div>

              {/* Google Reviews Badge */}
              <a
                href={gmbMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-100/70 dark:bg-white/5 border border-purple-200/80 dark:border-white/10 text-xs font-mono hover:border-purple-400 dark:hover:border-saas-cyan/40 transition-colors group"
              >
                <div className="flex text-amber-500">
                  <Star size={11} className="fill-amber-500" />
                  <Star size={11} className="fill-amber-500" />
                  <Star size={11} className="fill-amber-500" />
                  <Star size={11} className="fill-amber-500" />
                  <Star size={11} className="fill-amber-500" />
                </div>
                <span className="text-purple-950 dark:text-white font-bold">5.0</span>
                <span className="text-purple-950/70 dark:text-zinc-400">(9 Google Reviews)</span>
              </a>

            </div>
          </div>

        </div>
        
        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-purple-200/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-950/70 dark:text-zinc-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-purple-950 dark:text-zinc-300 font-semibold">Quantum Reach Media</strong> — SEO &amp; Digital Marketing Agency in Pune. All rights reserved.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <Link href="/privacy-policy" className="hover:text-purple-950 dark:hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-purple-950 dark:hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>

      {/* Massive Edge-to-Edge Watermark Typography Replicating Reference Design */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-6 sm:mt-10 pt-2 pb-0 px-4 sm:px-6 flex justify-center items-end">
        <span className="font-sans font-black uppercase tracking-tight text-center leading-[0.78] text-transparent bg-clip-text bg-gradient-to-b from-purple-950/[0.08] via-purple-950/[0.03] to-transparent dark:from-white/[0.08] dark:via-white/[0.03] dark:to-transparent text-[7.2vw] sm:text-[8.2vw] md:text-[8.8vw] lg:text-[9.2vw] whitespace-nowrap block max-w-full">
          QUANTUM REACH
        </span>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-card dark:bg-black border-t border-border dark:border-white/5 pt-20 pb-10 relative z-10 overflow-hidden transition-colors">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-saas-cyan/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-24 bg-saas-cyan/10 blur-[80px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-4 sm:gap-5 mb-6 group">
              <Image 
                src="/qrm-logo-transparent.webp" 
                alt="QRM Logo" 
                width={50} 
                height={18} 
                className="h-5 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(126,34,206,0.15)] dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.45)] dark:brightness-110" 
              />
              <span className="font-sans font-extrabold text-base md:text-lg tracking-tight text-purple-950 dark:text-white flex flex-col leading-[1.2]">
                <span>Quantum Reach</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#7E22CE] dark:from-[#38BDF8] dark:to-[#A855F7]">
                  Media
                </span>
              </span>
            </Link>
            <p className="text-purple-950/80 dark:text-zinc-400 text-sm mb-6 leading-relaxed font-medium">
              Architecting high-performance digital experiences and AEO strategies that dominate the modern web.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-saas-surface border border-purple-300 dark:border-white/10 flex items-center justify-center text-purple-950 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-white transition-colors cursor-pointer font-bold">𝕏</div>
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-saas-surface border border-purple-300 dark:border-white/10 flex items-center justify-center text-purple-950 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-white transition-colors cursor-pointer font-bold">in</div>
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-saas-surface border border-purple-300 dark:border-white/10 flex items-center justify-center text-purple-950 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-white transition-colors cursor-pointer font-bold">IG</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-4 text-sm">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#services" className="text-purple-950/70 dark:text-zinc-500 hover:text-purple-950 dark:hover:text-white transition-colors font-medium">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-purple-950/70 dark:text-zinc-500 hover:text-purple-950 dark:hover:text-white transition-colors font-medium">Portfolio</Link>
              </li>
              <li>
                <Link href="/blog" className="text-purple-950/70 dark:text-zinc-500 hover:text-purple-950 dark:hover:text-white transition-colors font-medium">Blog & Insights</Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-950/70 dark:text-zinc-500 hover:text-purple-950 dark:hover:text-white transition-colors font-medium">Contact Us</Link>
              </li>
              <li>
                <Link href="/#about" className="text-purple-950/70 dark:text-zinc-500 hover:text-purple-950 dark:hover:text-white transition-colors font-medium">About Team</Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Pune Headquarters & Contact</h4>
            <div className="text-xs text-purple-950/80 dark:text-zinc-400 leading-relaxed space-y-2 font-medium">
              <div className="flex items-start gap-2">
                <span className="text-purple-700 dark:text-saas-cyan font-bold">📍</span>
                <span>Survey Number 43, Lohar Arcade, Somnath Nagar, Wadgaon Sheri, Pune, MH 411014</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-700 dark:text-saas-cyan font-bold">📞</span>
                <a href="tel:07738812028" className="hover:text-purple-700 dark:hover:text-saas-cyan transition-colors font-mono font-bold text-purple-950 dark:text-white">077388 12028</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">🕒</span>
                <span className="text-emerald-800 dark:text-emerald-400 font-semibold font-mono">24/7 Digital Operations • Always Open to Serve You</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-yellow-600 dark:text-yellow-400">★★★★★</span>
                <span className="text-purple-950 dark:text-white font-bold font-mono">5.0 (6 Google Reviews)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-purple-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-purple-950/70 dark:text-zinc-600 font-medium">
          <p>&copy; {new Date().getFullYear()} Quantum Reach Media. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-purple-950 dark:hover:text-zinc-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-purple-950 dark:hover:text-zinc-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

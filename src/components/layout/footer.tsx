import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 relative z-10 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-saas-cyan/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-24 bg-saas-cyan/10 blur-[80px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.6)] transition-shadow">
                <Image src="/qrm-logo.jpg" alt="Quantum Reach Media Logo" fill className="object-cover" />
              </div>
              <span className="font-sans font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-zinc-200 to-saas-cyan bg-clip-text text-transparent">
                Quantum Reach Media
              </span>
            </Link>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Architecting high-performance digital experiences and AEO strategies that dominate the modern web.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-saas-surface border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer">𝕏</div>
              <div className="w-8 h-8 rounded-full bg-saas-surface border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer">in</div>
              <div className="w-8 h-8 rounded-full bg-saas-surface border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer">IG</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm">
              {["Features", "Integrations", "Pricing", "Changelog", "Docs"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-zinc-500 hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Careers", "Blog", "Contact", "Partners"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-zinc-500 hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-4 text-sm">Subscribe to our newsletter</h4>
            <p className="text-zinc-500 text-sm mb-4">Get the latest news and articles to your inbox every month.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-saas-surface border border-white/10 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-saas-cyan flex-1"
              />
              <button type="button" className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md hover:bg-zinc-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Quantum Reach Media. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

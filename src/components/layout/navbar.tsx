"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  TrendingUp, 
  Users, 
  Mail, 
  Code2, 
  Palette, 
  FileText, 
  Award, 
  MapPin, 
  Megaphone, 
  BarChart3,
  ArrowRight,
  Sparkles,
  Bot
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside for services dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current && 
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  const serviceCategories = [
    {
      title: "DIGITAL MARKETING",
      items: [
        {
          title: "SEO Services",
          desc: "Rank higher on Google",
          href: "/services/traditional-seo-pune",
          icon: <Search className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        },
        {
          title: "Google Ads (PPC)",
          desc: "Get instant inbound traffic",
          href: "/services/google-ads-ppc-pune",
          icon: <TrendingUp className="w-4 h-4 text-amber-500 dark:text-amber-400" />
        },
        {
          title: "Social Media Marketing",
          desc: "Build engaged audiences",
          href: "/services/social-media-marketing-pune",
          icon: <Users className="w-4 h-4 text-pink-500 dark:text-pink-400" />
        },
        {
          title: "Email Marketing",
          desc: "Nurture and convert leads",
          href: "/services/email-marketing-pune",
          icon: <Mail className="w-4 h-4 text-blue-500 dark:text-blue-400" />
        }
      ]
    },
    {
      title: "WEBSITE & CONTENT",
      items: [
        {
          title: "Website Development",
          desc: "Fast, modern Next.js websites",
          href: "/services/seo-web-development-pune",
          icon: <Code2 className="w-4 h-4 text-saas-purple dark:text-saas-cyan" />
        },
        {
          title: "Branding & Design",
          desc: "Stand out from competitors",
          href: "/services/branding-design-pune",
          icon: <Palette className="w-4 h-4 text-fuchsia-500 dark:text-fuchsia-400" />
        },
        {
          title: "Content Marketing",
          desc: "High-ranking content that converts",
          href: "/services/content-architecture-pune",
          icon: <FileText className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
        },
        {
          title: "Authority & Digital PR",
          desc: "High-DA backlinks and press",
          href: "/services/authority-building-pune",
          icon: <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
        }
      ]
    },
    {
      title: "SPECIALIZED GROWTH",
      items: [
        {
          title: "Google My Business",
          desc: "Dominate local 3-pack search",
          href: "/services/local-seo-gmb-pune",
          icon: <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400" />
        },
        {
          title: "Meta Ads",
          desc: "Facebook & Instagram ads",
          href: "/services/meta-advertisements-pune",
          icon: <Megaphone className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
        },
        {
          title: "AEO / GEO Optimization",
          desc: "Rank in ChatGPT & Gemini",
          href: "/services/aeo-geo-optimization-pune",
          icon: <Bot className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
        },
        {
          title: "Analytics & Tracking",
          desc: "Server-side GTM & GA4 attribution",
          href: "/services/analytics-tracking-pune",
          icon: <BarChart3 className="w-4 h-4 text-purple-600 dark:text-saas-cyan" />
        }
      ]
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 pt-4 sm:pt-6 px-3 sm:px-6 pointer-events-none">
      <div
        className={cn(
          "mx-auto transition-all duration-300 border pointer-events-auto flex items-center justify-between relative",
          scrolled
            ? "w-full max-w-5xl xl:max-w-6xl rounded-full bg-card/90 dark:bg-saas-surface/85 backdrop-blur-xl border-purple-200 dark:border-white/15 shadow-[0_10px_30px_rgba(147,51,234,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] px-4 sm:px-6 py-2 sm:py-2.5"
            : "w-full max-w-6xl rounded-full bg-transparent border-transparent px-4 sm:px-6 py-3"
        )}
      >
        {/* Brand Logo Link - Clean responsive logo and text */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
          <Image 
            src="/qrm-logo-transparent.webp" 
            alt="QRM Logo" 
            width={50} 
            height={18} 
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(126,34,206,0.15)] dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.45)] dark:brightness-110",
              scrolled ? "h-4 sm:h-4.5" : "h-4.5 sm:h-5"
            )}
            priority
          />
          {/* Brand Name: Shown on larger displays to guarantee no overlapping */}
          <span className="font-sans font-extrabold text-sm sm:text-base tracking-tight text-purple-950 dark:text-white hidden lg:inline-block whitespace-nowrap">
            Quantum Reach{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#7E22CE] dark:from-[#38BDF8] dark:to-[#A855F7]">
              Media
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 xl:gap-3 shrink-0">
          <Link 
            href="/" 
            className={cn(
              "text-xs lg:text-sm font-bold transition-all whitespace-nowrap px-3 py-1.5 rounded-full",
              isLinkActive("/")
                ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
            )}
          >
            Home
          </Link>

          <Link 
            href="/about" 
            className={cn(
              "text-xs lg:text-sm font-bold transition-all whitespace-nowrap px-3 py-1.5 rounded-full",
              isLinkActive("/about")
                ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
            )}
          >
            About Us
          </Link>

          {/* Services Mega Menu Trigger */}
          <div 
            ref={servicesDropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              onClick={() => setServicesOpen(false)}
              className={cn(
                "inline-flex items-center gap-1.5 text-xs lg:text-sm font-bold transition-all py-1.5 px-3 rounded-full cursor-pointer whitespace-nowrap",
                pathname.startsWith("/services") || servicesOpen
                  ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                  : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
              )}
            >
              <span>Services</span>
              <ChevronDown 
                size={13} 
                className={cn(
                  "transition-transform duration-200",
                  servicesOpen ? "rotate-180 text-purple-700 dark:text-saas-cyan" : ""
                )} 
              />
            </Link>

            {/* Services Mega Menu Dropdown */}
            {servicesOpen && (
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+14px)] w-[820px] max-w-[90vw] p-6 rounded-3xl border border-purple-200/90 dark:border-white/15 bg-card/98 dark:bg-zinc-950/98 backdrop-blur-2xl shadow-[0_20px_60px_rgba(147,51,234,0.2)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.95)] animate-in fade-in zoom-in-95 duration-200 z-50 pointer-events-auto"
              >
                <div className="grid grid-cols-3 gap-6">
                  {serviceCategories.map((category, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-purple-800 dark:text-saas-cyan/90 border-b border-purple-100 dark:border-white/10 pb-2">
                        {category.title}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {category.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-3 p-2 rounded-xl hover:bg-purple-50 dark:hover:bg-white/5 transition-all"
                          >
                            <div className="mt-0.5 w-7 h-7 rounded-lg bg-purple-100 dark:bg-zinc-900 border border-purple-200/70 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-purple-400 dark:group-hover:border-saas-cyan/50 transition-all">
                              {item.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-purple-950 dark:text-zinc-100 group-hover:text-purple-700 dark:group-hover:text-saas-cyan transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[11px] text-purple-900/70 dark:text-zinc-400 font-medium line-clamp-1">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Highlight Bar in Mega Menu */}
                <div className="mt-5 pt-4 border-t border-purple-100 dark:border-white/10 flex items-center justify-between text-xs">
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-full bg-purple-100 dark:bg-white/10 hover:bg-purple-200 dark:hover:bg-white/15 text-purple-900 dark:text-saas-cyan transition-colors"
                  >
                    <Sparkles size={13} className="text-purple-600 dark:text-saas-cyan" />
                    <span>View All 12 Services Hub</span>
                    <ArrowRight size={12} />
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-1.5 font-bold text-purple-700 dark:text-saas-cyan hover:underline group"
                  >
                    <span>Schedule Strategy Audit</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/portfolio" 
            className={cn(
              "text-xs lg:text-sm font-bold transition-all whitespace-nowrap px-3 py-1.5 rounded-full",
              isLinkActive("/portfolio")
                ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
            )}
          >
            Our Work
          </Link>

          <Link 
            href="/blog" 
            className={cn(
              "text-xs lg:text-sm font-bold transition-all whitespace-nowrap px-3 py-1.5 rounded-full",
              isLinkActive("/blog")
                ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
            )}
          >
            Blog
          </Link>

          <Link 
            href="/contact" 
            className={cn(
              "text-xs lg:text-sm font-bold transition-all whitespace-nowrap px-3 py-1.5 rounded-full",
              isLinkActive("/contact")
                ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
            )}
          >
            Contact Us
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5 sm:gap-3 shrink-0">
          <ThemeToggle />
          <Link 
            href="/contact" 
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-xs font-bold rounded-full transition-colors shadow-sm whitespace-nowrap"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 rounded-full border border-purple-200 dark:border-white/10 text-purple-950 dark:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-all duration-300 pointer-events-auto"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Mobile Navigation Dropdown Drawer */}
        {isOpen && (
          <div data-lenis-prevent className="absolute top-[calc(100%+12px)] left-4 right-4 p-5 rounded-3xl border border-purple-200 dark:border-white/10 bg-card/95 dark:bg-saas-surface/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(147,51,234,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden pointer-events-auto max-h-[80vh] overflow-y-auto">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)} 
              className={cn(
                "text-sm font-bold py-2 px-3 rounded-xl transition-all",
                isLinkActive("/")
                  ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/30"
                  : "text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white"
              )}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)} 
              className={cn(
                "text-sm font-bold py-2 px-3 rounded-xl transition-all",
                isLinkActive("/about")
                  ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/30"
                  : "text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white"
              )}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex-1 text-sm font-bold py-2 px-3 rounded-xl transition-all",
                    pathname.startsWith("/services")
                      ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/30"
                      : "text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white"
                  )}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileServicesOpen(!mobileServicesOpen);
                  }}
                  className="p-2 text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white rounded-xl"
                  aria-label="Toggle services list"
                >
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "transition-transform duration-200", 
                      mobileServicesOpen ? "rotate-180 text-purple-700 dark:text-saas-cyan" : ""
                    )} 
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-3 pr-1 py-2 flex flex-col gap-3 my-1 border-l-2 border-purple-200 dark:border-white/10">
                  <Link
                    href="/services"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="text-xs font-bold text-purple-700 dark:text-saas-cyan flex items-center justify-between pb-1.5 mb-1 border-b border-purple-200/50 dark:border-white/10"
                  >
                    <span>View All 12 Services Hub</span>
                    <ArrowRight size={12} />
                  </Link>
                  {serviceCategories.map((category, catIdx) => (
                    <div key={catIdx} className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-purple-800 dark:text-saas-cyan uppercase">
                        {category.title}
                      </span>
                      <div className="flex flex-col gap-1 pl-1">
                        {category.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className={cn(
                              "text-xs font-semibold py-1 flex items-center gap-2 transition-colors",
                              pathname === item.href
                                ? "text-purple-700 dark:text-saas-cyan font-bold"
                                : "text-purple-950/70 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white"
                            )}
                          >
                            <span className={cn(
                              "w-1.5 h-1.5 rounded-full shrink-0",
                              pathname === item.href ? "bg-purple-600 dark:bg-saas-cyan" : "bg-purple-500/70"
                            )} />
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/portfolio" 
              onClick={() => setIsOpen(false)} 
              className={cn(
                "text-sm font-bold py-2 px-3 rounded-xl transition-all",
                isLinkActive("/portfolio")
                  ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/30"
                  : "text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white"
              )}
            >
              Our Work
            </Link>

            <Link 
              href="/blog" 
              onClick={() => setIsOpen(false)} 
              className={cn(
                "text-sm font-bold py-2 px-3 rounded-xl transition-all",
                isLinkActive("/blog")
                  ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/30"
                  : "text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white"
              )}
            >
              Blog
            </Link>

            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className={cn(
                "text-sm font-bold py-2 px-3 rounded-xl transition-all",
                isLinkActive("/contact")
                  ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/30"
                  : "text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white"
              )}
            >
              Contact Us
            </Link>

            <div className="h-px bg-purple-100 dark:bg-white/10 my-1" />
            <div className="flex items-center justify-between py-1">
              <span className="text-xs font-bold text-purple-950/60 dark:text-zinc-500">Theme Mode</span>
              <ThemeToggle />
            </div>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className="w-full text-center py-2.5 bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-xs font-bold rounded-full transition-all shadow-sm mt-1"
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  Sparkles,
  Bot,
  BookOpen,
  Activity
} from "lucide-react";

/**
 * ============================================================================
 * HEADER DESIGN TOGGLE (EASY REVERSAL)
 * ============================================================================
 * - Set `ENABLE_TECHINFINITY_HEADER = true` (default):
 *   Activates the full-width translucent black header bar with the centered S-curve
 *   dipped shelf replicating techinfinity.io. On scrolling down, the full-width bar
 *   locks to the top with the centered QRM logo. On hover, the shelf widens smoothly
 *   to reveal the complete navigation menu.
 * 
 * - Set `ENABLE_TECHINFINITY_HEADER = false`:
 *   Instantly reverts to the original floating pill navbar without losing any settings.
 * ============================================================================
 */
export const ENABLE_TECHINFINITY_HEADER = true;

// ============================================================================
// SHARED NAVIGATION DATA
// ============================================================================
const serviceCategories = [
  {
    title: "DIGITAL MARKETING",
    items: [
      {
        title: "SEO Services",
        desc: "Rank higher on Google",
        href: "/services/traditional-seo-in-pune",
        icon: <Search className="w-4 h-4 text-purple-600 dark:text-purple-400" />
      },
      {
        title: "Google Ads (PPC)",
        desc: "Get instant inbound traffic",
        href: "/services/google-ads-ppc-in-pune",
        icon: <TrendingUp className="w-4 h-4 text-amber-500 dark:text-amber-400" />
      },
      {
        title: "Social Media Marketing",
        desc: "Build engaged audiences",
        href: "/services/social-media-marketing-in-pune",
        icon: <Users className="w-4 h-4 text-pink-500 dark:text-pink-400" />
      },
      {
        title: "Email Marketing",
        desc: "Nurture and convert leads",
        href: "/services/email-marketing-in-pune",
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
        href: "/services/seo-web-development-in-pune",
        icon: <Code2 className="w-4 h-4 text-saas-purple dark:text-saas-cyan" />
      },
      {
        title: "Branding & Design",
        desc: "Stand out from competitors",
        href: "/services/branding-design-in-pune",
        icon: <Palette className="w-4 h-4 text-fuchsia-500 dark:text-fuchsia-400" />
      },
      {
        title: "Content Marketing",
        desc: "High-ranking content that converts",
        href: "/services/content-architecture-in-pune",
        icon: <FileText className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
      },
      {
        title: "Authority & Digital PR",
        desc: "High-DA backlinks and press",
        href: "/services/authority-building-in-pune",
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
        href: "/services/local-seo-gmb-in-pune",
        icon: <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400" />
      },
      {
        title: "Meta Ads",
        desc: "Facebook & Instagram ads",
        href: "/services/meta-advertisements-in-pune",
        icon: <Megaphone className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "AEO / GEO Optimization",
        desc: "Rank in ChatGPT & Gemini",
        href: "/services/aeo-geo-optimization-in-pune",
        icon: <Bot className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
      },
      {
        title: "Analytics & Tracking",
        desc: "Server-side GTM & GA4 attribution",
        href: "/services/analytics-tracking-in-pune",
        icon: <BarChart3 className="w-4 h-4 text-purple-600 dark:text-saas-cyan" />
      }
    ]
  }
];

const blogNavItems = [
  {
    title: "Blog Posts & Insights",
    desc: "Marketing playbooks, guides & deep dives",
    href: "/blog",
    icon: <BookOpen className="w-4 h-4 text-saas-cyan" />
  },
  {
    title: "Google Core Updates",
    desc: "Live Google algorithm updates radar",
    href: "/google-algorithm-updates",
    icon: <Activity className="w-4 h-4 text-purple-400" />
  }
];


// ============================================================================
// CONTINUOUS NOTCH SHAPE GEOMETRY (PREVIOUS CURVATURE RESTORED)
// 56px smooth circular S-curves with 28px control points connecting 24px top bar
// to the 68px dipped shelf with zero seams and zero borders.
// ============================================================================
function getScoopPath(w: number) {
  const width = Math.max(w, 180);
  return `M 0 0 L ${width} 0 L ${width} 24 C ${width - 28} 24, ${width - 28} 68, ${width - 56} 68 L 56 68 C 28 68, 28 24, 0 24 Z`;
}

// Full-width continuous shelf path spanning 100% of viewport width
function getFullHeaderPath(windowW: number, notchW: number) {
  const W = Math.max(windowW, 320);
  const w = Math.max(Math.min(notchW, W), 180);
  const leftEdge = Math.round((W - w) / 2);
  const rightEdge = leftEdge + w;
  return `M 0 0 L ${W} 0 L ${W} 24 L ${rightEdge} 24 C ${rightEdge - 28} 24, ${rightEdge - 28} 68, ${rightEdge - 56} 68 L ${leftEdge + 56} 68 C ${leftEdge + 28} 68, ${leftEdge + 28} 24, ${leftEdge} 24 L 0 24 Z`;
}

// Specular 1px glass bottom silhouette outline
function getFullHeaderBottomLine(windowW: number, notchW: number) {
  const W = Math.max(windowW, 320);
  const w = Math.max(Math.min(notchW, W), 180);
  const leftEdge = Math.round((W - w) / 2);
  const rightEdge = leftEdge + w;
  return `M 0 24 L ${leftEdge} 24 C ${leftEdge + 28} 24, ${leftEdge + 28} 68, ${leftEdge + 56} 68 L ${rightEdge - 56} 68 C ${rightEdge - 28} 68, ${rightEdge - 28} 24, ${rightEdge} 24 L ${W} 24`;
}

// ============================================================================
// 1. TECHINFINITY-STYLE FULL-WIDTH HEADER COMPONENT
// ============================================================================
function TechInfinityHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile drawer
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1440);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobileOrTablet = windowWidth < 1024;

  // Collapsed: narrow 196px for all devices (centered logo only, no hamburger).
  // Expanded on hover/click: expands into wide shelf for desktop and mobile/tablet.
  const shelfWidth = isHovered
    ? (isMobileOrTablet
        ? Math.min(1060, Math.max(340, Math.round(windowWidth * 0.95)))
        : Math.min(1060, Math.max(360, Math.round(windowWidth * 0.94))))
    : 196;

  const notchRef = useRef<HTMLDivElement>(null);
  const collapseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const blogDropdownRef = useRef<HTMLDivElement>(null);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Scroll listener: activates full-width dipped header when scrolling past 30px
  useEffect(() => {
    const handleScroll = () => {
      const isPastThreshold = window.scrollY > 30;
      setScrolled(isPastThreshold);
      if (!isPastThreshold) {
        setIsHovered(false);
        setServicesOpen(false);
        setBlogOpen(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside & Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Do not collapse if clicking inside the mobile drawer
      const drawer = document.querySelector('[data-mobile-drawer="true"]');
      if (drawer && drawer.contains(target)) return;

      if (notchRef.current && !notchRef.current.contains(target)) {
        setIsHovered(false);
        setServicesOpen(false);
        setBlogOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsHovered(false);
        setServicesOpen(false);
        setBlogOpen(false);
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

  // Grace hover timeout
  const handleNotchMouseEnter = () => {
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleNotchMouseLeave = () => {
    // If mobile drawer is open, keep notch expanded
    if (isOpen) return;
    collapseTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      setServicesOpen(false);
      setBlogOpen(false);
    }, 280);
  };

  return (
    <>
      {/* ================================================================== */}
      {/* STATE A: AT TOP OF PAGE (Floating clean initial header)            */}
      {/* ================================================================== */}
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            key="top-header"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-0 inset-x-0 z-50 pt-4 sm:pt-6 px-3 sm:px-6 pointer-events-none"
          >
            <div className="mx-auto w-full max-w-6xl rounded-full bg-transparent border-transparent px-4 sm:px-6 py-3 flex items-center justify-between pointer-events-auto">
              {/* Brand Logo Link */}
              <Link href="/" className="flex items-center gap-3 group shrink-0">
                <Image 
                  src="/qrm-logo-transparent.webp" 
                  alt="QRM Logo" 
                  width={56} 
                  height={20} 
                  className="w-auto h-5 sm:h-6 object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(126,34,206,0.25)] dark:drop-shadow-[0_0_14px_rgba(168,85,247,0.5)] dark:brightness-110"
                  priority
                />
                <span className="font-sans font-extrabold text-sm sm:text-base tracking-tight text-purple-950 dark:text-white hidden lg:inline-block whitespace-nowrap">
                  Quantum Reach{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
                    Media
                  </span>
                </span>
              </Link>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center gap-2 lg:gap-3 shrink-0">
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
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
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

                  {servicesOpen && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+14px)] w-[820px] max-w-[90vw] p-6 rounded-3xl border border-white/20 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 z-50 pointer-events-auto"
                      style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(168, 85, 247, 0.12) 20%, rgba(18, 14, 32, 0.85) 100%)",
                        boxShadow: "0 30px 80px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 35px rgba(168, 85, 247, 0.15)",
                      }}
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
                  href="/our-work" 
                  className={cn(
                    "text-xs lg:text-sm font-bold transition-all whitespace-nowrap px-3 py-1.5 rounded-full",
                    isLinkActive("/our-work")
                      ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                      : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
                  )}
                >
                  Our Work
                </Link>

                {/* Blog Dropdown */}
                <div 
                  ref={blogDropdownRef}
                  className="relative"
                  onMouseEnter={() => setBlogOpen(true)}
                  onMouseLeave={() => setBlogOpen(false)}
                >
                  <Link
                    href="/blog"
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs lg:text-sm font-bold transition-all py-1.5 px-3 rounded-full cursor-pointer whitespace-nowrap",
                      pathname.startsWith("/blog") || pathname.startsWith("/google-algorithm-updates") || blogOpen
                        ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                        : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
                    )}
                  >
                    <span>Blog</span>
                    <ChevronDown 
                      size={13} 
                      className={cn(
                        "transition-transform duration-200",
                        blogOpen ? "rotate-180 text-purple-700 dark:text-saas-cyan" : ""
                      )} 
                    />
                  </Link>

                  {blogOpen && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+14px)] w-72 p-3 rounded-2xl border border-white/20 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 z-50 pointer-events-auto"
                      style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(168, 85, 247, 0.12) 25%, rgba(18, 14, 32, 0.85) 100%)",
                        boxShadow: "0 25px 70px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 25px rgba(168, 85, 247, 0.12)",
                      }}
                    >
                      <div className="flex flex-col gap-1.5">
                        {blogNavItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setBlogOpen(false)}
                            className={cn(
                              "group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-all",
                              pathname === item.href && "bg-white/10"
                            )}
                          >
                            <div className="mt-0.5 w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-saas-cyan/50 transition-all">
                              {item.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-zinc-100 group-hover:text-saas-cyan transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[11px] text-zinc-400 font-medium">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

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
              <div className="hidden lg:flex items-center gap-2.5 sm:gap-3 shrink-0">
                <ThemeToggle />
                <Link 
                  href="/contact" 
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-xs font-bold rounded-full transition-colors shadow-sm whitespace-nowrap"
                >
                  Get Quote
                </Link>
              </div>

              {/* Mobile & Tablet Hamburger Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex lg:hidden p-2 rounded-full border border-purple-200 dark:border-white/10 text-purple-950 dark:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-all duration-300 pointer-events-auto"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ================================================================== */}
      {/* STATE B: SCROLLED DOWN - FULL-WIDTH TRANSLUCENT S-CURVE HEADER     */}
      {/* Exact replication of techinfinity.io:                             */}
      {/* - Full-width dark bar running across 100% of the screen at top: 0   */}
      {/* - Center dipped shelf with continuous S-curves                      */}
      {/* - Enlarged prominent QRM logo (NO dot)                              */}
      {/* - Expands on hover with generous spacing and complete menu          */}
      {/* ================================================================== */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="techinfinity-fullwidth-header"
            initial={{ y: -72 }}
            animate={{ y: 0 }}
            exit={{ y: -72 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="fixed top-0 inset-x-0 z-50 pointer-events-none"
          >
            {/* 1. UNIFIED FULL-WIDTH GLASSMORPHISM HEADER (ONE SINGLE CONTINUOUS SHELF ACROSS 100% OF SCREEN) */}
            {/* No behind bar, no duplicate layers: the notch glass effect is applied seamlessly throughout the entire bar */}
            <div className="absolute top-0 inset-x-0 h-[68px] pointer-events-none">
              {/* Full-width continuous ambient shadow & specular edge outline */}
              <svg
                width="100%"
                height="74"
                viewBox={`0 0 ${windowWidth} 74`}
                className="absolute inset-0 w-full h-full pointer-events-none -z-10 transition-all duration-300"
              >
                <defs>
                  <filter id="full-header-ambient-shadow" x="-5%" y="-20%" width="110%" height="150%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                    <feOffset dx="0" dy="5" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.4" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                {/* Soft ambient drop shadow underneath the entire continuous silhouette */}
                <path
                  d={getFullHeaderPath(windowWidth, shelfWidth)}
                  fill="rgba(0,0,0,0.3)"
                  filter="url(#full-header-ambient-shadow)"
                  className="transition-all duration-300"
                />
                {/* Luminous frosted glass specular highlight along the entire bottom edge */}
                <path
                  d={getFullHeaderBottomLine(windowWidth, shelfWidth)}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.16)"
                  strokeWidth="1"
                  className="transition-all duration-300"
                />
              </svg>

               {/* Single continuous glassmorphism layer with true backdrop blur & purple glass gradient */}
              <div
                className="absolute inset-0 pointer-events-none z-0 transition-all duration-300"
                style={{
                  clipPath: `path('${getFullHeaderPath(windowWidth, shelfWidth)}')`,
                  WebkitClipPath: `path('${getFullHeaderPath(windowWidth, shelfWidth)}')`,
                  backdropFilter: "blur(24px) saturate(190%)",
                  WebkitBackdropFilter: "blur(24px) saturate(190%)",
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(168, 85, 247, 0.14) 28px, rgba(20, 16, 32, 0.8) 68px)",
                }}
              />
            </div>

            {/* 2. NAVIGATION CONTENT LAYER WITH MACBOOK DIPPED GLASS SHELF */}
            <div
              ref={notchRef}
              onMouseEnter={handleNotchMouseEnter}
              onMouseLeave={handleNotchMouseLeave}
              className="relative mx-auto flex justify-center pointer-events-auto"
            >
              {/* Central Dipped Shelf Container (Animated Width, narrow 196px for QRM) */}
              <motion.div
                animate={{
                  width: `${shelfWidth}px`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 32,
                  mass: 0.85
                }}
                className="relative h-[68px] flex items-center justify-between text-white select-none overflow-visible"
              >

                {/* -------------------------------------------------------- */}
                {/* 1. COLLAPSED VIEW (All devices): Centered Logo in Small Notch */}
                {/* (NO hamburger menu in the small notch)                   */}
                {/* -------------------------------------------------------- */}
                {!isHovered && (
                  <motion.div
                    key="shelf-collapsed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setIsHovered(true)}
                    className="flex items-center justify-center w-full h-full px-3 cursor-pointer group relative z-10 pt-3"
                  >
                    <Image 
                      src="/qrm-logo-transparent.webp" 
                      alt="QRM Logo" 
                      width={80} 
                      height={26} 
                      className="w-auto h-7 object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(168,85,247,0.5)] brightness-110"
                      priority
                    />
                  </motion.div>
                )}

                {/* -------------------------------------------------------- */}
                {/* 2. EXPANDED VIEW ON MOBILE & TABLET (< 1024px)            */}
                {/* Logo on Left, Hamburger Menu Button on Right             */}
                {/* -------------------------------------------------------- */}
                {isHovered && isMobileOrTablet && (
                  <motion.div
                    key="shelf-expanded-mobile"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, delay: 0.05 }}
                    className="flex items-center justify-between w-full h-full px-14 sm:px-16 md:px-20 gap-4 relative z-10 pt-3"
                  >
                    {/* Brand Logo on Left */}
                    <Link 
                      href="/" 
                      className="inline-flex items-center gap-2 group shrink-0 h-9"
                    >
                      <Image 
                        src="/qrm-logo-transparent.webp" 
                        alt="QRM Logo" 
                        width={76} 
                        height={26} 
                        className="w-auto h-6 sm:h-7 object-contain group-hover:scale-105 transition-transform drop-shadow-[0_2px_10px_rgba(168,85,247,0.4)] brightness-110"
                        priority
                      />
                    </Link>

                    {/* Hamburger Menu on Right */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                      }}
                      className="p-1.5 sm:p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Toggle Menu"
                    >
                      {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                  </motion.div>
                )}

                {/* -------------------------------------------------------- */}
                {/* 3. EXPANDED VIEW ON DESKTOP (>= 1024px)                  */}
                {/* Logo Left, Full Navigation Center, Actions Right         */}
                {/* -------------------------------------------------------- */}
                {isHovered && !isMobileOrTablet && (
                  <motion.div
                    key="shelf-expanded-desktop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, delay: 0.05 }}
                    className="flex items-center justify-between w-full h-full px-8 sm:px-12 lg:px-14 gap-4 relative z-10 pt-3"
                  >
                        {/* Brand Logo on Left */}
                        <Link 
                          href="/" 
                          className="inline-flex items-center gap-2 group shrink-0 h-9"
                        >
                          <Image 
                            src="/qrm-logo-transparent.webp" 
                            alt="QRM Logo" 
                            width={76} 
                            height={26} 
                            className="w-auto h-6 sm:h-7 object-contain group-hover:scale-105 transition-transform drop-shadow-[0_2px_10px_rgba(168,85,247,0.4)] brightness-110"
                          />
                        </Link>

                        {/* Navigation Menu with Generous Spacing and Highlighted Active Tabs */}
                        <nav className="flex items-center gap-1.5 lg:gap-2 xl:gap-3 h-9">
                          <Link 
                            href="/about" 
                            className={cn(
                              "inline-flex items-center h-8 px-3.5 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap",
                              isLinkActive("/about")
                                ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.35)] dark:shadow-[0_0_15px_rgba(56,189,248,0.3)] font-bold"
                                : "text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent"
                            )}
                          >
                            About Us
                          </Link>

                          {/* Services Trigger with Dropdown Chevron */}
                          <div 
                            className="relative flex items-center h-9"
                            onMouseEnter={() => {
                              if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
                              setServicesOpen(true);
                            }}
                            onMouseLeave={() => setServicesOpen(false)}
                          >
                            <Link
                              href="/services"
                              className={cn(
                                "inline-flex items-center h-8 gap-1.5 px-3.5 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer",
                                pathname.startsWith("/services") || servicesOpen
                                  ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.35)] dark:shadow-[0_0_15px_rgba(56,189,248,0.3)] font-bold"
                                  : "text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent"
                              )}
                            >
                              <span>Services</span>
                              <ChevronDown 
                                size={14} 
                                className={cn(
                                  "transition-transform duration-200 opacity-80 shrink-0",
                                  servicesOpen ? "rotate-180 opacity-100" : ""
                                )} 
                              />
                            </Link>

                            {/* Services Mega Menu with Glassmorphism */}
                            {servicesOpen && (
                              <div 
                                onMouseEnter={() => {
                                  if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
                                  setIsHovered(true);
                                  setServicesOpen(true);
                                }}
                                className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+14px)] w-[820px] max-w-[92vw] p-6 rounded-3xl border border-white/20 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 z-50 pointer-events-auto"
                                style={{
                                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(168, 85, 247, 0.12) 20%, rgba(18, 14, 32, 0.85) 100%)",
                                  boxShadow: "0 30px 80px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 35px rgba(168, 85, 247, 0.15)",
                                }}
                              >
                                <div className="grid grid-cols-3 gap-6">
                                  {serviceCategories.map((category, idx) => (
                                    <div key={idx} className="space-y-3">
                                      <div className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-saas-cyan/90 border-b border-white/10 pb-2">
                                        {category.title}
                                      </div>
                                      <div className="flex flex-col gap-1.5">
                                        {category.items.map((item, itemIdx) => (
                                          <Link
                                            key={itemIdx}
                                            href={item.href}
                                            onClick={() => {
                                              setServicesOpen(false);
                                              setIsHovered(false);
                                            }}
                                            className="group flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 transition-all"
                                          >
                                            <div className="mt-0.5 w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-saas-cyan/50 transition-all">
                                              {item.icon}
                                            </div>
                                            <div className="flex flex-col">
                                              <span className="text-xs font-bold text-zinc-100 group-hover:text-saas-cyan transition-colors">
                                                {item.title}
                                              </span>
                                              <span className="text-[11px] text-zinc-400 font-medium line-clamp-1">
                                                {item.desc}
                                              </span>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                                  <Link
                                    href="/services"
                                    onClick={() => {
                                      setServicesOpen(false);
                                      setIsHovered(false);
                                    }}
                                    className="inline-flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-saas-cyan transition-colors text-xs"
                                  >
                                    <Sparkles size={13} className="text-saas-cyan" />
                                    <span>View All 12 Services Hub</span>
                                    <ArrowRight size={12} />
                                  </Link>
                                  <Link
                                    href="/contact"
                                    onClick={() => {
                                      setServicesOpen(false);
                                      setIsHovered(false);
                                    }}
                                    className="inline-flex items-center gap-1 font-bold text-saas-cyan hover:underline group text-xs"
                                  >
                                    <span>Schedule Strategy Audit</span>
                                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>

                          <Link 
                            href="/our-work" 
                            className={cn(
                              "inline-flex items-center h-8 px-3.5 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap",
                              isLinkActive("/our-work")
                                ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.35)] dark:shadow-[0_0_15px_rgba(56,189,248,0.3)] font-bold"
                                : "text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent"
                            )}
                          >
                            Our Work
                          </Link>

                          {/* Blog Trigger with Dropdown */}
                          <div 
                            className="relative flex items-center h-9"
                            onMouseEnter={() => {
                              if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
                              setBlogOpen(true);
                            }}
                            onMouseLeave={() => setBlogOpen(false)}
                          >
                            <Link
                              href="/blog"
                              className={cn(
                                "inline-flex items-center h-8 gap-1.5 px-3.5 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer",
                                pathname.startsWith("/blog") || pathname.startsWith("/google-algorithm-updates") || blogOpen
                                  ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.35)] dark:shadow-[0_0_15px_rgba(56,189,248,0.3)] font-bold"
                                  : "text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent"
                              )}
                            >
                              <span>Blogs</span>
                              <ChevronDown 
                                size={14} 
                                className={cn(
                                  "transition-transform duration-200 opacity-80 shrink-0",
                                  blogOpen ? "rotate-180 opacity-100" : ""
                                )} 
                              />
                            </Link>

                            {/* Blog Dropdown with Glassmorphism */}
                            {blogOpen && (
                              <div 
                                onMouseEnter={() => {
                                  if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
                                  setIsHovered(true);
                                  setBlogOpen(true);
                                }}
                                className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+14px)] w-72 p-3 rounded-2xl border border-white/20 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 z-50 pointer-events-auto"
                                style={{
                                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(168, 85, 247, 0.12) 25%, rgba(18, 14, 32, 0.85) 100%)",
                                  boxShadow: "0 25px 70px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 25px rgba(168, 85, 247, 0.12)",
                                }}
                              >
                                <div className="flex flex-col gap-1.5">
                                  {blogNavItems.map((item, idx) => (
                                    <Link
                                      key={idx}
                                      href={item.href}
                                      onClick={() => {
                                        setBlogOpen(false);
                                        setIsHovered(false);
                                      }}
                                      className={cn(
                                        "group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all",
                                        pathname === item.href && "bg-white/5"
                                      )}
                                    >
                                      <div className="mt-0.5 w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-saas-cyan/50 transition-all">
                                        {item.icon}
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="text-xs font-bold text-zinc-100 group-hover:text-saas-cyan transition-colors">
                                          {item.title}
                                        </span>
                                        <span className="text-[11px] text-zinc-400 font-medium">
                                          {item.desc}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          <Link 
                            href="/contact" 
                            className={cn(
                              "inline-flex items-center h-8 px-3.5 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap",
                              isLinkActive("/contact")
                                ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.35)] dark:shadow-[0_0_15px_rgba(56,189,248,0.3)] font-bold"
                                : "text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent"
                            )}
                          >
                            Contact Us
                          </Link>
                        </nav>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3 shrink-0 h-9">
                          <div className="flex items-center justify-center h-9">
                            <div className="scale-90 flex items-center justify-center">
                              <ThemeToggle />
                            </div>
                          </div>
                          <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-4 h-8 bg-white text-black hover:bg-zinc-200 text-xs font-bold rounded-full transition-all whitespace-nowrap shadow-md hover:scale-105 leading-none"
                          >
                            Get Quote
                          </Link>
                        </div>
                      </motion.div>
                    )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================================== */}
      {/* MOBILE DRAWER (For small screens)                                  */}
      {/* ================================================================== */}
      {isOpen && (
        <div 
          data-lenis-prevent 
          data-mobile-drawer="true"
          className="fixed top-20 left-4 right-4 p-5 rounded-3xl border border-white/20 backdrop-blur-2xl flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4 duration-300 lg:hidden z-50 pointer-events-auto max-h-[80vh] overflow-y-auto"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(168, 85, 247, 0.14) 20%, rgba(18, 14, 32, 0.94) 100%)",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 35px rgba(168, 85, 247, 0.2)",
          }}
        >
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)} 
            className={cn(
              "text-sm font-bold py-2.5 px-3.5 rounded-xl transition-all",
              isLinkActive("/")
                ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                : "text-zinc-200 hover:text-white hover:bg-white/5"
            )}
          >
            Home
          </Link>

          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)} 
            className={cn(
              "text-sm font-bold py-2.5 px-3.5 rounded-xl transition-all",
              isLinkActive("/about")
                ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                : "text-zinc-200 hover:text-white hover:bg-white/5"
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
                  "flex-1 text-sm font-bold py-2.5 px-3.5 rounded-xl transition-all",
                  pathname.startsWith("/services")
                    ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "text-zinc-200 hover:text-white hover:bg-white/5"
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
                className="p-2 text-zinc-300 hover:text-white rounded-xl cursor-pointer"
                aria-label="Toggle services list"
              >
                <ChevronDown 
                  size={16} 
                  className={cn(
                    "transition-transform duration-200", 
                    mobileServicesOpen ? "rotate-180 text-saas-cyan" : ""
                  )} 
                />
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="flex flex-col gap-2 my-1 pl-1 pr-1 animate-in fade-in duration-200">
                <Link
                  href="/services"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="group flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-purple-500/20 via-saas-purple/20 to-saas-cyan/15 border border-white/20 hover:border-saas-cyan/50 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-saas-cyan/20 border border-saas-cyan/40 flex items-center justify-center text-saas-cyan shrink-0">
                      <Sparkles size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white group-hover:text-saas-cyan transition-colors">
                        View All 12 Services Hub
                      </span>
                      <span className="text-[10px] text-zinc-400">
                        Explore full digital growth matrix
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={13} className="text-saas-cyan group-hover:translate-x-0.5 transition-transform shrink-0" />
                </Link>

                <div className="grid grid-cols-1 gap-1.5">
                  {serviceCategories.map((category, catIdx) => (
                    <Link
                      key={catIdx}
                      href="/services"
                      onClick={() => {
                        setIsOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/40 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-bold text-zinc-200 group-hover:text-white">
                          {category.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-400/30">
                          {category.items.length} services
                        </span>
                      </div>
                      <ChevronRight size={13} className="text-zinc-400 group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/our-work" 
            onClick={() => setIsOpen(false)} 
            className={cn(
              "text-sm font-bold py-2.5 px-3.5 rounded-xl transition-all",
              isLinkActive("/our-work")
                ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                : "text-zinc-200 hover:text-white hover:bg-white/5"
            )}
          >
            Our Work
          </Link>

          {/* Mobile Blog Accordion */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex-1 text-sm font-bold py-2.5 px-3.5 rounded-xl transition-all",
                  pathname.startsWith("/blog") || pathname.startsWith("/google-algorithm-updates")
                    ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "text-zinc-200 hover:text-white hover:bg-white/5"
                )}
              >
                Blog
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileBlogOpen(!mobileBlogOpen);
                }}
                className="p-2 text-zinc-300 hover:text-white rounded-xl cursor-pointer"
                aria-label="Toggle blog list"
              >
                <ChevronDown 
                  size={16} 
                  className={cn(
                    "transition-transform duration-200", 
                    mobileBlogOpen ? "rotate-180 text-saas-cyan" : ""
                  )} 
                />
              </button>
            </div>

            {mobileBlogOpen && (
              <div className="flex flex-col gap-1.5 my-1 pl-1 pr-1 animate-in fade-in duration-200">
                {blogNavItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileBlogOpen(false);
                    }}
                    className={cn(
                      "group flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-saas-cyan/40 transition-all",
                      pathname === item.href && "bg-white/10 border-saas-cyan/40"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-saas-cyan shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-xs font-bold text-zinc-200 group-hover:text-white">
                        {item.title}
                      </span>
                    </div>
                    <ChevronRight size={13} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className={cn(
              "text-sm font-bold py-2.5 px-3.5 rounded-xl transition-all",
              isLinkActive("/contact")
                ? "text-white dark:text-saas-cyan bg-white/15 dark:bg-saas-cyan/15 border border-purple-300/40 dark:border-saas-cyan/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                : "text-zinc-200 hover:text-white hover:bg-white/5"
            )}
          >
            Contact Us
          </Link>

          <div className="h-px bg-white/15 my-1" />
          <div className="flex items-center justify-between py-1 px-1">
            <span className="text-xs font-bold text-zinc-300">Theme Mode</span>
            <ThemeToggle />
          </div>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="w-full text-center py-2.5 bg-white text-black hover:bg-zinc-200 text-xs font-bold rounded-full transition-all shadow-md mt-1"
          >
            Get Quote
          </Link>
        </div>
      )}
    </>
  );
}

// ============================================================================
// 2. CLASSIC NAVBAR (ORIGINAL FLOATING PILL IMPLEMENTATION - PRESERVED)
// To instantly restore this version, set `ENABLE_TECHINFINITY_HEADER = false` above.
// ============================================================================
function ClassicNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const blogDropdownRef = useRef<HTMLDivElement>(null);
  const blogCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current && 
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        blogDropdownRef.current && 
        !blogDropdownRef.current.contains(event.target as Node)
      ) {
        setBlogOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setBlogOpen(false);
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

  const handleBlogMouseEnter = () => {
    if (blogCloseTimeoutRef.current) {
      clearTimeout(blogCloseTimeoutRef.current);
      blogCloseTimeoutRef.current = null;
    }
    setBlogOpen(true);
  };

  const handleBlogMouseLeave = () => {
    blogCloseTimeoutRef.current = setTimeout(() => {
      setBlogOpen(false);
    }, 180);
  };

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
          <span className="font-sans font-extrabold text-sm sm:text-base tracking-tight text-purple-950 dark:text-white hidden lg:inline-block whitespace-nowrap">
            Quantum Reach{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
              Media
            </span>
          </span>
        </Link>

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

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+14px)] w-[820px] max-w-[90vw] p-6 rounded-3xl border border-purple-200/90 dark:border-white/15 bg-card/98 dark:bg-zinc-950/98 backdrop-blur-2xl shadow-[0_20px_60px_rgba(147,51,234,0.2)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.95)] animate-in fade-in zoom-in-95 duration-200 z-50 pointer-events-auto">
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
            href="/our-work" 
            className={cn(
              "text-xs lg:text-sm font-bold transition-all whitespace-nowrap px-3 py-1.5 rounded-full",
              isLinkActive("/our-work")
                ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
            )}
          >
            Our Work
          </Link>

          <div 
            ref={blogDropdownRef}
            className="relative"
            onMouseEnter={handleBlogMouseEnter}
            onMouseLeave={handleBlogMouseLeave}
          >
            <Link
              href="/blog"
              onClick={() => setBlogOpen(false)}
              className={cn(
                "inline-flex items-center gap-1.5 text-xs lg:text-sm font-bold transition-all py-1.5 px-3 rounded-full cursor-pointer whitespace-nowrap",
                pathname.startsWith("/blog") || pathname.startsWith("/google-algorithm-updates") || blogOpen
                  ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                  : "text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/5 border border-transparent"
              )}
            >
              <span>Blog</span>
              <ChevronDown 
                size={13} 
                className={cn(
                  "transition-transform duration-200",
                  blogOpen ? "rotate-180 text-purple-700 dark:text-saas-cyan" : ""
                )} 
              />
            </Link>

            {blogOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+14px)] w-72 p-3 rounded-2xl border border-purple-200/90 dark:border-white/15 bg-card/98 dark:bg-zinc-950/98 backdrop-blur-2xl shadow-[0_20px_50px_rgba(147,51,234,0.18)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.9)] animate-in fade-in zoom-in-95 duration-200 z-50 pointer-events-auto">
                <div className="flex flex-col gap-1.5">
                  {blogNavItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setBlogOpen(false)}
                      className={cn(
                        "group flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 dark:hover:bg-white/5 transition-all",
                        pathname === item.href && "bg-purple-50 dark:bg-white/5"
                      )}
                    >
                      <div className="mt-0.5 w-7 h-7 rounded-lg bg-purple-100 dark:bg-zinc-900 border border-purple-200/70 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-purple-400 dark:group-hover:border-saas-cyan/50 transition-all">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-purple-950 dark:text-zinc-100 group-hover:text-purple-700 dark:group-hover:text-saas-cyan transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-purple-900/70 dark:text-zinc-400 font-medium">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

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

        <div className="hidden md:flex items-center gap-2.5 sm:gap-3 shrink-0">
          <ThemeToggle />
          <Link 
            href="/contact" 
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-xs font-bold rounded-full transition-colors shadow-sm whitespace-nowrap"
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 rounded-full border border-purple-200 dark:border-white/10 text-purple-950 dark:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-all duration-300 pointer-events-auto"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

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
              href="/our-work" 
              onClick={() => setIsOpen(false)} 
              className={cn(
                "text-sm font-bold py-2 px-3 rounded-xl transition-all",
                isLinkActive("/our-work")
                  ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/30"
                  : "text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white"
              )}
            >
              Our Work
            </Link>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex-1 text-sm font-bold py-2 px-3 rounded-xl transition-all",
                    pathname.startsWith("/blog") || pathname.startsWith("/google-algorithm-updates")
                      ? "text-purple-700 dark:text-saas-cyan bg-purple-100/90 dark:bg-saas-cyan/15 border border-purple-300 dark:border-saas-cyan/30"
                      : "text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white"
                  )}
                >
                  Blog
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileBlogOpen(!mobileBlogOpen);
                  }}
                  className="p-2 text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white rounded-xl cursor-pointer"
                  aria-label="Toggle blog list"
                >
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "transition-transform duration-200", 
                      mobileBlogOpen ? "rotate-180 text-purple-700 dark:text-saas-cyan" : ""
                    )} 
                  />
                </button>
              </div>

              {mobileBlogOpen && (
                <div className="pl-3 pr-1 py-2 flex flex-col gap-1.5 my-1 border-l-2 border-purple-200 dark:border-white/10">
                  {blogNavItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileBlogOpen(false);
                      }}
                      className={cn(
                        "text-xs font-semibold py-1.5 px-2 rounded-lg flex items-center gap-2 transition-colors",
                        pathname === item.href
                          ? "text-purple-700 dark:text-saas-cyan font-bold bg-purple-100 dark:bg-white/10"
                          : "text-purple-950/70 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white"
                      )}
                    >
                      <div className="w-4 h-4 shrink-0">{item.icon}</div>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

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

// ============================================================================
// MAIN NAVBAR EXPORT
// Toggles between the techinfinity.io full-width dipped header and Classic header.
// ============================================================================
export function Navbar() {
  if (!ENABLE_TECHINFINITY_HEADER) {
    return <ClassicNavbar />;
  }
  return <TechInfinityHeader />;
}

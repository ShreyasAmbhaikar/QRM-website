"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/917738812028?text=Hello%20Quantum%20Reach%20Media%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20marketing%20and%20SEO%20services.";

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 pointer-events-auto select-none"
    >
      {/* Floating "Hi" Speech Bubble (Distinct, static - does not scale on hover) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        tabIndex={-1}
        className="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-zinc-900 shadow-[0_2px_10px_rgba(0,0,0,0.15)] border border-black/5 outline-none focus:outline-none focus:ring-0 ring-0 cursor-pointer"
      >
        {/* Online green pulsating indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
        </span>

        {/* Greeting text */}
        <span className="text-[11px] font-bold tracking-tight text-zinc-900">
          Hi
        </span>

        {/* Speech bubble pointer tail directed at WhatsApp button */}
        <span
          aria-hidden="true"
          className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-black/5"
        />
      </a>

      {/* Circular WhatsApp Button (Separate Component, Scales on Hover, No Click Border) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Quantum Reach Media on WhatsApp"
        className="relative flex items-center justify-center rounded-full outline-none focus:outline-none focus:ring-0 ring-0 active:outline-none cursor-pointer"
      >
        {/* Clean Expanding Radar Ripple Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none duration-1000" />

        {/* Core Official WhatsApp Button - Scales only itself on hover */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-black/25 hover:scale-110 active:scale-95 transition-transform duration-200 ease-out outline-none ring-0">
          <FaWhatsapp className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white" />
        </div>
      </a>
    </aside>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { DesktopSearch, MobileSearch } from './SearchBar';
import {
  DAY_TOUR_CATEGORIES,
  NILE_CRUISE_CATEGORIES,
} from '@/data/toursData';

// ─── Nav structure ────────────────────────────────────────────────────────────

type DropdownItem = { label: string; href: string; badge?: string };

type NavItem = {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
};

const NAV_ITEMS: NavItem[] = [
  {
    name: 'Destinations',
    href: '/destinations',
    dropdown: [
      { label: 'Cairo',        href: '/destinations' },
      { label: 'Luxor',        href: '/destinations' },
      { label: 'Aswan',        href: '/destinations' },
      { label: 'Alexandria',   href: '/destinations' },
      { label: 'Siwa Oasis',   href: '/destinations' },
      { label: 'Hurghada',     href: '/destinations' },
      { label: 'Dahab',        href: '/destinations' },
      { label: 'White Desert', href: '/destinations' },
    ],
  },
  {
    name: 'Tours',
    href: '/tours',
    dropdown: DAY_TOUR_CATEGORIES.map((c) => ({
      label: c.label,
      href: c.href === '#' ? '/tours' : c.href,
      badge: c.href === '#' ? 'Soon' : undefined,
    })),
  },
  {
    name: 'Tours Packages',
    href: '/tours-packages',
    dropdown: [
      { label: '2 Days',      href: '/tours-packages#duration-2' },
      { label: '3 Days',      href: '/tours-packages#duration-3' },
      { label: '4 Days',      href: '/tours-packages#duration-4' },
      { label: '5 Days',      href: '/tours-packages#duration-5' },
      { label: '6 Days',      href: '/tours-packages#duration-6' },
      { label: '7 Days',      href: '/tours-packages#duration-7' },
      { label: '8 Days',      href: '/tours-packages#duration-8' },
      { label: '9 Days',      href: '/tours-packages#duration-9' },
      { label: '10 Days',     href: '/tours-packages#duration-10' },
      { label: '11 Days',     href: '/tours-packages#duration-11' },
      { label: '12+ Days',    href: '/tours-packages#duration-12' },
      { label: 'Tailor-Made', href: '/tours-packages#tailor-made' },
    ],
  },
  {
    name: 'Nile Cruises',
    href: '/tours',
    dropdown: NILE_CRUISE_CATEGORIES.map((c) => ({
      label: c.label,
      href: c.href === '#' ? '/tours' : c.href,
      badge: c.href === '#' ? 'Soon' : undefined,
    })),
  },
  { name: 'Honeymoon', href: '/tours-packages' },
  { name: 'About',    href: '/about' },
  { name: 'Contact',  href: '#' },
];

// ─── Desktop Dropdown ─────────────────────────────────────────────────────────

function DesktopDropdown({ items }: { items: DropdownItem[] }) {
  // 2-column grid for destinations (8 items), single column otherwise
  const useGrid = items.length >= 6;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[9999]
                 bg-[#F3ECDA]/90 backdrop-blur-md
                 rounded-2xl shadow-2xl border border-navy/8
                 py-3 min-w-[180px]"
    >
      {/* Small arrow */}
      <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3
                      bg-[#F3ECDA]/90 border-l border-t border-navy/8
                      rotate-45" />

      <ul className={clsx(
        'px-2',
        useGrid && 'grid grid-cols-2 gap-x-1'
      )}>
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex items-center justify-between gap-2
                         px-4 py-2 rounded-xl text-sm font-medium
                         text-navy hover:bg-gold/20 hover:text-gold
                         transition-colors group whitespace-nowrap"
            >
              {item.label}
              {item.badge && (
                <span className="text-[10px] uppercase tracking-wider
                                 text-gold font-bold opacity-80">
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Desktop Nav Item ─────────────────────────────────────────────────────────

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  let closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className="text-navy hover:text-gold transition-colors font-medium text-sm tracking-wide"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <button
        className="flex items-center gap-1 text-navy hover:text-gold
                   transition-colors font-medium text-sm tracking-wide"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {item.name}
        <ChevronDown
          size={14}
          className={clsx(
            'transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {open && <DesktopDropdown items={item.dropdown} />}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className="text-navy text-lg font-medium hover:text-gold py-1"
        onClick={onNavigate}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div>
      {/* Row: name navigates, chevron toggles accordion */}
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className="text-navy text-lg font-medium hover:text-gold py-1 flex-1"
          onClick={onNavigate}
        >
          {item.name}
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          className="p-2 text-navy/60 hover:text-gold transition-colors"
          aria-expanded={open}
          aria-label={`Toggle ${item.name} submenu`}
        >
          <ChevronDown
            size={18}
            className={clsx(
              'transition-transform duration-200',
              open && 'rotate-180'
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden pl-4 border-l-2 border-gold/30 ml-1"
          >
            {item.dropdown.map((sub) => (
              <li key={sub.label}>
                <Link
                  href={sub.href}
                  className="flex items-center gap-2 py-1.5 text-navy/70
                             hover:text-gold text-sm font-medium transition-colors"
                  onClick={onNavigate}
                >
                  {sub.label}
                  {sub.badge && (
                    <span className="text-[10px] uppercase tracking-wider text-gold font-bold">
                      {sub.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled || isMobileMenuOpen
          ? 'bg-[#F3ECDA] shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src={isScrolled ? '/R Logo Icon.ico' : '/Logo.png'}
            alt="Rhala Logo"
            width={64}
            height={64}
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <DesktopNavItem key={item.name} item={item} />
          ))}
          <DesktopSearch />
          <a
            href="https://wa.me/+201557469694"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy px-6 py-2.5 rounded-full font-bold
                       text-sm tracking-wide hover:bg-gold/90 transition-transform
                       transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Start Journey
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#F3ECDA] z-50
                       shadow-lg md:hidden border-t border-navy/10
                       overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 80px)' }}
          >
            <div className="p-6 flex flex-col gap-3">
              {/* Search */}
              <MobileSearch onNavigate={closeMenu} />

              <div className="w-full h-px bg-navy/10 my-1" />

              {/* Nav links */}
              {NAV_ITEMS.map((item) => (
                <MobileNavItem key={item.name} item={item} onNavigate={closeMenu} />
              ))}

              <div className="w-full h-px bg-navy/10 my-1" />

              <a
                href="https://wa.me/+201557469694"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy w-full py-3 rounded-full
                           font-bold mt-1 text-center block"
                onClick={closeMenu}
              >
                Start Journey
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

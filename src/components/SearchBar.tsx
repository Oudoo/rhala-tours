'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { searchItems, type SearchResult } from '@/data/searchData';

// ─────────────────────────────────────────────────────────────────────────────
// Shared dropdown list (frosted glass, scrollable)
// ─────────────────────────────────────────────────────────────────────────────

function ResultDropdown({
  results,
  onSelect,
  className = '',
}: {
  results: SearchResult[];
  onSelect: () => void;
  className?: string;
}) {
  if (results.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={`
        bg-[#F3ECDA]/80 backdrop-blur-md
        rounded-2xl shadow-2xl border border-navy/8
        overflow-hidden
        ${className}
      `}
    >
      {/* Scrollable list — max 5 items visible before scroll kicks in */}
      <ul className="max-h-[15rem] overflow-y-auto overscroll-contain
                     scrollbar-thin scrollbar-thumb-gold/40 scrollbar-track-transparent">
        {results.map((result, i) => (
          <li key={`${result.href}-${i}`}>
            <Link
              href={result.href}
              onClick={onSelect}
              className="flex flex-col px-5 py-3.5
                         hover:bg-gold/15 transition-colors
                         border-b border-navy/5 last:border-0 group"
            >
              <span className="text-navy font-semibold text-sm leading-snug">
                {result.title}
              </span>
              <span className="text-gold text-xs font-medium mt-0.5">
                {result.subtitle}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Desktop variant — icon expands into input, dropdown floats below
// ─────────────────────────────────────────────────────────────────────────────

export function DesktopSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  }, []);

  useEffect(() => {
    setResults(searchItems(query));
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [close]);

  return (
    <div ref={containerRef} className="relative flex items-center">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="expanded"
            initial={{ width: 36, opacity: 0.6 }}
            animate={{ width: 220, opacity: 1 }}
            exit={{ width: 36, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center bg-white/60 backdrop-blur-sm
                       rounded-full border border-navy/15 shadow-sm
                       px-3.5 py-2 overflow-hidden"
          >
            <Search size={14} className="text-navy/40 shrink-0 mr-2" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && close()}
              placeholder="Search tours, destinations…"
              className="flex-1 bg-transparent text-navy text-sm
                         placeholder-navy/35 outline-none min-w-0"
            />
            <button
              onClick={query ? () => setQuery('') : close}
              className="ml-1.5 text-navy/35 hover:text-navy transition-colors shrink-0"
              aria-label={query ? 'Clear search' : 'Close search'}
            >
              <X size={13} />
            </button>
          </motion.div>
        ) : (
          <motion.button
            key="icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open search"
            className="w-9 h-9 flex items-center justify-center rounded-full
                       hover:bg-navy/8 transition-colors text-navy"
          >
            <Search size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating dropdown */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <div className="absolute top-full right-0 mt-2 w-[17rem] z-[9999]">
            <ResultDropdown results={results} onSelect={close} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Mobile variant — always-visible input inside the hamburger menu
// ─────────────────────────────────────────────────────────────────────────────

export function MobileSearch({ onNavigate }: { onNavigate?: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    setResults(searchItems(query));
  }, [query]);

  function handleSelect() {
    setQuery('');
    setResults([]);
    onNavigate?.();
  }

  return (
    <div className="w-full">
      {/* Input row */}
      <div className="relative flex items-center bg-white/50 backdrop-blur-sm
                      rounded-full px-4 py-2.5 border border-navy/10 shadow-sm">
        <Search size={15} className="text-navy/40 shrink-0 mr-2.5" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tours, destinations…"
          className="flex-1 bg-transparent text-navy text-sm
                     placeholder-navy/35 outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="ml-2 text-navy/35 hover:text-navy transition-colors"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Inline results */}
      <AnimatePresence>
        {results.length > 0 && (
          <div className="mt-2">
            <ResultDropdown results={results} onSelect={handleSelect} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Default export
export default function SearchBar({
  variant = 'desktop',
  onNavigate,
}: {
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
}) {
  if (variant === 'mobile') return <MobileSearch onNavigate={onNavigate} />;
  return <DesktopSearch />;
}

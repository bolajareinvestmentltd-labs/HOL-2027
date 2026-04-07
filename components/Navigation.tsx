'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">Kwara Ti Wa Ni</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/legacy" label="Legacy" />
            <NavLink href="/agenda" label="Agenda" />
            <NavLink href="/engage" label="Engage" />
            <NavLink href="/gallery" label="Gallery" />
            <NavLink href="/newsroom" label="Newsroom" />
            <NavLink href="/get-involved" label="Get Involved" />
            <NavLink href="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/about" label="About" />
            <MobileNavLink href="/legacy" label="Legacy" />
            <MobileNavLink href="/agenda" label="Agenda" />
            <MobileNavLink href="/engage" label="Engage" />
            <MobileNavLink href="/gallery" label="Gallery" />
            <MobileNavLink href="/newsroom" label="Newsroom" />
            <MobileNavLink href="/get-involved" label="Get Involved" />
            <MobileNavLink href="/contact" label="Contact" />
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition"
    >
      {label}
    </Link>
  );
}

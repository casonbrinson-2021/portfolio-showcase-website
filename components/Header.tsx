"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [menuOpen]);

    return (
        <header className="top-0 bg-background">
            <nav className="px-12 xl:px-24 py-6 flex items-center justify-between">
                <Link href="/" className="text-subheading font-baskerville">
                    Megan Joy Designs
                </Link>

                {/* Desktop only navigation */}
                <div className="hidden md:flex gap-6">
                    <Link
                        href="/gallery"
                        className="text-caption hover:opacity-60 transition-opacity"
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/about"
                        className="text-caption hover:opacity-60 transition-opacity"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-caption hover:opacity-60 transition-opacity"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden text-caption cursor-pointer hover:opacity-60 transition-opacity"
                    aria-label="Open menu"
                >
                    Menu
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    className={`fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 ${menuOpen ? "animate-fade-in" : "animate-fade-out"}`}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-1 right-4 text-5xl font-thin cursor-pointer"
                        aria-label="Close menu"
                    >
                        ×
                    </button>

                    <Link
                        href="/gallery"
                        onClick={() => setMenuOpen(false)}
                        className="text-subheading hover:opacity-60 transition-opacity"
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        className="text-subheading hover:opacity-60 transition-opacity"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="text-subheading hover:opacity-60 transition-opacity"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}

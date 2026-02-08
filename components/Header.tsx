"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon } from "./MenuIcon";

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
                    className="md:hidden text-caption hover:opacity-60 transition-opacity cursor-pointer"
                    aria-label="Open menu"
                >
                    <MenuIcon className="w-8 h-8 text-foreground" />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    z-100 fixed inset-0 bg-background flex flex-col items-center justify-center gap-12
                    transition-opacity duration-300 ease-in-out
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-1 right-4 text-5xl font-thin cursor-pointer text-foreground"
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

                <span className="h-px w-24 bg-foreground/10" />

                <div className="flex gap-8 items-center">
                    <a
                        href="https://www.facebook.com/megan.lee.5477272"
                        className="text-caption hover:opacity-60 transition-opacity"
                        target="_blank"
                    >
                        Facebook
                    </a>
                    <a
                        href="mailto:meganjoylee2000@gmail.com"
                        className="text-caption hover:opacity-60 transition-opacity"
                    >
                        Email
                    </a>
                </div>
            </div>
        </header>
    );
}

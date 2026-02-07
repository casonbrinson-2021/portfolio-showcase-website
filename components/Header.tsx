import Link from "next/link";

export default function Header() {
    return (
        <header className="top-0 bg-background">
            <nav className="px-12 xl:px-24 py-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-subheading"
                    style={{ fontFamily: '"Libre Baskerville", serif' }}
                >
                    Megan Joy Designs
                </Link>

                <div className="flex gap-6">
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
            </nav>
        </header>
    );
}

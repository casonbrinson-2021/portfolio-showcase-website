import Link from "next/link";

export default function Header() {
    return (
        <header className="top-0 bg-background">
            <nav className="px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-lg">
                    Megan
                </Link>

                <div className="flex gap-6">
                    <Link
                        href="/portfolio"
                        className="hover:opacity-60 text-sm"
                    >
                        Portfolio
                    </Link>
                    <Link href="/about" className="hover:opacity-60 text-sm">
                        About
                    </Link>
                    <Link href="/contact" className="hover:opacity-60 text-sm">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}

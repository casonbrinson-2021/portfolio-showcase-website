export default function Footer() {
    return (
        <footer className="">
            <div className="px-6 py-8 text-sm flex justify-between">
                <span>© {new Date().getFullYear()} Megan</span>

                <div className="flex gap-4">
                    <a
                        href="#"
                        className="hover:opacity-60"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a
                        href="mailto:hello@meganart.com"
                        className="hover:opacity-60"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

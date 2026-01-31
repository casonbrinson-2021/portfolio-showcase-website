export default function Footer() {
    return (
        <footer className="">
            <div className="px-24 py-6 text-sm flex justify-between">
                <span className="text-caption">
                    © {new Date().getFullYear()} Megan Joy Designs
                </span>

                <div className="flex gap-4">
                    <a
                        href="#"
                        className="text-caption hover:opacity-60 transition-opacity"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a
                        href="mailto:meganjoylee2000@gmail.com"
                        className="text-caption hover:opacity-60 transition-opacity"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

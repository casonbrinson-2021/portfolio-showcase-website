export default function Footer() {
    return (
        <footer className="">
            <div className="px-12 xl:px-24 py-6 text-sm flex justify-between">
                <div className="flex flex-col gap-4">
                    <span className="text-caption">With &lt;3 from NYC</span>
                    <span className="text-caption">
                        © {new Date().getFullYear()} Megan Joy Designs
                    </span>
                </div>

                <div className="flex items-end gap-4">
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

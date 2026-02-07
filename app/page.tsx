import Image from "next/image";
import RotatingArtwork from "@/components/ImageRotator";
import Link from "next/link";

//TODO:
// After everything is all polished come back and work on performance like
// maybe we dont need all the images loaded or even showing if th euser is
// at the top of the web page

export default function HomePage() {
    return (
        <>
            {/* Hero Image Section */}
            <section className="w-full flex mb-12">
                <div className="w-1/2">
                    <Image
                        src="/hero-1.jpeg"
                        alt="Hero Artwork 1"
                        width={2154}
                        height={3750}
                        sizes="50vw"
                        className="w-full h-auto"
                        priority
                    />
                </div>

                <div className="w-1/2">
                    <Image
                        src="/hero-2.jpeg"
                        alt="Hero Artwork 1"
                        width={2154}
                        height={3750}
                        sizes="50vw"
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </section>

            {/* Info section */}
            {/* Make the title above the other two elements */}
            <section className="w-full py-12 px-12 xl:px-24 flex justify-between gap-12 max-w-[1920px] mx-auto">
                <div className="w-1/2 flex flex-col gap-6">
                    <h1 className="text-heading">Art that Brings Joy</h1>
                    <p className="text-paragraph">
                        Original medium to large scale canvas paintings using
                        oil pastel and acrylic, known for their bold color
                        palettes and expressive forms. Each piece is designed to
                        bring energy, warmth, and a sense of joy into the spaces
                        they inhabit.
                    </p>
                    <p className="text-paragraph">
                        With experience creating work for a wide range of
                        clients, every painting is approached with intention and
                        curiosity—crafting pieces that feel both playful and
                        considered. This work is driven by a passion for making
                        art that sparks imagination, invites wonder, and
                        transforms a room through color and movement.
                    </p>
                    <p className="text-paragraph">Take a look around!</p>
                </div>

                {/* Image showcase */}
                {/* Add an on click that shows the words Gallery and then takes the user to the Gallery page */}
                <div className="flex w-1/2 items-center justify-end">
                    <RotatingArtwork
                        images={[
                            { src: "/art-1.jpeg", alt: "Artwork 1" },
                            { src: "/art-2.jpeg", alt: "Artwork 2" },
                            { src: "/art-3.jpeg", alt: "Artwork 3" },
                            { src: "/art-4.jpeg", alt: "Artwork 3" },
                            { src: "/art-5.jpeg", alt: "Artwork 3" },
                        ]}
                        intervalMs={5000}
                    />
                </div>
            </section>

            {/* Contact / Call to Action */}
            <section className="w-full py-12 px-12 xl:px-24 flex flex-col gap-6 max-w-[1920px] mx-auto">
                <h2 className="text-heading">Get in Touch</h2>
                <div className="flex justify-between items-center gap-12">
                    <p className="text-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris efficitur lectus sed turpis volutpat, nec
                        ultrices justo fermentum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris efficitur lectus sed
                        turpis volutpat, nec ultrices justo fermentum.
                    </p>
                    <Link
                        href="/contact"
                        className="px-6 py-3 min-w-[200px] bg-foreground text-paragraph text-background text-center hover:opacity-80 transition-opacity rounded-md cursor-pointer"
                    >
                        Contact
                    </Link>
                </div>
            </section>
        </>
    );
}

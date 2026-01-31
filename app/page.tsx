import Image from "next/image";
import RotatingArtwork from "@/components/ImageRotator";

export default function Home() {
    return (
        <>
            <section className="w-full flex mb-12">
                {/* Hero images */}
                <div className="w-1/2">
                    <Image
                        src="/hero-1.jpeg"
                        alt="Hero Artwork 1"
                        width={2154}
                        height={1723}
                        priority
                    />
                </div>

                <div className="w-1/2">
                    <Image
                        src="/hero-2.jpeg"
                        alt="Hero Artwork 1"
                        width={1064}
                        height={851}
                        priority
                    />
                </div>
            </section>

            <section className="w-full py-12 px-24 flex justify-between gap-12">
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
                <div className="flex w-1/2 items-center justify-center">
                    <RotatingArtwork
                        images={[
                            { src: "/art-1.jpeg", alt: "Artwork 1" },
                            { src: "/art-2.jpeg", alt: "Artwork 2" },
                            { src: "/art-3.jpeg", alt: "Artwork 3" },
                            { src: "/art-4.jpeg", alt: "Artwork 3" },
                            { src: "/art-5.jpeg", alt: "Artwork 3" },
                            { src: "/art-6.jpeg", alt: "Artwork 3" },
                        ]}
                        interval={5000}
                    />
                </div>
            </section>

            {/* Featured Artwork Grid */}
            <section className="mb-16">
                <h2 className="text-subheading mb-8 text-center">
                    Featured Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                </div>
            </section>

            {/* Contact / Call to Action */}
            <section className="text-center mb-16">
                <h2 className="text-subheading mb-4">Get in Touch</h2>
                <p className="text-paragraph mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris efficitur lectus sed turpis volutpat, nec ultrices
                    justo fermentum.
                </p>
                <button className="px-6 py-3 bg-foreground text-background hover:opacity-80 transition-opacity">
                    Contact Megan
                </button>
            </section>
        </>
    );
}

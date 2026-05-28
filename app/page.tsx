import Image from "next/image";
import RotatingArtwork from "@/components/ImageRotator";
import Link from "next/link";
import { featuredImages } from "@/data/featured";

//TODO:
// After everything is all polished come back and work on performance like
// maybe we dont need all the images loaded or even showing if th euser is
// at the top of the web page

export default function HomePage() {
    return (
        <>
            {/* Hero Image Section */}
            <section className="w-full flex">
                <div className="w-1/2">
                    <Image
                        src="/hero-4.jpeg"
                        alt="Hero Artwork 3"
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
            {/* TOOD: Make the title above the other two elements */}
            <section className="w-full py-12 px-6 md:px-12 xl:px-24 max-w-[1920px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                    {/* Text */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                        <h1 className="text-heading">Art that Brings Joy</h1>

                        <p className="text-paragraph">
                            Medium to large-scale original canvas paintings
                            created in New York City, known for their bold color
                            palettes and expressive forms. Each piece is
                            designed to bring energy, warmth, and a sense of joy
                            into the spaces they inhabit.
                        </p>

                        <p className="text-paragraph">
                            Every painting is approached with intention and
                            curiosity—crafting pieces that feel both playful and
                            considered. This work is driven by a passion for
                            making art that sparks imagination and transforms a
                            room through color and movement.
                        </p>

                        <p className="text-paragraph">Take a look around!</p>
                    </div>

                    {/* Image showcase */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <RotatingArtwork
                            images={featuredImages}
                            intervalMs={5000}
                        />
                    </div>
                </div>
            </section>

            {/* Contact / Call to Action */}
            {/* Maybe get rid of this and just have a contact button at the bottom on top of cool photos */}
            <section className="w-full py-12 px-12 xl:px-24 flex flex-col items-start lg:items-center lg:flex-row gap-6 max-w-[1920px] mx-auto">
                <div className="w-full flex flex-col text-left">
                    <h2 className="text-heading">Get in Touch</h2>
                </div>
                <Link
                    href="/contact"
                    className="px-6 py-3 min-w-[200px] bg-foreground text-paragraph text-background text-center hover:opacity-80 transition-opacity rounded-md cursor-pointer"
                >
                    Contact
                </Link>
            </section>

            {/* 
            <section className="w-full flex">
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
            </section> */}
        </>
    );
}

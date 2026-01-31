import Image from "next/image";
import RotatingArtwork from "@/components/ImageRotator";

//TODO:
// After everything is all polished come back and work on performance like
// maybe we dont need all the images loaded or even showing if th euser is
// at the top of the web page

export default function Home() {
    return (
        <>
            {/* Hero Image Section */}
            <section className="w-full flex mb-12">
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

            {/* Info section */}
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
                {/* Add an on click that shows the words Gallery and then takes the user to the Gallery page */}
                <div className="flex w-1/2 items-center justify-center">
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

            {/* Testimonials */}
            <section className="w-full py-12 px-24 flex flex-col gap-12">
                <h2 className="text-heading">What People Are Saying</h2>

                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    {/* Testimonial 1 */}
                    <div className="flex-1 bg-white shadow-md rounded-lg p-6">
                        <p className="text-paragraph italic">
                            "Megan’s artwork completely transformed my living
                            room. The colors are vibrant and her attention to
                            detail is incredible!"
                        </p>
                        <span className="text-caption mt-4 block text-right">
                            — Sarah L.
                        </span>
                        <span className="text-caption block text-right text-muted">
                            via Facebook Marketplace
                        </span>
                    </div>

                    {/* Testimonial 2 */}
                    {/* TODO: Make it so that the cards are always formatted the same (position of things) */}
                    <div className="flex-1 bg-white shadow-md rounded-lg p-6">
                        <p className="text-paragraph italic">
                            "A true talent! Every piece she creates brings joy
                            and energy into the space. Highly recommended for
                            anyone looking for impactful art."
                        </p>
                        <span className="text-caption mt-4 block text-right">
                            — Mark D.
                        </span>
                        <span className="text-caption block text-right text-muted">
                            via Private Commission
                        </span>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="flex-1 bg-white shadow-md rounded-lg p-6">
                        <p className="text-paragraph italic">
                            "Working with Megan was a dream. She captured
                            exactly what I was envisioning for my studio.
                            Stunning work!"
                        </p>
                        <span className="text-caption mt-4 block text-right">
                            — Emily R.
                        </span>
                        <span className="text-caption block text-right text-muted">
                            via Facebook Marketplace
                        </span>
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

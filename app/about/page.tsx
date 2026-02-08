import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="w-full py-12 px-12 xl:px-24 flex flex-col lg:flex-row gap-12 max-w-[1920px] mx-auto">
            {/* Text Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-heading">About Megan</h1>
                <p className="text-paragraph">
                    Megan is a passionate artist specializing in medium to large
                    scale canvas paintings using oil pastel and acrylic. Her
                    work is known for bold colors, expressive forms, and the
                    ability to fill a room with energy and joy.
                </p>
                <p className="text-paragraph">
                    Originally from Hong Kong and now based in New York, Megan
                    draws inspiration from her multicultural background and the
                    movement, rhythm, and creativity of city life. Her work
                    blends curiosity and intention, telling stories through
                    color, texture, and motion.
                </p>
                <p className="text-paragraph">
                    Over the years, Megan has created custom artworks for a wide
                    variety of clients, with each piece thoughtfully crafted to
                    reflect emotion, imagination, and a sense of place.
                </p>
            </div>

            {/* Image Column */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                <Image
                    src="/megan-1.jpeg"
                    alt="Megan Portrait"
                    width={1200}
                    height={1200}
                    className="w-full max-w-[600px] h-auto rounded-xl object-cover"
                    priority
                />
            </div>
        </section>
    );
}

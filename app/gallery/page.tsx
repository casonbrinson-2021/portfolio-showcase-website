import GalleryImage from "@/components/GalleryImage";

// List your gallery images here
const galleryImages = [
    { slug: "art-1", src: "/art-1.jpeg", alt: "Artwork 1" },
    { slug: "art-2", src: "/art-2.jpeg", alt: "Artwork 2" },
    { slug: "art-3", src: "/art-3.jpeg", alt: "Artwork 3" },
    { slug: "art-4", src: "/art-4.jpeg", alt: "Artwork 4" },
    { slug: "art-5", src: "/art-5.jpeg", alt: "Artwork 5" },
];

export default function GalleryPage() {
    return (
        <section className="w-full max-w-[2560px] mx-auto py-12 px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 gap-24">
                {galleryImages.map((image, index) => (
                    <GalleryImage
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        slug={image.slug}
                    />
                ))}
            </div>
        </section>
    );
}

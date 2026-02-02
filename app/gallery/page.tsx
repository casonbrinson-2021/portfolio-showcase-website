import GalleryImage from "@/components/GalleryImage";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
    return (
        <section className="w-full max-w-[2560px] mx-auto py-12 px-12 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 gap-12 xl:gap-24">
                {galleryImages.map((image, index) => (
                    <GalleryImage
                        key={index}
                        src={image.src}
                        slug={image.slug}
                        caption={image.caption}
                        alt={image.alt}
                    />
                ))}
            </div>
        </section>
    );
}

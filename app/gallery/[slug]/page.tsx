"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { galleryImages } from "@/data/gallery";

export default function GalleryDetailPage() {
    const params = useParams();
    const { slug } = params;

    const artwork = galleryImages.find((art) => art.slug === params.slug);
    if (!artwork) return <p>Artwork not found</p>;

    // folder location of the image
    const imageSrc = `/${slug}.jpeg`;

    // TODO: make it so that the image is no bigger than the screen size and doesnt warp when you change screen width
    return (
        <section className="w-full flex flex-col items-center justify-start py-12 px-12 xl:px-24 mx-auto gap-12">
            <div className="w-full flex justify-start items-center">
                <Link
                    href="/gallery"
                    className="text-foreground hover:underline"
                >
                    ← Back to Gallery
                </Link>
            </div>

            <div className="w-full max-w-[1200px]">
                <Image
                    src={imageSrc}
                    alt={`Artwork ${slug}`}
                    width={1200}
                    height={1200}
                    className="w-full h-auto rounded-lg"
                    priority
                />
                <div className="mt-6 text-caption">{artwork.caption}</div>
            </div>
        </section>
    );
}

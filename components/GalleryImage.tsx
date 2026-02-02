"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type GalleryImageProps = {
    src: string;
    slug: string;
    alt?: string;
};

export default function GalleryImage({ src, alt, slug }: GalleryImageProps) {
    const router = useRouter();
    return (
        <div
            className="relative w-full cursor-pointer overflow-hidden rounded-lg"
            onClick={() => router.push(`/gallery/${slug}`)}
        >
            <Image
                src={src}
                alt={alt ?? "Artwork"}
                width={1200}
                height={1200}
                className="w-full h-auto object-cover rounded-lg"
            />
        </div>
    );
}

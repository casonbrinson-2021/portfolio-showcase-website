"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function GalleryDetailPage() {
    const params = useParams();
    const { slug } = params;

    // You could map the slug to actual image paths if needed
    const imageSrc = `/${slug}.jpeg`; // adjust based on your folder structure

    console.log(slug);

    return (
        <section className="w-full flex flex-col items-center justify-start py-12 px-24 mx-auto gap-12">
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
            </div>
        </section>
    );
}

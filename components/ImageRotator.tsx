"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ImageRotatorProps = {
    images: {
        src: string;
        alt?: string;
    }[];
    intervalMs?: number; // milliseconds
};

export default function ImageRotator({
    images,
    intervalMs = 8000,
}: ImageRotatorProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, intervalMs);

        return () => clearInterval(timer);
    }, [currentIndex, images.length, intervalMs]);

    const currentImage = images[currentIndex];

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {/* Image + overlay */}
            <div className="relative group w-full max-w-[500px] rounded-xl overflow-hidden cursor-pointer">
                <Image
                    src={currentImage.src}
                    alt={currentImage.alt ?? "Artwork"}
                    width={1200}
                    height={1200}
                    priority
                    className="w-full h-auto"
                />

                {/* Hover overlay */}
                <Link
                    href="/gallery"
                    className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/70 group-hover:opacity-100"
                >
                    <span className="text-subheading tracking-wide">
                        View Gallery
                    </span>
                </Link>
            </div>

            {/* Dots */}
            <div className="flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Show image ${index + 1}`}
                        className={`h-2 w-2 rounded-full transition-all duration-500 cursor-pointer ${
                            index === currentIndex
                                ? "bg-black scale-160"
                                : "bg-black opacity-30 hover:opacity-50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

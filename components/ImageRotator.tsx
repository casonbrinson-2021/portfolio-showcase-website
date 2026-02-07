"use client";

import Image from "next/image";
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
            <div className="w-full max-w-[580px] h-auto rounded-xl overflow-hidden">
                <Image
                    src={currentImage.src}
                    alt={currentImage.alt ?? "Artwork"}
                    width={1200}
                    height={1200}
                    priority
                />
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

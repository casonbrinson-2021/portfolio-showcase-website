"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageRotatorProps = {
    images: {
        src: string;
        alt?: string;
    }[];
    interval?: number; // milliseconds
};

export default function ImageRotator({
    images,
    interval = 8000,
}: ImageRotatorProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const currentImage = images[currentIndex];

    return (
        <Image
            src={currentImage.src}
            alt={currentImage.alt ?? "Artwork"}
            width={1200}
            height={1200}
            className="w-full max-w-[480px] h-auto"
            priority
        />
    );
}

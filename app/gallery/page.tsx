"use client";

import GalleryImage from "@/components/GalleryImage";
import { galleryImages, GalleryImageType } from "@/data/gallery";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GalleryPage() {
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);
    const previouslyFocusedElement = useRef<HTMLElement | null>(null);

    const [activeImage, setActiveImage] = useState<null | GalleryImageType>(
        null,
    );
    const [isFullScreenViewerVisible, setIsFullScreenViewerVisible] =
        useState(false);

    const openFullScreenViewer = (image: GalleryImageType) => {
        setActiveImage(image);
        setIsFullScreenViewerVisible(false);
    };

    const closeFullScreenViewer = () => {
        setIsFullScreenViewerVisible(false);
        setTimeout(() => {
            setActiveImage(null);
        }, 300);
    };

    useEffect(() => {
        if (activeImage) {
            requestAnimationFrame(() => {
                setIsFullScreenViewerVisible(true);
            });
        }
    }, [activeImage]);

    useEffect(() => {
        if (activeImage) {
            const originalOverflow = document.body.style.overflow;
            console.log(originalOverflow);
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [activeImage]);

    useEffect(() => {
        if (!activeImage) return;

        // Save previously focused element
        previouslyFocusedElement.current =
            document.activeElement as HTMLElement;

        // Move focus into modal
        closeButtonRef.current?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeFullScreenViewer();
            }

            // Trap tab focus (single-focus-element version)
            if (e.key === "Tab") {
                e.preventDefault();
                closeButtonRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            previouslyFocusedElement.current?.focus();
        };
    }, [activeImage]);

    return (
        <>
            <section className="w-full max-w-[1920px] mx-auto py-12 px-12 xl:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 gap-12 xl:gap-24">
                    {galleryImages.map((image, index) => (
                        <GalleryImage
                            key={index}
                            src={image.src}
                            slug={image.slug}
                            caption={image.caption}
                            alt={image.alt}
                            onClick={() => openFullScreenViewer(image)}
                        />
                    ))}
                </div>
            </section>

            {/* Fullscreen Image Viewer */}
            {activeImage && (
                <div
                    className={`fixed inset-0 z-50 bg-background/95 flex items-center justify-center transition-all duration-500 ease-out ${isFullScreenViewerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                    <button
                        ref={closeButtonRef}
                        onClick={closeFullScreenViewer}
                        className="absolute top-6 right-8 text-foreground text-5xl font-thin z-50 hover:opacity-80 transition-opacity cursor-pointer"
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <Image
                        src={activeImage.src}
                        alt={activeImage.alt ?? "Artwork"}
                        width={1200}
                        height={1200}
                        sizes="90vw"
                        className="max-h-[90vh] w-[90vw] object-contain"
                        priority
                    />
                </div>
            )}
        </>
    );
}

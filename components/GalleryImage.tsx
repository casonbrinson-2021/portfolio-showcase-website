import Image from "next/image";
import Link from "next/link";

type GalleryImageProps = {
    src: string;
    slug: string;
    caption: string;
    alt?: string;
    onClick?: () => void;
};

export default function GalleryImage({
    src,
    slug,
    caption,
    alt,
    onClick,
}: GalleryImageProps) {
    return (
        <div
            className="relative w-full cursor-pointer overflow-hidden flex flex-col gap-6"
            onClick={onClick}
        >
            <Image
                src={src}
                alt={alt ?? "Artwork"}
                width={1200}
                height={1200}
                className="w-full h-auto object-cover rounded-lg"
            />
            <span className=" text-caption whitespace-pre">{caption}</span>
        </div>
    );
}

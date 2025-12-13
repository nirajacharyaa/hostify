/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no other unique things to use as index> */
"use client";
import { Rotate3DIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 ">
      <div className="relative w-full h-80 md:h-100 overflow-hidden rounded-md shadow-sm">
        <Image
          src={selectedImage}
          alt="Property Main View"
          fill
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-4 h-28">
        {images.slice(1, 4).map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`relative rounded-md overflow-hidden cursor-pointer h-full border-2 ${
              selectedImage === img ? "border-orange-500" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              fill
            />
          </div>
        ))}
        <div className="relative rounded-md overflow-hidden cursor-pointer h-full group">
          <Image
            src={images[4] || images[0]}
            alt="360 degree view"
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            fill
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/20 text-white p-2 rounded-full border border-white/50">
              <Rotate3DIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

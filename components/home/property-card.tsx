import { Ear, Heart, StarIcon } from "lucide-react";
import Image from "next/image";
import type { Property } from "@/schemas/property";
import { Button } from "../ui/button";

const PropertyCard = ({
  name,
  location,
  price,
  averageRating,
  superhost,
  image,
}: Property) => {
  return (
    <div className="bg-white border-subtle-border rounded-xl border overflow-hidden">
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
          priority={false}
        />

        <div className="absolute top-3 left-3 flex space-x-2 z-10">
          {superhost && (
            <span className="inline-flex items-center rounded-full bg-white  p-1.5 text-xs font-semibold text-accent-orange">
              <Ear className="size-4" />
              Superhost
            </span>
          )}
        </div>
        <Button
          size="icon"
          className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm rounded-full z-10 shadow-md hover:bg-white"
        >
          <Heart className="size-5 text-gray-800" />
        </Button>
      </div>

      <div className="p-4 flex flex-col space-y-1">
        <div className="flex justify-between items-start">
          <h2 className="text-base font-semibold text-t-dark leading-tight pr-4">
            {name}
          </h2>
          <div className="flex items-center text-sm font-semibold shrink-0">
            <StarIcon
              className="size-4 text-yellow-500 mr-1"
              fill="currentColor"
            />
            {averageRating}
          </div>
        </div>

        <p className="text-light-text text-sm tex truncate">{location}</p>
        <p className="pt-2 text-t-dark font-bold text-base">
          ${price} <span className="font-normal text-light-text">/night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;

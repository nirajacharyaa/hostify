import { Ear, Heart, StarIcon } from "lucide-react";
import Image from "next/image";
import type { Property } from "@/schemas/property";
import { Button } from "../ui/button";

const HorizontalPropertyCard = ({
  name,
  location,
  price,
  averageRating,
  superhost,
  image,
}: Property) => {
  return (
    <div className="flex max-w-3xl w-full bg-white rounded-xl border border-subtle-border overflow-hidden">
      <div className="relative w-48 sm:w-56 md:w-64 aspect-4/3 shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, 256px"
          className="object-cover"
        />

        {superhost && (
          <div className="absolute top-3 left-3 flex space-x-2 z-10">
            <span className="inline-flex items-center rounded-full bg-white  p-1.5 text-xs font-semibold text-accent-orange">
              <Ear className="size-4" />
              Superhost
            </span>
          </div>
        )}

        <Button
          size="icon"
          className="absolute top-3 right-3 bg-white rounded-full shadow-md"
        >
          <Heart className="size-5 text-gray-800" />
        </Button>
      </div>

      <div className="flex flex-col justify-between p-4 flex-1">
        <div className="space-y-1">
          <div className="flex justify-between items-start">
            <h2 className="text-base font-semibold text-t-dark leading-tight pr-4">
              {name}
            </h2>

            <div className="flex items-center text-sm font-semibold text-gray-800">
              <StarIcon className="size-4 text-yellow-500 mr-1" />
              {averageRating}
            </div>
          </div>

          <p className="text-sm text-light-text">{location}</p>
        </div>

        <div className="pt-3 flex justify-between items-end">
          <p className="text-gray-800 font-bold text-base">
            ${price} <span className="font-normal text-gray-500">/night</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPropertyCard;

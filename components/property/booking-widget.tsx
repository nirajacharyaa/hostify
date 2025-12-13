import { Heart, Star, Award, TrendingUp, Ear } from "lucide-react";
import type { Property } from "@/schemas/property";
import { Button } from "../ui/button";

interface BookingWidgetProps {
  property: Property;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ property }) => {
  return (
    <div className="flex flex-col h-full border border-subtle-border rounded-xl p-6">
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {property.name}
            </h1>
            <p className="text-gray-600 font-medium">{property.location}</p>
          </div>
          <button
            type="button"
            className={`p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-500`}
          >
            <Heart className={`size-6`} />
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="font-bold text-sm">{property.numberOfReviews}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-sm text-blue-500 underline cursor-pointer hover:text-blue-600">
            {property.averageRating} Reviews
          </span>
        </div>

        <div className="mt-6 text-gray-700 leading-relaxed text-sm lg:text-base">
          {property.detail}
        </div>
      </div>

      <div className="bg-white p-0 md:p-0 rounded-xl mb-8">
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold text-gray-900">
            ${property.price}
          </span>
          <span className="text-gray-500 ml-1">/night</span>

          <div className="ml-auto flex items-center text-orange-500 text-sm font-medium">
            <TrendingUp className="w-4 h-4 mr-1" />
            Best time to Book
          </div>
        </div>

        <Button className="w-full bg-accent-orange text-white font-semibold py-4! h-auto!">
          Book this home
        </Button>
      </div>

      <div className="border-t pt-6 mt-auto">
        <span className="text-gray-500 text-sm">Hosted by:</span>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-semibold text-gray-900">
                {property.hostName}
              </h3>
              <p className="text-xs text-gray-500">
                Joined in{" "}
                {new Date().toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          {property.superhost && (
            <span className="inline-flex items-center rounded-full bg-accent-orange/10 p-1.5 text-xs font-semibold text-accent-orange">
              <Ear className="size-4" />
              Superhost
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;

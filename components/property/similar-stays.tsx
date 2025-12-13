import type { Property } from "@/schemas/property";
import HorizontalPropertyCard from "../home/proterty-card-horizontal";
import Link from "next/link";

const SimilarStays = ({ properties }: { properties: Property[] }) => {
  return (
    <div className="py-12 border-t mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Similar stays</h2>
        <Link href="/" className="text-orange-500 font-medium hover:underline">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <HorizontalPropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default SimilarStays;

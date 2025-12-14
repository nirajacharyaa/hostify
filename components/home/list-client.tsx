"use client";
import { useState } from "react";
import type { Property } from "@/schemas/property";
import { TabsContent } from "../ui/tabs";
import PropertyCard from "./property-card";
import HorizontalPropertyCard from "./proterty-card-horizontal";
import { Button } from "../ui/button";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const ListClient = ({
  initialProperties,
}: {
  initialProperties: Property[];
}) => {
  const [page, setPage] = useState(1);
  const [properties, setProperties] = useState(initialProperties);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleFetchProperties = async () => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/api/properties?page=${page + 1}`);
    const json = await response.json();

    if (!response.ok) {
      console.log(err);
    }

    setProperties((prev) => {
      return [...prev, ...json.data];
    });
    setPage(page + 1);
    setHasNextPage(json.pagination.hasNextPage);
    setLoading(false);
  };
  return (
    <div>
      <TabsContent value="grid">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 2xl:grid-cols-4">
          {properties?.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="list">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {properties?.map((property) => (
            <HorizontalPropertyCard key={property.id} {...property} />
          ))}
        </div>
      </TabsContent>
      {hasNextPage && (
        <div className="flex justify-center">
          <Button
            className="my-8 text-accent-orange border border-accent-orange! bg-white! h-auto! px-6! rounded! hover:text-accent-orange"
            variant="outline"
            disabled={loading}
            onClick={handleFetchProperties}
          >
            See More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListClient;

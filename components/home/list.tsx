import { Grid2X2, List } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProperties } from "@/lib/api";
import PropertyCard from "./property-card";
import HorizontalPropertyCard from "./proterty-card-horizontal";
import ListClient from "./list-client";

const ProductList = async () => {
  const properties = await getProperties();

  console.log(properties);

  if (!properties.success) {
    throw new Error(properties.message);
  }

  return (
    <section className="container mx-auto my-12">
      <Tabs defaultValue="grid" className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">
            Stats Nearby: <span className="font-semibold">Ontario</span>
          </h2>

          <TabsList className="p-1.5">
            <TabsTrigger
              value="grid"
              className="aspect-square py-3.5!  data-[state=active]:bg-accent-orange! data-[state=active]:text-white!"
            >
              <Grid2X2 />
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="aspect-square py-3.5! data-[state=active]:bg-accent-orange! data-[state=active]:text-white!"
            >
              <List />
            </TabsTrigger>
          </TabsList>
        </div>
        <ListClient initialProperties={properties.data.data} />
      </Tabs>
    </section>
  );
};

export default ProductList;

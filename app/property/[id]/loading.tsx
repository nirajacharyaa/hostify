import { Skeleton } from "@/components/ui/skeleton";

const PropertyPageLoader = () => {
  return (
    <section>
      <div className="container mx-auto py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-4">
            <Skeleton className="w-full h-100 rounded-lg" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="w-full h-30 rounded-lg" />
              <Skeleton className="w-full h-30 rounded-lg" />
              <Skeleton className="w-full h-30 rounded-lg" />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <Skeleton className="w-full h-75 rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-4">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-4">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <Skeleton className="w-full h-75 rounded-lg" />
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="w-full h-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Skeleton className="w-full h-62.5 rounded-lg" />
            <Skeleton className="w-full h-62.5 rounded-lg" />
            <Skeleton className="w-full h-62.5 rounded-lg" />
            <Skeleton className="w-full h-62.5 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyPageLoader;

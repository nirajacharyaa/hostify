import { Skeleton } from "@/components/ui/skeleton";

const ListSkeleton = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {[...Array(8)].map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <hello>
          <div key={index} className="space-y-3">
            <Skeleton className="w-full h-55 rounded-lg" />
            <div className="space-y-2 px-1">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSkeleton;

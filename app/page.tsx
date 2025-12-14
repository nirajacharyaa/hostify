import Hero from "@/components/home/hero";
import ProductList from "@/components/home/list";
import ListSkeleton from "@/components/home/list-skeleton";
import AppFooter from "@/components/home/top-footer";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<ListSkeleton />}>
        <ProductList />
      </Suspense>
      <AppFooter />
    </main>
  );
}

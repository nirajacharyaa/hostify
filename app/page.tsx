import { Suspense } from "react";
import ProductList from "@/components/home/list";
import ListSkeleton from "@/components/home/list-skeleton";
import ErrorBoundary from "@/components/error/ErrorBoundary";
import AppFooter from "@/components/home/top-footer";
import Hero from "@/components/home/hero";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main>
      <Hero />
      <ErrorBoundary>
        <Suspense fallback={<ListSkeleton />}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
      <AppFooter />
    </main>
  );
}

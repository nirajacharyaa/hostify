import Hero from "@/components/home/hero";
import ProductList from "@/components/home/list";
import AppFooter from "@/components/home/top-footer";
import { getProperties } from "@/lib/api";

export default async function Home() {
  const p = await getProperties();

  console.log(p);
  if (!p) return null;
  return (
    <main>
      <Hero />
      <ProductList />
      <AppFooter />
    </main>
  );
}

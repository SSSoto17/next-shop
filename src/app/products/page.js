"use client";

import useSWR from "swr";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/ProductGrid";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main className="auto-rows-min">
      <PageHeader pageTitle="All products">
        <button>Filter</button>
        <form action="">
          <input type="text" placeholder="Search..." />
        </form>
      </PageHeader>
      <ProductGrid data={data.products} />
    </main>
  );
}

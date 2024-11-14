"use client";

import useSWR from "swr";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/products/ProductGrid";
import { useState } from "react";
import BasketSidebar from "@/components/BasketSidebar";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );

  const [basketItems, setBasketItems] = useState([]);

  function addToBasket(event, thumbnail, brand, title, price) {
    const newItem = {
      id: event,
      img: thumbnail,
      brand: brand,
      title: title,
      price: price,
    };
    setBasketItems([newItem, ...basketItems]);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main className="auto-rows-min">
      <PageHeader pageTitle="All products">
        <button>Filter</button>
        <form action="">
          <input type="text" placeholder="Search..." />
        </form>
        <Link
          href={
            "/checkout?items" +
            JSON.stringify(
              basketItems.map((item) => {
                return { id: item.id };
              })
            )
          }
        >
          Go to checkout
        </Link>
      </PageHeader>
      <ProductGrid data={data.products} addToBasket={addToBasket} />
      <BasketSidebar basketItems={basketItems} />
    </main>
  );
}

"use client";

import useSWR from "swr";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const fetcher = (url) => fetch(url).then((r) => r.json());

import PageHeader from "@/components/PageHeader";
import Loading from "@/components/global/Loading";
import BrowseProducts from "@/components/products/BrowseProducts";
import ProductGrid from "@/components/products/ProductGrid";
import BasketSidebar from "@/components/checkout/BasketSidebar";
import ButtonCTA from "@/components/ButtonCTA";
import Button from "@/components/Button";
import LoadMore from "@/components/products/LoadMore";

export default function Products() {
  // USE STATES
  const [loadLimit, setLoadLimit] = useState("20");
  const [basketItems, setBasketItems] = useState([]);
  const [filter, setFilter] = useState([{ type: "", title: "" }]);

  // SEARCH PARAMS
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  // DYNAMIC API URL
  let URL = q
    ? `https://dummyjson.com/products/search?q=${q}&limit=${loadLimit}`
    : `https://dummyjson.com/products?limit=${loadLimit}`;

  // FETCH DATA
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error)
    return (
      <main className="grid-rows-[auto_1fr]">
        <PageHeader pageTitle="Browse our selection">
          <BrowseProducts />
        </PageHeader>
        <Loading variant="error" />
      </main>
    );
  if (isLoading)
    return (
      <main className="grid-rows-[auto_1fr]">
        <PageHeader pageTitle="Browse our selection">
          <BrowseProducts />
        </PageHeader>
        <Loading variant="loading" />
      </main>
    );

  console.log(data.limit);

  // ADD TO BASKET
  function addToBasket(id, thumbnail, brand, title, price, discountPercentage) {
    // If the basket icon already exists, add +1 to its amount.
    const existingItemIndex = basketItems.findIndex((item) => item.id === id);
    if (existingItemIndex >= 0) {
      const newList = [...basketItems];
      newList[existingItemIndex].quantity++;
      setBasketItems(newList);
    } else {
      // Else, add a new item to the array
      const newItem = {
        id: id,
        thumbnail: thumbnail,
        brand: brand,
        title: title,
        price: price,
        quantity: 1,
        discountPercentage: discountPercentage,
      };
      setBasketItems([newItem, ...basketItems]);
    }
  }

  // DELETE FROM BASKET
  function deleteFromBasket(id) {
    setBasketItems(basketItems.filter((item) => item.id !== id));
  }

  // function saveBasket() {
  //   localStorage.setItem("basket", JSON.stringify(basketItems));
  // }

  // FILTER
  const filterOptions = [
    {
      id: 1,
      title: "Brand",
      options: [
        ...new Set(
          data.products.map((product) => {
            return product.brand;
          })
        ),
      ].filter((e) => {
        return e;
      }),
    },
    {
      id: 2,
      title: "Category",
      options: [
        ...new Set(
          data.products.map((product) => {
            return product.category;
          })
        ),
      ].filter((e) => {
        return e;
      }),
    },
    { id: 3, title: "Rating", options: [1, 2, 3, 4, 5] },
  ];

  function filterProducts(type, title) {
    return data.products.filter((item) => {
      item.type === title;
    });
  }

  console.log(data.total > loadLimit);

  return (
    <main className="grid-rows-[auto_1fr] gap-y-8">
      <PageHeader pageTitle="Browse our selection">
        <BrowseProducts
        // filterOptions={filterOptions}
        // filter={filter}
        // setFilter={setFilter}
        />
        <article className="flex justify-between items-end">
          <p>{data.total} products</p>
          {q && (
            <p>
              Search: <em>"{q}"</em>
            </p>
          )}
          <p>Viewing {data.limit} products</p>
        </article>
      </PageHeader>

      <ProductGrid data={data.products} addToBasket={addToBasket} />
      {data.total > loadLimit && (
        <LoadMore {...data} setLoadLimit={setLoadLimit} />
      )}
      {/* <BasketSidebar
        basketItems={basketItems}
        deleteFromBasket={deleteFromBasket}
      /> */}
    </main>
  );
}

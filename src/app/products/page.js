"use client";

import useSWR from "swr";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/products/ProductGrid";
import { useState } from "react";
import BasketSidebar from "@/components/checkout/BasketSidebar";
import BrowseProducts from "@/components/products/BrowseProducts";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );

  const [basketItems, setBasketItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function addToBasket(id, thumbnail, brand, title, price) {
    // If the basket icon already exists, add +1 to its amount.
    const existingItemIndex = basketItems.findIndex((item) => item.id === id);
    if (existingItemIndex >= 0) {
      const newList = [...basketItems];
      newList[existingItemIndex].amount++;
      setBasketItems(newList);
    } else {
      // Else, add a new item to the array
      const newItem = {
        id: id,
        thumbnail: thumbnail,
        brand: brand,
        title: title,
        price: price,
        amount: 1,
      };
      setBasketItems([newItem, ...basketItems]);
    }
  }

  const deleteFromBasket = (id) => {
    setBasketItems(basketItems.filter((item) => item.id !== id));
  };

  function searchProducts(event) {
    event.preventDefault();
    const formData = new formData(event.target);
    // console.log("formData: ", formData.get("searchQuery"));
    // const searchQuery = formData.get("query");
    // setSearchInput(searchQuery);
  }

  // function saveBasket() {
  //   localStorage.setItem("basket", JSON.stringify(basketItems));
  // }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main>
      <PageHeader pageTitle="All products">
        <BrowseProducts searchProducts={searchProducts} />
      </PageHeader>
      <ProductGrid
        data={
          searchInput.length > 0
            ? data.products.filter((item) =>
                item.title.toLowerCase().includes(searchInput.toLowerCase())
              )
            : data.products
        }
        addToBasket={addToBasket}
      />
      <BasketSidebar
        basketItems={basketItems}
        deleteFromBasket={deleteFromBasket}
      />
    </main>
  );
}

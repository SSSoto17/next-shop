"use client";

import useSWR from "swr";
import { useState } from "react";

import PageHeader from "@/components/PageHeader";
import BrowseProducts from "@/components/products/BrowseProducts";
import ProductGrid from "@/components/products/ProductGrid";
import BasketSidebar from "@/components/checkout/BasketSidebar";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );

  // USE STATES
  const [basketItems, setBasketItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState([{ type: "", title: "" }]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

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

  // SEARCH
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

  return (
    <main>
      <PageHeader pageTitle="All products">
        <BrowseProducts
          searchProducts={searchProducts}
          filterOptions={filterOptions}
          filter={filter}
          setFilter={setFilter}
        />
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

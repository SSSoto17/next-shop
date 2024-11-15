"use client";

import { useState } from "react";
import Link from "next/link";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { SlArrowUp } from "react-icons/sl";
import { ProductBasketCard } from "@/components/checkout/ProductBasketCard";
import ButtonCTA from "../ButtonCTA";

const BasketSidebar = ({ basketItems, deleteFromBasket }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [didTimeoutPass, setTimeoutPass] = useState(false);

  const handlePopup = () => {
    if (isPopupOpen) {
      setTimeoutPass(false);
    } else {
      setTimeout(() => setTimeoutPass(true), 500);
    }
    setIsPopupOpen(!isPopupOpen);
  };

  console.log("basketItems: ", basketItems);

  const totalItemsInBasket = basketItems.reduce(
    (accumilator, item) => accumilator + item.amount,
    0
  );

  // Adds the sums of all the items in the basket, to a total sum
  const totalAmountSum = basketItems.reduce(
    (accumilator, item) => accumilator + item.price * item.amount,
    0
  );

  return (
    <section
      className={`${
        isPopupOpen ? "h-screen" : "h-14"
      } w-screen fixed z-20 bottom-0 bg-main-background transition-all duration-500`}
    >
      {/* <ProductBasket basketItems={itemsFromBasket} /> */}
      {/* <PriceTotal
        subTotal={subTotalRounded}
        discount="-10.99"
        priceTotal="19.97"
      /> */}
      <div className="max-w-[1200px] mx-auto">
        <div
          className="p-4 flex justify-between border-b-2 border-silver-chalice-900 cursor-pointer"
          onClick={handlePopup}
        >
          <div className="flex items-center gap-2">
            <div className="relative mr-4">
              <HiOutlineShoppingBag size="24px" />
              <p
                className={`${
                  totalItemsInBasket <= 0 ? "hidden" : "inline-block"
                } px-2 py-0.5 pb-1 absolute -top-2 -right-4 bg-apple-700 text-silver-chalice-50 rounded-md text-xs`}
              >
                {totalItemsInBasket}
              </p>
            </div>
            <div className="w-0.5 h-3/4 bg-silver-chalice-900 rounded-full"></div>
            <h3>My Basket</h3>
          </div>
          {!isPopupOpen ? (
            <SlArrowUp size="16px" className="mr-1.5" />
          ) : (
            <IoCloseOutline size="24px" />
          )}
        </div>

        <div className="h-screen relative p-4">
          <ul className="max-h-full pb-32 overflow-y-scroll">
            {basketItems?.map((item) => {
              return (
                <ProductBasketCard
                  key={item.id}
                  onDelete={() => deleteFromBasket(item.id)}
                  {...item}
                />
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className={`${
          didTimeoutPass ? "inline-block" : "hidden"
        } w-full absolute bottom-0 left-0 p-8 bg-main-background drop-shadow-main overflow-x-clip`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between">
            <p>Total:</p>
            <p className="font-bold">{totalAmountSum.toFixed(2)} kr.</p>
          </div>
          <Link
            href={
              "/checkout?items=" +
              JSON.stringify(
                basketItems.map((item) => {
                  return { id: item.id };
                })
              )
            }
          >
            <ButtonCTA label="Go to checkout" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BasketSidebar;

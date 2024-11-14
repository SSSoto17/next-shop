"use client";

import { useState } from "react";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { SlArrowUp } from "react-icons/sl";
import { ProductCard } from "./ProductCard";
import ProductBasket from "./ProductBasket";

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
            <HiOutlineShoppingBag size="24px" />
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
                <BasketCard
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
          <button>Pay now</button>
        </div>
      </div>
    </section>
  );
};

export default BasketSidebar;

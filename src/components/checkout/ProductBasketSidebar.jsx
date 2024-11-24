"use client";

import { useProductBasket } from "@/store/basketStore";

import ProductBasket from "./ProductBasket";
import PriceTotal from "./PriceTotal";

export default function ProductBasketSidebar() {
  const displayBasket = useProductBasket((state) => state.displayBasket);
  return (
    <aside
      className={`${
        displayBasket ? "h-screen" : "h-14"
      } bg-main-background grid grid-cols-main [&>*]:col-start-2 [&>*]:col-span-1 place-content-start w-screen md:max-w-sm fixed z-20 bottom-0 md:right-0 md:drop-shadow-main transition-[height] md:transition-[transform] duration-500`}
    >
      <section>
        <ProductBasket />
        <PriceTotal
          // subTotal={subTotal.toFixed(2)}
          // discount={discountTotal.toFixed(2)}
          priceTotal="19.97"
          // href={
          //   "/checkout?items=" +
          //   JSON.stringify(
          //     basketItems.map((item) => {
          //       return { id: item.id };
          //     })
          //   )
          // }
          href="/"
          label="Go to Checkout"
        />
      </section>
    </aside>
  );
}

// import { useState } from "react";
// import Link from "next/link";

// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { IoCloseOutline } from "react-icons/io5";
// import { SlArrowUp } from "react-icons/sl";
// import { ProductBasketCard } from "@/components/checkout/ProductBasketCard";
// import ButtonCTA from "../ButtonCTA";
// import PriceTotal from "./PriceTotal";
// import ProductBasket from "./ProductBasket";
// import BagIcon from "./BagIcon";

// const BasketSidebar = ({ basketItems, deleteFromBasket }) => {
//   const [popup, setPopup] = useState(false);
//   const [didTimeoutPass, setTimeoutPass] = useState(false);

//   const handlePopup = () => {
//     if (popup) {
//       setTimeoutPass(false);
//     } else {
//       setTimeout(() => setTimeoutPass(true), 500);
//     }
//     setPopup(!popup);
//   };

//   function loadBasket() {
//     useEffect(() => {
//       const savedBasket = JSON.parse(localStorage.getItem("basket"));
//       if (savedBasket) {
//         [savedBasket, ...basketItems];
//       }
//     }, []);
//   }

//   TOTAL QUANTITY OF ITEMS

//   const quantityTotal = basketItems.reduce(
//     (accumilator, item) => accumilator + item.quantity,
//     0
//   );

//   TOTAL PRICE BEFORE DISCOUNT
//   const subTotal = basketItems.reduce(
//     (accumulator, item) => accumulator + item.price * item.quantity,
//     0
//   );

//   TOTAL DISCOUNT
//   const discountTotal = basketItems.reduce(
//     (accumulator, item) => accumulator + item.discountPercentage,
//     0
//   );

//   TOTAL PRICE AFTER DISCOUNT

//   return (
//     <section
//       className={`${
//         popup ? "h-screen" : "h-14 md:h-screen md:translate-x-1/2"
//       } grid grid-cols-main [&>*]:col-start-2 [&>*]:col-span-1 place-content-start w-screen md:max-w-sm fixed z-20 bottom-0 md:right-0 md:drop-shadow-main bg-main-background transition-[height] md:transition-[transform] duration-500`}
//     >
//       <header
//         className="cursor-pointer h-14 py-4 flex gap-6 items-center relative border-b-2 border-silver-chalice-600"
//         onClick={handlePopup}
//       >
//         <BagIcon quantityTotal={quantityTotal} />
//         <h3 className="border-l-2 border-silver-chalice-800 pl-2">My Basket</h3>
//         {!popup ? (
//           <SlArrowUp size="16px" className="absolute right-0" />
//         ) : (
//           <IoCloseOutline size="24px" className="absolute right-0" />
//         )}
//       </header>
//       <ProductBasket
//         basketItems={basketItems}
//         deleteFromBasket={deleteFromBasket}
//       />
//       <div className="max-w-[1200px] mx-auto">
//       <div
//           className="p-4 flex justify-between border-b-2 border-silver-chalice-900 cursor-pointer"
//           onClick={handlePopup}
//         >
//           <div className="flex items-center gap-2">
//             <div className="relative mr-4">
//               <HiOutlineShoppingBag size="24px" />
//               <p
//                 className={`${
//                   !quantityTotal && "hidden"
//                 } px-2 py-0.5 pb-1 absolute -top-2 -right-4 bg-apple-700 text-silver-chalice-50 rounded-md text-xs`}
//               >
//                 {quantityTotal}
//               </p>
//             </div>
//             <div className="w-0.5 h-3/4 bg-silver-chalice-900 rounded-full"></div>
//             <h3>My Basket</h3>
//           </div>
//           {!popup ? (
//             <SlArrowUp size="16px" className="mr-1.5" />
//           ) : (
//             <IoCloseOutline size="24px" />
//           )}
//         </div>

//       <div className="h-screen relative p-4">
//           <ul className="max-h-full pb-32 overflow-y-scroll">
//             {basketItems?.map((item) => {
//               return (
//                 <ProductBasketCard
//                   key={item.id}
//                   onDelete={() => deleteFromBasket(item.id)}
//                   {...item}
//                 />
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//       <PriceTotal
//         subTotal={subTotal.toFixed(2)}
//         discount={discountTotal.toFixed(2)}
//         priceTotal="19.97"
//         href={
//           "/checkout?items=" +
//           JSON.stringify(
//             basketItems.map((item) => {
//               return { id: item.id };
//             })
//           )
//         }
//         label="Go to Checkout"
//       />

//       <div
//         className={`${
//           didTimeoutPass ? "inline-block" : "hidden"
//         } w-full absolute bottom-0 left-0 p-8 bg-main-background drop-shadow-main overflow-x-clip`}
//       >
//         <div className="max-w-[1200px] mx-auto">
//           <div className="flex justify-between">
//             <p>Total:</p>
//             <p className="font-bold">{totalAmountSum.toFixed(2)}$</p>
//           </div>
//           <Link
//             href={
//               "/checkout?items=" +
//               JSON.stringify(
//                 basketItems.map((item) => {
//                   return { id: item.id };
//                 })
//               )
//             }
//           >
//             <ButtonCTA label="Go to checkout" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

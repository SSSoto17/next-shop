import { useState } from "react";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { SlArrowUp } from "react-icons/sl";

const BasketSidebar = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <section
      className={`${
        openPopup ? "h-screen" : "h-14"
      } w-screen fixed bottom-0 bg-main-background transition-all duration-500`}
    >
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
          {!openPopup ? (
            <SlArrowUp size="16px" className="mr-1.5" />
          ) : (
            <IoCloseOutline size="24px" />
          )}
        </div>

        <div className="p-4">
          <ul>
            <li>Product</li>
            <li>Product</li>
            <li>Product</li>
          </ul>
          <footer>
            <p>Subtotal: (price)</p>
            <p>Total savings: (discount)</p>
            <p>Total: (price - discount)</p>
            <button>Pay now</button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default BasketSidebar;

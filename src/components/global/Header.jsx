"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import MobileNavIcon from "./mobile/MobileNavIcon";
import MobileNav from "./mobile/MobileNav";

import { useProductBasket } from "@/store/basketStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleProductBasket = useProductBasket(
    (state) => state.toggleProductBasket
  );

  return (
    <header className="py-4 bg-main-background drop-shadow-main z-10 overflow-x-clip">
      <nav className="flex justify-between items-center">
        <ul className="hidden md:inline-flex md:gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>

        <Link href="/" className="text-xl font-bold uppercase">
          Logo
        </Link>

        <ul className="flex gap-4 md:justify-self-end">
          <li>
            <button onClick={() => toggleProductBasket()}>
              <HiOutlineShoppingBag className="text-2xl md:text-3xl" />
            </button>
          </li>
          <li>
            <MobileNavIcon setIsOpen={setIsOpen} isOpen={isOpen} />
          </li>
        </ul>
      </nav>

      <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
};

export default Header;

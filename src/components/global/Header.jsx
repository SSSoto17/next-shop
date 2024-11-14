"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import MobileNavIcon from "./mobile/MobileNavIcon";
import MobileNav from "./mobile/MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  return (
    <header className="py-4 bg-main-background drop-shadow-main z-10 overflow-x-clip">
      <nav className="flex justify-between items-center">
        <menu className="hidden md:inline-flex md:gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </menu>

        <Link href="/" className="text-xl font-bold uppercase">
          Logo
        </Link>

        <menu className="flex gap-4 md:justify-self-end">
          <button>
            <HiOutlineShoppingBag className="text-2xl md:text-3xl" />
          </button>
          <MobileNavIcon setIsOpen={setIsOpen} isOpen={isOpen} />
        </menu>
      </nav>

      <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
};

export default Header;

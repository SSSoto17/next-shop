"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import MobileNavIcon from "./MobileNavIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  return (
    <header className="py-4 bg-main-background drop-shadow-main transition-all duration-500 z-10">
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

      <nav
        className={`w-screen h-screen absolute z-10 top-0 left-[-16px] bg-silver-chalice-100 grid items-center justify-around transition-all duration-500 ease-in-out ${
          isOpen ? "left-0" : "left-full"
        }`}
      >
        <menu>
          <li>
            <Link href="/">Logo</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;

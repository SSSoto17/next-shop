"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { BurgerMenu } from "./BurgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
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
            <HiOutlineShoppingCart className="text-2xl md:text-3xl" />
          </button>
          <button onClick={handleClick} className="z-20 md:hidden">
            <span
              className={`bg-silver-chalice-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${
                  isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
                }`}
            ></span>

            <span
              className={`bg-silver-chalice-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm my-1 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
            ></span>

            <span
              className={`bg-silver-chalice-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
                }`}
            ></span>
          </button>
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

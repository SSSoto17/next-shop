"use client";

import Link from "next/link";

import { useState } from "react";
import { useProductBasket } from "@/store/basketStore";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleProductBasket = useProductBasket(
    (state) => state.toggleProductBasket
  );

  function mobileBasketHandler() {
    isOpen && setIsOpen(!isOpen);
    toggleProductBasket();
  }

  return (
    <header className="py-4 bg-main-background drop-shadow-main z-20 overflow-x-clip">
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

        <ul className="flex gap-4 md:justify-self-end z-50">
          <li>
            <button onClick={() => mobileBasketHandler()}>
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
}

export const MobileNav = ({ setIsOpen, isOpen }) => {
  const classes = `col-start-1 col-span-3 w-screen h-screen absolute top-0 bg-silver-chalice-100 drop-shadow-main grid items-center justify-around transition-[left] duration-500 ease-in-out ${
    isOpen ? "left-0" : "left-full"
  }`;
  return (
    <nav className={classes}>
      <menu className="text-2xl">
        <li>
          <Link
            href="/"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Products
          </Link>
        </li>
      </menu>
    </nav>
  );
};

export const MobileNavIcon = ({ setIsOpen, isOpen }) => {
  const role = {
    top: `transition-[transform] ${
      isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
    }`,
    middle: `transition-[opacity] my-1 ${isOpen ? "opacity-0" : "opacity-100"}`,
    bottom: `transition-[transform] ${
      isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
    }`,
  };

  function setClasses(role) {
    return (
      "bg-silver-chalice-900 block duration-300 ease-out h-0.5 w-6 rounded-sm " +
      role
    );
  }

  return (
    <button
      aria-label="Navigation"
      className="md:hidden"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span className={setClasses(role.top)}></span>
      <span className={setClasses(role.middle)}></span>
      <span className={setClasses(role.bottom)}></span>
    </button>
  );
};

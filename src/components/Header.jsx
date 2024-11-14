"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { BurgerMenu } from "./BurgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className={`py-2 bg-main-background drop-shadow-main transition-all duration-500`}>
      <nav className="flex justify-between">
        <div className="flex gap-6">
          <Link href="/">Logo</Link>
          <div className="hidden md:inline-flex md:gap-6">
            <Link href="/">Home</Link>
            <Link href="/">Products</Link>
          </div>
        </div>

        <menu className="flex gap-4 md:justify-self-end">
          <button>
            <HiOutlineShoppingCart size="24px" />
          </button>
          <button onClick={handleClick} className="z-20 md:hidden">
            <span  className={`bg-silver-chalice-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${isOpen ? 
                'rotate-45 translate-y-1.5' : '-translate-y-0.5'
                }`}>
            </span>
            
            <span className={`bg-silver-chalice-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm my-1 ${isOpen ? 
                'opacity-0' : 'opacity-100'
                }`} >
            </span>

            <span className={`bg-silver-chalice-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${isOpen ? 
                '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
                }`} >
            </span>
          </button>
        </menu>
      </nav>
      
      <div className={`w-screen h-screen absolute z-10 top-0 left-[-16px] bg-silver-chalice-100 flex flex-col items-center justify-around transition-all duration-500 ease-in-out ${isOpen ? 'left-0' : 'left-full'}`}>
            <Link href="/">Logo</Link>
            <Link href="/">Home</Link>
            <Link href="/">Products</Link>
          </div>
    </header>
  );
};

export default Header;

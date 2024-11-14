"use client";

import Link from "next/link"

export const BurgerMenu = () => {
    return (
    <nav className="w-screen h-screen bg-red-400">
        <menu className="w-screen h-screen flex flex-col absolute top-0 z-10">
            <Link href="/">Logo</Link>

            <Link href="/">Home</Link>
            <Link href="/">Products</Link>
        </menu>
    </nav>
    )
}
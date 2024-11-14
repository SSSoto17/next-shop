import Link from "next/link";

Link;

const MobileNav = ({ setIsOpen, isOpen }) => {
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

export default MobileNav;

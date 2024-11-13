import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { VscMenu } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="py-2 bg-main-background drop-shadow-main">
      <ul className="flex justify-between">
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          <menu className="flex gap-4">
            <li>
              <button>
                <HiOutlineShoppingCart size="24px" />
              </button>
            </li>
            <li>
              <button>
                <VscMenu size="24px" />
              </button>
            </li>
          </menu>
        </li>
      </ul>
    </header>
  );
};

export default Header;

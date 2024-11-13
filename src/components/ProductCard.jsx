import Link from "next/link";
import Image from "next/image";
import { MdOutlineShoppingBag } from "react-icons/md";

const Card = ({ title, brand, price, thumbnail }) => {
  return (
    <Link href="/">
      <article className="rounded-xl drop-shadow-main bg-silver-chalice-50">
        {/* <Image src={thumbnail} alt={title} width="200" height="500" /> */}
        <header className="py-2 px-3">
          <h3 className="text-xs text-silver-chalice-600">{brand}</h3>
          <h4 className="md:text-lg font-normal">{title}</h4>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold">{price}</p>
            <button className="bg-silver-chalice-200 p-2 rounded-lg">
              <MdOutlineShoppingBag size="16" />
            </button>
          </div>
        </header>
      </article>
    </Link>
  );
};

export default Card;

import Link from "next/link";
import Image from "next/image";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useProductBasket } from "@/store/basketStore";

const Card = ({
  product,
  id,
  title,
  brand,
  price,
  thumbnail,
  discountPercentage,
}) => {
  const addToBasket = useProductBasket((state) => state.addToBasket);

  return (
    <article className="rounded-xl drop-shadow-main bg-silver-chalice-50">
      <div
        className={`${
          discountPercentage >= 15 ? "inline-block" : "hidden"
        } absolute w-fit py-2 px-4 -ml-2 top-6 bg-tabasco-800 rounded-lg`}
      >
        <p className="text-silver-chalice-50 font-bold">
          -{discountPercentage.toFixed(0)}%
        </p>
      </div>

      <Image src={thumbnail} alt={title} width="500" height="500" />
      <header className="py-2 px-3">
        <h3 className="text-xs text-silver-chalice-600">{brand}</h3>
        <h4 className="md:text-lg font-normal">
          <Link
            href={`/product/${id}`}
            className="after:absolute after:inset-0"
          >
            {title}
          </Link>
        </h4>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${price}</p>
          <button
            className="bg-silver-chalice-200 p-2 rounded-lg z-50"
            onClick={() => addToBasket(product)}
          >
            <MdOutlineShoppingBag size="16" />
          </button>
        </div>
      </header>
    </article>
  );
};

export default Card;

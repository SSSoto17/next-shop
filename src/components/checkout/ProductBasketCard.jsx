import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";

export const ProductBasketCard = ({ thumbnail, brand, title, price }) => {
  return (
    <li className="max-h-32">
      <article className="flex gap-4">
        <Image
          className="rounded-lg"
          src={thumbnail}
          alt={title}
          width={120}
          height={120}
        />
        <section className="flex flex-col grow justify-between relative">
          <header>
            <h3 className="text-xs text-silver-chalice-600">{brand}</h3>
            <h4 className="md:text-lg font-normal">{title}</h4>
          </header>
          <p className="font-bold place-self-end cursor-default">{price}</p>
          <button className="absolute right-0">
            <IoCloseOutline
              size="24px"
              className="translate-x-2 translate-y-[-8px]"
            />
          </button>
        </section>
      </article>
    </li>
  );
};

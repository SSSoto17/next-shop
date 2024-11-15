import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";

export const ProductBasketCard = ({
  thumbnail,
  brand,
  title,
  price,
  amount,
  onDelete,
}) => {
  return (
    <li className="h-full mb-4 pb-4 flex justify-between border-b-2">
      <header className="flex gap-4">
        <Image
          className="rounded-lg"
          src={thumbnail}
          alt={title}
          width={120}
          height={120}
        />
        <div className="flex flex-col justify-between h-full flex-wrap">
          <div>
            <h3 className="text-xs text-silver-chalice-600">{brand}</h3>
            <h4 className="md:text-lg font-normal">{title}</h4>
          </div>
          <h4 className="md:text-lg font-normal flex items-center">
            <IoCloseOutline size="18px" />
            {amount}
          </h4>
        </div>
      </header>

      <div className="flex flex-col justify-between items-end">
        <button onClick={onDelete}>
          <IoCloseOutline size="32px" />
        </button>
        <p className="font-bold">{price * amount} kr.</p>
      </div>
    </li>
  );
};

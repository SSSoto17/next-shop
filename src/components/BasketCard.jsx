import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";

export const BasketCard = ({ img, brand, title, price }) => {
  return (
    <li className="h-[100px] mb-6 flex justify-between">
      <div className="flex gap-4">
        <Image
          className="rounded-lg"
          src={img}
          alt={title}
          width={100}
          height={100}
        />
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xs text-silver-chalice-600">{brand}</h3>
            <h4 className="md:text-lg font-normal">{title}</h4>
          </div>
          <h4 className="md:text-lg font-normal flex items-center">
            <IoCloseOutline size="18px" />1
          </h4>
        </div>
      </div>

      <div className="h-full flex flex-col justify-between">
        <div>
          <IoCloseOutline size="32px" />
        </div>
        <p className="font-bold">{price}</p>
      </div>
    </li>
  );
};

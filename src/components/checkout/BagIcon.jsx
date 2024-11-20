import { HiOutlineShoppingBag } from "react-icons/hi2";

const BagIcon = ({ quantityTotal }) => {
  return (
    <div className="relative inline-block">
      <HiOutlineShoppingBag size="24px" />
      <p
        className={`${
          !quantityTotal && "hidden"
        } px-2 py-0.5 pb-1 absolute -top-2 -right-4 bg-apple-700 text-silver-chalice-50 rounded-md text-xs`}
      >
        {quantityTotal}
      </p>
    </div>
  );
};

export default BagIcon;

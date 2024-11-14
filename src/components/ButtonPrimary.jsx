import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const ButtonPrimary = ({ url, label, icon }) => {
  return (
    <Link
      href={url}
      className="uppercase tracking-wide py-1 flex gap-2 align-middle"
    >
      {label}
      {icon && <IoIosArrowRoundForward size="24px" />}
    </Link>
  );
};

export default ButtonPrimary;

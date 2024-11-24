import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const variants = {
  primary:
    "bg-silver-chalice-200 border w-fit py-2 px-8 text-md rounded-lg hover:bg-silver-chalice-100 hover:border-silver-chalice-200",
  secondary: "uppercase tracking-wide py-1 flex gap-2 align-middle",
};

const Button = ({ url, label, icon, variant }) => {
  return (
    <Link href={url} className={variants[variant]}>
      {label}
      {icon && <IoIosArrowRoundForward size="24px" />}
    </Link>
  );
};

export default Button;

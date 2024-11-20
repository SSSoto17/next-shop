import Link from "next/link";

const ButtonCTA = ({ label, href, clickEvent }) => {
  return (
    <Link href={href} className="block max-w-xs w-full place-self-center ">
      <button
        onClick={clickEvent}
        className="w-full bg-apple-600 text-silver-chalice-50 text-lg font-semibold uppercase p-2 rounded-lg"
      >
        {label}
      </button>
    </Link>
  );
};

export default ButtonCTA;

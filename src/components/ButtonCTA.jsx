const ButtonCTA = ({ label, clickEvent }) => {
  return (
    <button
      onClick={clickEvent}
      className="block w-full max-w-xs bg-apple-600 text-silver-chalice-50 text-lg font-semibold uppercase p-2 place-self-center rounded-lg"
    >
      {label}
    </button>
  );
};

export default ButtonCTA;

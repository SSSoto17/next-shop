const MobileNavIcon = ({ setIsOpen, isOpen }) => {
  const role = {
    top: `transition-[transform] ${
      isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
    }`,
    middle: `transition-[opacity] my-1 ${isOpen ? "opacity-0" : "opacity-100"}`,
    bottom: `transition-[transform] ${
      isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
    }`,
  };

  function setClasses(role) {
    return (
      "bg-silver-chalice-900 block duration-300 ease-out h-0.5 w-6 rounded-sm " +
      role
    );
  }

  return (
    <button
      aria-label="Navigation"
      className="z-20 md:hidden"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span className={setClasses(role.top)}></span>
      <span className={setClasses(role.middle)}></span>
      <span className={setClasses(role.bottom)}></span>
    </button>
  );
};

export default MobileNavIcon;

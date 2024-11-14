import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({ question, answer, isOpen, setIsOpen, item }) => {
  return (
    <li className="border-b-2">
      <header className=" py-2 ">
        <button
          onClick={() => {
            isOpen === item ? setIsOpen(0) : setIsOpen(item);
          }}
          className="flex justify-between items-center w-full"
        >
          <span className="font-semibold">{question}</span>
          <span>{isOpen === item ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>
      </header>

      {isOpen === item && (
        <section className="pb-2">
          <p>{answer}</p>
        </section>
      )}
    </li>
  );
};

export default Accordion;

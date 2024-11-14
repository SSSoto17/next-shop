"use client";
import { useState } from "react";

import Accordion from "./Accordion";

const MoreInfo = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <ul>
      <Accordion isOpen={isOpen} setIsOpen={setIsOpen} item={1} question="Products details" answer="Is it me you are looking for? "></Accordion>
      <Accordion isOpen={isOpen} setIsOpen={setIsOpen} item={2} question="Reviews" answer="Oranges are usually orange. But some might be yellow."></Accordion>
    </ul>
  );
};

export default MoreInfo;

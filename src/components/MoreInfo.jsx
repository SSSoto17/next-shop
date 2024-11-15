"use client";
import { useState } from "react";

import Accordion from "./Accordion";
import ReviewCard from "./ReviewCard";

const MoreInfo = ({ product }) => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <ul>
      <Accordion isOpen={isOpen} setIsOpen={setIsOpen} item={1} question="Reviews">
        {product.reviews.map((review) => {
          return (
            <li>
              <ReviewCard data={review}></ReviewCard>
            </li>
          );
        })}
      </Accordion>
      <Accordion isOpen={isOpen} setIsOpen={setIsOpen} item={2} question="Return policy">
        <p>{product.returnPolicy}</p>
      </Accordion>
    </ul>
  );
};

export default MoreInfo;

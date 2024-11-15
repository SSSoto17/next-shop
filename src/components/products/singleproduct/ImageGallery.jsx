"use client";

import { useState } from "react";
import Image from "next/image";

const ImageGallery = ({ product }) => {
  const [seletedIndex, setSelectedIndex] = useState(0);

  return (
    <section>
      <Image
        src={product.images[seletedIndex]}
        alt={product.title}
        width="500"
        height="500"
      />
      <ul className="flex row">
        {product.images.map((image, i) => {
          return (
            <li
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="cursor-pointer"
            >
              <Image
                src={image}
                alt={"product image"}
                width="100"
                height="100"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ImageGallery;

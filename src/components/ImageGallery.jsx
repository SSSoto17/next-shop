import Image from "next/image";

const ImageGallery = ({ product }) => {
  console.log(product.images);
  return (
    <section>
      <Image src={product.thumbnail} alt={product.title} width="500" height="500" />
      <ul className="flex row">
        {product.images.map((image) => {
          return (
            <li key={product.id}>
              <Image src={image} alt="product image" width="100" height="100" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ImageGallery;

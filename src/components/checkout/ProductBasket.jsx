import { ProductCard } from "./ProductCard";

ProductCard;

const ProductBasket = ({ basketItems }) => {
  return (
    <ul className="grid gap-4 py-6">
      {basketItems.length > 0 ? (
        basketItems.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })
      ) : (
        <p className="font-light place-self-center">No items in basket.</p>
      )}
    </ul>
  );
};

export default ProductBasket;

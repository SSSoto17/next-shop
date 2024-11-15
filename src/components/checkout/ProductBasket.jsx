import { ProductBasketCard } from "./ProductBasketCard";

const ProductBasket = ({ basketItems }) => {
  return (
    <ul className="grid gap-4 py-6">
      {basketItems.length > 0 ? (
        basketItems.map((product) => {
          return <ProductBasketCard key={product.id} {...product} />;
        })
      ) : (
        <p className="font-light place-self-center">No items in basket.</p>
      )}
    </ul>
  );
};

export default ProductBasket;

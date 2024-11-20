import { ProductBasketCard } from "./ProductBasketCard";

const ProductBasket = ({ basketItems, deleteFromBasket }) => {
  return (
    <ul className="grid gap-4 py-6 overflow-y-scroll">
      {basketItems.length > 0 ? (
        basketItems.map((product) => {
          console.log(product.discountPercentage);
          return (
            <ProductBasketCard
              key={product.id}
              onDelete={() => deleteFromBasket(product.id)}
              {...product}
            />
          );
        })
      ) : (
        <p className="font-light place-self-center">No items in basket.</p>
      )}
    </ul>
  );
};

export default ProductBasket;

import { ProductBasketCard } from "./ProductBasketCard";
import { useProductBasket } from "@/store/basketStore";

const ProductBasket = () => {
  const productBasket = useProductBasket((state) => state.productBasket);

  return (
    <ul className="grid gap-4 py-6">
      {productBasket.length > 0 ? (
        productBasket.map((product) => {
          return <ProductBasketCard key={product.id} {...product} />;
        })
      ) : (
        <p className="font-light place-self-center">No items in basket.</p>
      )}
    </ul>
  );
};

export default ProductBasket;

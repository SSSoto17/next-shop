import ProductCard from "./ProductCard";

const ProductGrid = ({ data, addToBasket }) => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
      {data.map((product) => {
        return (
          <ProductCard
            key={product.id}
            {...product}
            addToBasket={addToBasket}
          />
        );
      })}
    </section>
  );
};

export default ProductGrid;

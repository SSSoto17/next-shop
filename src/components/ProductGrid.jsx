import ProductCard from "./ProductCard";

const ProductGrid = ({ data }) => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4">
      {data.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </section>
  );
};

export default ProductGrid;

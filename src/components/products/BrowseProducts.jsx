import Filter from "./Filter";
import Search from "./Search";

const BrowseProducts = ({ searchProducts, filterOptions }) => {
  return (
    <section className="flex flex-wrap justify-between">
      <Search searchProducts={searchProducts} />
      <Filter filterOptions={filterOptions} />
    </section>
  );
};

export default BrowseProducts;

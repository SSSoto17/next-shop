import Filter from "./Fillter";
import Search from "./Search";

const BrowseProducts = ({ searchProducts }) => {
  return (
    <section className="flex flex-wrap justify-between">
      <Search searchProducts={searchProducts} />
      <Filter />
    </section>
  );
};

export default BrowseProducts;

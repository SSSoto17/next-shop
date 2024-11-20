import Filter from "./Filter";
import Search from "./Search";

const BrowseProducts = ({
  searchProducts,
  filterOptions,
  filter,
  setFilter,
}) => {
  return (
    <section className="flex flex-wrap justify-between">
      <Search searchProducts={searchProducts} />
      {/* <Filter
        filterOptions={filterOptions}
        filter={filter}
        setFilter={setFilter}
      /> */}
    </section>
  );
};

export default BrowseProducts;

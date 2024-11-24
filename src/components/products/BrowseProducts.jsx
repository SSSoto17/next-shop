import Filter from "./Filter";
import Search from "./Search";

const BrowseProducts = ({ filterOptions, filter, setFilter }) => {
  return (
    <search className="flex flex-wrap justify-between">
      <Search />
      {/* <Filter
        filterOptions={filterOptions}
        filter={filter}
        setFilter={setFilter}
      /> */}
    </search>
  );
};

export default BrowseProducts;

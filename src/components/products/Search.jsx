import { MdOutlineSearch } from "react-icons/md";

const Search = ({ searchProducts }) => {
  return (
    <form
      role="search"
      className="flex items-center h-full px-4 py-2 bg-silver-chalice-200 rounded-lg"
      onSubmit={searchProducts}
    >
      <input
        className="bg-transparent"
        type="text"
        placeholder="Search..."
        name="searchQuery"
        // value={searchInput}
        // onInput={(e) => setSearchInput(e.currentTarget.value)}
      />
      <button aria-label="Search">
        <MdOutlineSearch size="18" />
      </button>
    </form>
  );
};

export default Search;

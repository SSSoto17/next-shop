import { MdOutlineSearch } from "react-icons/md";

const Search = () => {
  return (
    <form
      action="./products/"
      className="flex items-center h-full px-4 py-2 bg-silver-chalice-200 border has-[:focus]:border-silver-chalice-300 rounded-lg"
    >
      <input
        type="search"
        name="q"
        placeholder="Search..."
        className="bg-transparent"
      />
      <button aria-label="Search">
        <MdOutlineSearch size="18" />
      </button>
    </form>
  );
};

export default Search;

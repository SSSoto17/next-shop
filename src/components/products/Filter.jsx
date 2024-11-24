import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Filter = ({ filterOptions, filter, setFilter }) => {
  const { data } = useSWR("https://dummyjson.com/products/categories", fetcher);
  return (
    <form
      action="./products/"
      className="grid sm:grid-cols-3 gap-4 min-w-72 [&>*]:min-w-48"
    >
      <select
        name="category"
        // onChange={}
        className="bg-silver-chalice-200 rounded-lg px-4 py-2 w-full flex justify-between cursor-pointer"
      >
        <option className="capitalize appearance-none" value="">
          Category
        </option>
        {data.map((cat) => {
          return (
            <option className="capitalize appearance-none" value={cat.slug}>
              {cat.name}
            </option>
          );
        })}
      </select>

      {/* {filterOptions.map((filterOption) => {
        return (
          <li
            key={filterOption.id}
            className=" bg-silver-chalice-200 rounded-lg px-4 py-2 w-full"
          >
            <select
              className="flex justify-between w-full bg-transparent cursor-pointer"
              name={filterOption.title}
            >
              <option value="">{filterOption.title}</option>
              {filterOption.options.map((option) => {
                return (
                  <option
                    className="capitalize"
                    value=""
                    onClick={() => {
                      setFilter(option);
                    }}
                  >
                    {option}
                  </option>
                );
              })}
            </select>
          </li>
        );
      })} */}
    </form>
  );
};

export default Filter;

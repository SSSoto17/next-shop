const Filter = ({ filterOptions, filter, setFilter }) => {
  return (
    <menu className="grid sm:grid-cols-3 gap-4 min-w-72 [&>*]:min-w-48">
      {filterOptions.map((filterOption) => {
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
      })}
    </menu>
  );
};

export default Filter;

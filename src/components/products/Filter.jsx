const Filter = ({ filterOptions }) => {
  return (
    <menu className="grid sm:grid-cols-3 gap-4 min-w-72 [&>*]:min-w-48">
      {filterOptions.map((filterOption) => {
        return (
          <li className=" bg-silver-chalice-200 rounded-lg px-4 py-2 w-full">
            <select
              className="flex justify-between w-full bg-transparent"
              name={filterOption.title}
              placeholder={filterOption.title}
            >
              <option value="">{filterOption.title}</option>
              {filterOption.options.map((option) => {
                return <option value="">{option}</option>;
              })}
            </select>
          </li>
        );
      })}
    </menu>
  );
};

export default Filter;

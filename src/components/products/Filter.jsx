const Filter = () => {
  return (
    <menu className="grid sm:grid-cols-3 gap-4 min-w-72 [&>*]:min-w-48">
      <li className=" bg-silver-chalice-200 rounded-lg px-4 py-2 w-full">
        <select
          className="flex justify-between w-full bg-transparent"
          name="Brand"
          placeholder="Brand"
        >
          <option value="">Brand</option>
        </select>
      </li>
      <li>
        <select
          name="Category"
          className="flex justify-between bg-silver-chalice-200 rounded-lg px-4 py-2 w-full"
        >
          <option value="">Category</option>
          {/* Category <MdOutlineKeyboardArrowDown /> */}
        </select>
      </li>
      <li>
        <select
          name="Rating"
          className="flex justify-between bg-silver-chalice-200 rounded-lg px-4 py-2 w-full"
        >
          <option value="">Rating</option>
          {/* Category <MdOutlineKeyboardArrowDown /> */}
        </select>
      </li>
    </menu>
  );
};

export default Filter;

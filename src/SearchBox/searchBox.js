import { useState } from "react";
import { Search } from "react-huge-icons/outline";

const SearchBox = ({ searchItem }) => {
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchItem(value);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="searchbox md:w-1/2 mr-2 w-full border border-red-400 flex items-center h-full rounded-md px-4"
    >
      <Search />
      <input
        className="bg-white font-normal focus-within:outline-none pr-3 h-full w-full rounded-md"
        type="text"
        placeholder="جست و جوی فست فود ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;

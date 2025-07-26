import { SearchInputProps } from "@/interfaces";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="hidden items-center justify-between sm:hidden md:hidden lg:flex">
      <div className="border-gray flex rounded-full border-2 px-2 py-2">
        <SearchInput
          label="Location"
          placeholder="Search for destination"
          type="text"
          styles="border-r-2"
        />
        <SearchInput
          styles="border-r-2"
          label="Check in"
          placeholder="Add date"
          type="date"
        />
        <SearchInput
          styles="border-r-2"
          label="Check out"
          placeholder="Add date"
          type="date"
        />
        <SearchInput label="People" placeholder="Add guest" type="text" />
        <div className="bg-secondary_2 cursor-pointer rounded-full p-4 hover:bg-current">
          <CiSearch size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Search;

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  type,
  placeholder,
  styles,
}) => {
  return (
    <div className={`border-shimmer flex flex-col px-4 ${styles}`}>
      <label className="font-bold" htmlFor={label.trim()}>
        {label}
      </label>
      <input
        id={label.trim()}
        className="focus:outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

import React, { ChangeEvent } from "react";

type SearchBoxProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Enter name to search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

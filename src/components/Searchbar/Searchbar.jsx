import React from "react";
export default function Searchbar({ searchValue, setSearch }) {
  const inputRef = React.useRef();
  const onClickClear = () => {
    setSearch("");
    // document.querySelector("input").focus();

    inputRef.current.focus();
  };
  return (
    <>
      <div className="Searchbar">
        <div className="SearchForm">
          <button type="submit" className="SearchFormbutton">
            <span className="SearchFormbuttonlabel">search</span>
          </button>
          <input
            // onClick={onClickClear}
            ref={inputRef}
            className="SearchForminput"
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search pizza"
          />
        </div>
      </div>
    </>
  );
}

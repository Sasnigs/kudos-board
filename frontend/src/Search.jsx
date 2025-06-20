import "./search.css";
import { useState } from "react";

export default function Search({ setSearchState, SortMovies, setBoards }) {
  const [searchVal, setSearchVal] = useState("");

  const search = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:5000/get-boards?query=${encodeURIComponent(
          searchVal
        )}`,
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setSearchState(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const UpdateSearch = (e) => setSearchVal(e.target.value);

  const clearInput = () => {
    setSearchState(null);
    setSearchVal("");
  };
  return (
    <>
      <div className="search-comp">
          <form className="search-form" onSubmit={(e) => search(e)}>
            <input
              className="search-field"
              value={searchVal}
              name="query"
              onChange={UpdateSearch}
              required
              placeholder="Search boards..."
            />
            <button className="playing-btn" type="submit">
              Search
            </button>
          </form>
          <button className="playing-btn" onClick={clearInput}>
            Clear
          </button>
      </div>
    </>
  );
}

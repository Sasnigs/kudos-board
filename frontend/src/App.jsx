import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoardDetail from "./BoardDetail";
import Homepage from "./Homepage";

const Categories = {
  DEFAULT: "all",
  INSPIRATION: "inspiration",
  THANK_YOU: "thank you",
  CELEBRATION: "celebration",
};

function App() {
  const [category, setCategory] = useState(Categories.DEFAULT);
  const [boards, setBoards] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchState, setSearchState] = useState(null);

  const changeRefresh = () => {
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    fetch("http://localhost:5000/get-boards")
      .then((res) => res.json())
      .then((data) => setBoards(data))
      .catch((err) => console.log("Error fetching Boards:", err));
  }, [refresh]);

  return (
    <div>
      <h1>Kudos Boards</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              category={category}
              setCategory={setCategory}
              boards={searchState === null ? boards : searchState}
              changeRefresh={changeRefresh}
              setBoards={setBoards}
              setSearchState={setSearchState}
            />
          }
        />
        <Route path="/boards/:id" element={<BoardDetail />} />
      </Routes>
    </div>
  );
}

export default App;

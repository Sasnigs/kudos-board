import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoardDetail from "./BoardDetail";
import Homepage from "./Homepage";
import Footer from "./footer";
import { BASE_URL } from "./data/apiUrl";
import { Link } from "react-router-dom";
import Header from "./Header";

const Categories = {
  DEFAULT: "all",
  INSPIRATION: "inspiration",
  THANK_YOU: "thank you",
  CELEBRATION: "celebration",
  RECENT: "recent"
};

function App() {
  const [category, setCategory] = useState(Categories.DEFAULT);
  const [boards, setBoards] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchState, setSearchState] = useState(null);
  const [theme, setTheme] = useState("light")


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const changeRefresh = () => {
    setRefresh((prev) => !prev);
  };


  useEffect(() => {
    fetch(`${BASE_URL}get-boards`)
      .then((res) => res.json())
      .then((data) => setBoards(data))
      .catch((err) => console.log("Error fetching Boards:", err));
  }, [refresh]);



  return (
    <>
    <div className="app-div">
      <button className="toggle-btn" onClick={() => (setTheme(theme === "light" ? "dark" : "light"))}>
        Toggle theme
      </button>
      <Header />
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
              Categories={Categories}
              BASE_URL={BASE_URL}
            />
          }
        />
        <Route path="/boards/:id" element={<BoardDetail BASE_URL={BASE_URL} />} />
      </Routes>
    </div>
      <Footer />
       </>
  );
}

export default App;

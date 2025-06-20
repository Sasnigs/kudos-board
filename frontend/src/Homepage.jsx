import BoardList from "./BoardList";
import Search from "./Search";
import Filter from "./Filter";
import NewBoard from "./NewBoard";

export default function Homepage({
  boards,
  changeRefresh,
  setBoards,
  setSearchState,
  setCategory,
  category,
  Categories,
  BASE_URL
}) {
  return (
    <>
      <Search
        setBoards={setBoards}
        changeRefresh={changeRefresh}
        setSearchState={setSearchState}
        BASE_URL={BASE_URL}
      />
      <Filter setCategory={setCategory} Categories={Categories} />
      <NewBoard setBoards={setBoards} BASE_URL={BASE_URL} />
      <BoardList
        boards={boards}
        changeRefresh={changeRefresh}
        category={category}
        Categories={Categories}
        BASE_URL={BASE_URL}
      />
    </>
  );
}

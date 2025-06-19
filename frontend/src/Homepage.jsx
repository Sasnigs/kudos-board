import BoardList from "./BoardList";
import Search from "./Search";
import Filter from "./Filter";
import NewBoard from "./newBoard";

export default function Homepage({
  boards,
  changeRefresh,
  setBoards,
  setSearchState,
  setCategory,
  category,
}) {
  return (
    <>
      <Search
        setBoards={setBoards}
        changeRefresh={changeRefresh}
        setSearchState={setSearchState}
      />
      <Filter setCategory={setCategory} />
      <NewBoard setBoards={setBoards} />
      <BoardList
        boards={boards}
        changeRefresh={changeRefresh}
        category={category}
      />
    </>
  );
}

import BoardCard from "./BoardCard";
import "./BoardList.css"
export default function BoardList({
  boards,
  changeRefresh,
  category,
  Categories,
  BASE_URL,
}) {
  let filteredBoards = boards
  if (category === "recent"){
    filteredBoards = [...boards].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
  }else if (category !== Categories.DEFAULT){
    filteredBoards = boards.filter((board) => board.category === category)
  }
  console.log(filteredBoards)
  return (
    <div className="board-list-comp">
      {boards.length === 0 && <p>No boards yet</p>}
      <div className="boards">
        {filteredBoards.map((board) => 
              <BoardCard
                key={board.id}
                board={board}
                changeRefresh={changeRefresh}
                BASE_URL={BASE_URL}
              />
        )}
      </div>
    </div>
  );
}

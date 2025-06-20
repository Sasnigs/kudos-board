import BoardCard from "./BoardCard";

export default function BoardList({ boards, changeRefresh, category, Categories, BASE_URL }) {
  return (
    <div>
      {boards.length === 0 && <p>No boards yet</p>}
      {boards.map((board) => {
        if (category === Categories.DEFAULT) {
          return (
            <BoardCard
              key={board.id}
              board={board}
              changeRefresh={changeRefresh} 
              BASE_URL={BASE_URL}
            />
          );
        } else {
          if (board.category === category) {
            return (
              <BoardCard
                key={board.id}
                board={board}
                changeRefresh={changeRefresh}
                BASE_URL={BASE_URL}
              />
            );
          }
        }
      })}
    </div>
  );
}

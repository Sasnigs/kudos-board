import BoardCard from "./BoardCard";

export default function BoardList({ boards, changeRefresh, category }) {
  return (
    <div>
      {boards.length === 0 && <p>No boards yet</p>}
      {boards.map((board) => {
        if (category === "all") {
          return (
            <BoardCard
              key={board.id}
              board={board}
              changeRefresh={changeRefresh}
            />
          );
        } else {
          if (board.category === category) {
            return (
              <BoardCard
                key={board.id}
                board={board}
                changeRefresh={changeRefresh}
              />
            );
          }
        }
      })}
    </div>
  );
}

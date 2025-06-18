import BoardCard from "./BoardCard"


export default function BoardList({ boards, changeRefresh }){
    return(
        <div>
            {boards.length === 0 && <p>No boards yet</p>}
            {boards.map(board => (
                <BoardCard key={board.id} board={board} changeRefresh={changeRefresh}  />
            ))}
        </div>

       
    )
}
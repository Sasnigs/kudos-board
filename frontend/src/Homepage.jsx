import BoardList from './BoardList'
import Search from './Search'


export default function Homepage({boards, changeRefresh, setBoards, setSearchState}){
    return(
       <>
       <Search setBoards={setBoards} changeRefresh={changeRefresh}/>
       <BoardList boards={boards} changeRefresh={changeRefresh} />
       </>
    )
}
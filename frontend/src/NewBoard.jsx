import { useState } from "react"
import "./NewBoard.css"
import Modal from "./modal"
export default function NewBoard({setBoards, BASE_URL}){
    const [showModal, setshowModal] = useState(false)
    function changeModal(){
        setshowModal(prev => !prev)
    }
    return(

        <div className="create-board">
            <button onClick={() => changeModal()} >Create a New Board</button>
            { showModal &&<Modal changeModal={changeModal} BASE_URL={BASE_URL} setBoards={setBoards} />}
        </div>
    )
}
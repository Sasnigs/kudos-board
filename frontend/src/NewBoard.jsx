import { useState } from "react"
import Modal from "./modal"
export default function NewBoard({setBoards}){
    const [showModal, setshowModal] = useState(false)
    function changeModal(){
        setshowModal(prev => !prev)
    }
    return(

        <div>
            <button onClick={() => changeModal()} >Create a New Board</button>
            { showModal &&<Modal changeModal={changeModal} />}
        </div>
    )
}
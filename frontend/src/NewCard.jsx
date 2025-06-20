import CardModal from "./CardModal";
import { useState } from "react";

export default function NewCard({boardId, setBoard}) {
  const [showModal, setshowModal] = useState(false);
  function changeModal() {
    setshowModal((prev) => !prev);
  }
  return (
    <div>
      <button onClick={() => changeModal()}>Create a Card</button>
      {showModal && <CardModal changeModal={changeModal} boardId={boardId} setBoard={setBoard} />}
    </div>
  );
}

import "./modal.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "./data/apiUrl";

export default function Modal({ changeModal, setBoards, BASE_URL }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title,
      category,
      author,
    };
    console.log(formData)
    fetch(`${BASE_URL}create-board`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setBoards((prev) => [...prev, data]))
      changeModal()
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className={`modal-overlay show`}>
        <div className="modal-content">
          <h2>Create a New Board</h2>
          <form className="form-modal" onSubmit={(e) => handleSubmit(e)}>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </label>

            <label>Category:
              <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            >
              <option>Select category</option>
              <option>celebration</option>
              <option>thank you</option>
              <option>inspiration</option>
            </select> </label>
            

            <label>
              Author:
              <input
                type="text"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                required
              /> 
            </label>

            <button type="submit">Create Board</button>
          </form>

          <button onClick={() => changeModal()}>Close</button>
        </div>
      </div>
    </>
  );
}

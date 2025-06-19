import "./modal.css";
import { useEffect, useState } from "react";

export default function Modal({ changeModal, setBoards }) {
    const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
    const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title,
      category,
      author,
    };
    fetch('http://localhost:5000/create-board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setBoards(prev => [...prev, data]))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div
        className={`modal-overlay show`}
      >
        <div className="modal-content">
          <h2>Create a New Board</h2>
          <form onSubmit={(e) => handleSubmit(e)} >
            <label>Title: 
                  <input type="text" value={title}  onChange={(event) => setTitle(event.target.value)} required />
            </label>
          
            <label>Category: </label>
            <select value={category}  onChange={(event) => setCategory(event.target.value)} required >
              <option >Select category</option>
               <option>celebration</option>
              <option>thank you</option>
              <option>inspiration</option>
            </select>

             <label>Author:
                <input type="text"  value={author}  onChange={(event) => setAuthor(event.target.value)} required /> </label>
           
             <button type="submit">Creat Board</button>
           
          </form>

          <button onClick={() => changeModal()}>Close</button>
        </div>
      </div>
    </>
  );
}

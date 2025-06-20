import { useState } from "react";
import './CardModal.css'
import { BASE_URL } from "./data/apiUrl";

export default function CardModal({ changeModal, boardId, setBoard }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [gifSearch, setGifSearch] = useState("");
  const [gifResult, setGifResult] = useState([]);
  const [gif, setGif] = useState("");
  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

  const searchGIFS = async () => {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(
        gifSearch
      )}&limit=25&offset=0&rating=g&lang=en`;
      const res = await fetch(url);
      const data = await res.json();
      setGifResult(data.data);
    } catch (err) {
      console.error("Error fetching GIFS:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, message, gif, boardId };

    fetch(`${BASE_URL}cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) =>
        setBoard((prev) => ({ ...prev, cards: [...prev.cards, data] }))
      )
      .catch((error) => console.error(error));
  };
  return (
    <div className={`modal-overlay show`}>
      <div className="modal-content">
        <h2>Create New Card</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message"
            required
          />
          <input
            type="text"
            value={gifSearch}
            onChange={(e) => setGifSearch(e.target.value)}
            placeholder="Search GIFs.."
          />
          <button type="button" onClick={searchGIFS}>
            search
          </button>
          <div className="gif-contain">
            {gifResult.slice(0, 6).map((g) => (
              <img width="150px"
                key={g.id}
                src={g.images.fixed_height.url}
                onClick={() => setGif(g.images.fixed_height.url)}
              />
            ))}
          </div>
          <input type="text" value={gif} readOnly placeholder="Enter GIF URL" />

          <button type="submit">Create card</button>
        </form>

        <button onClick={() => changeModal()}>Close</button>
      </div>
    </div>
  );
}

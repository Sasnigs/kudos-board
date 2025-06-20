import { data, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NewCard from "./NewCard";
import { BASE_URL } from "./data/apiUrl";
import "./Cards.css"

export default function BoardDetail() {
  const { id } = useParams();
  const [board, setBoard] = useState(null);

  async function fetchBoard() {
    try {
      const res = await fetch(`${BASE_URL}get-boards/${id}`);
      const data = await res.json();
      setBoard(data);
    } catch (err) {
      console.log("Failed to fetch board:", err);
    }
  }
  useEffect(() => {
    fetchBoard();
  }, [id]);

  const deleteCard = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}cards/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchBoard();
      }
      const data = await res.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const upVote = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}cards/${id}/upvote`, {
        method: "PATCH",
      });
      if (res.ok) {
        const data = await res.json()
        setBoard((prev) => {
          const updatedCards = prev.cards.map((card) => {
            if (card.id === id) {
              return { ...card, upvotes: data.data.upvotes };
            }
            return card;
          });
          return { ...prev, cards: updatedCards };
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  if (!board) return <p>Loading</p>;
  return (
    <div className="cards-cont">
      <h2>{board.title}</h2>
      <NewCard boardId={id} setBoard={setBoard} />
      <div className="cards-container"> 
        {board.cards.map((card) => (
          <div className="card" key={card.id}>
            <p>{card.title}</p>
            <p>{card.message}</p>
            <img src={card.gif} alt="card gif" />
            <button onClick={() => upVote(card.id)}>
              Upvote: {card.upvotes}
            </button>
            <button onClick={() => deleteCard(card.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

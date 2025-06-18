import {Link} from 'react-router-dom'


export default function BoardCard({board, changeRefresh}){

  const deleteBoard = async () => {
  try {
    const res = await fetch(`http://localhost:5000/delete-boards/${board.id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
     changeRefresh();
    }
    const data = await res.json();
    console.log(data.message);
  } catch (error) {
    console.error('Error:', error);
  }
}
    return(
       <div>
            <img src={board.image} alt={board.title} />
            <h2>{board.title}</h2>
            <p>{board.category}</p>
            <Link to={`boards/${board.id}`}>
            <button>View Board</button>
            </Link>
            <button onClick={deleteBoard}>Delete</button>
       </div>
    )
}
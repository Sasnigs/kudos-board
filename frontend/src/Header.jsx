import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return(
        <>
       <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
             <img className="banner"
          src="https://kudos-board-exemplar-bck7.onrender.com/static/media/kudoboard_logo.5a582f09c55bf7a5c8cc.png"
          alt="Kudoboard Logo"
        />
          
      </Link>
         <h1>Kudos Boards</h1>
      
        </>
    )
}
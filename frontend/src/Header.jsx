import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return(
        <>
       <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Kudos Boards</h1>
      </Link>
        </>
    )
}
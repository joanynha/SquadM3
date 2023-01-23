import { Link } from "react-router-dom"

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>SUBLIME</h2>
        <ul>
            <li>
                <Link to={`/start`}>INÍCIO</Link>
            </li>
            <li>
                <Link to={`/`}>FICÇÃO CIENTÍFICA</Link>
            </li>
            <li>
                <Link to={`/romance`}>ROMANCE</Link>
            </li>
            <li>
                <Link to={`/fantasia`}>FANTASIA</Link>
            </li>
            <li>
                <Link to={`/misteriosus`}>MISTÉRIO/SUSPENSE</Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">ADICIONAR</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
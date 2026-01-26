import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../assets/Stuvo.svg" // ← your exact logo file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Brand Logo (UNCHANGED) */}
      <Link to="/" className="logo">
        <img src={logo} alt="STUVO" />
      </Link>

      {/* Navigation */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/sell" className="sell-btn">Sell</Link>
        <Link to="/listings">My Listings</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  )
}

export default Navbar

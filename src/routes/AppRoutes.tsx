import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Buy from '../pages/Buy'
import Sell from '../pages/Sell'
import BookDetails from '../pages/BookDetails'
import Profile from '../pages/Profile'
import Listings from '../pages/Listings'
import Favorites from '../pages/Favorites'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/buy" element={<Buy />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/sell" element={<Sell />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default AppRoutes

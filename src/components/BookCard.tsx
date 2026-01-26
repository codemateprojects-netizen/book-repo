import { Link } from 'react-router-dom'
import type { Book } from '../types/book'

interface Props {
  book: Book
}

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <div>
      <img src={book.image} alt={book.name} />
      <h3>{book.name}</h3>
      <p>₹{book.price}</p>
      <p>Discount: {book.discount}%</p>
      <p>City: {book.city}</p>
      <Link to={`/book/${book.id}`}>More Details</Link>
    </div>
  )
}

export default BookCard

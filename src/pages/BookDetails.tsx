import { useParams } from 'react-router-dom'

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h2>Book Details - {id}</h2>
      <button>Contact on WhatsApp</button>
    </div>
  )
}

export default BookDetails

import { useState } from 'react'

/* ---------------- TYPES ---------------- */
type Book = {
  id: string
  title: string
  price: number
  city: string
  image: string
  sellerName: string
  rating: number
  reviews: number
  condition: 'New' | 'Used'
  sector: 'Engineering' | 'Medical' | 'Finance' | 'Competitive'
}

/* ---------------- DATA ---------------- */
const books: Book[] = [
  {
    id: '1',
    title: 'Physics for JEE Advanced',
    price: 350,
    city: 'Hyderabad',
    image: 'https://m.media-amazon.com/images/I/61Iz2yy2CKL._SY425_.jpg',
    rating: 4.6,
    reviews: 1200,
    condition: 'Used',
    sector: 'Engineering',
    sellerName: 'Rahul Books',
  },
  {
    id: '2',
    title: 'NEET Biology Complete Guide',
    price: 280,
    city: 'Chennai',
    image: 'data:image/jpeg;base64,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',
    rating: 4.4,
    reviews: 890,
    condition: 'New',
    sector: 'Medical',
    sellerName: 'Medico Store',
  },
  {
    id: '3',
    title: 'Rich Dad Poor Dad',
    price: 299,
    city: 'Bangalore',
    image: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._SY425_.jpg',
    rating: 4.7,
    reviews: 25000,
    condition: 'Used',
    sector: 'Finance',
    sellerName: 'Finance World',
  },
  {
    id: '4',
    title: 'GATE CSE Handbook',
    price: 500,
    city: 'Pune',
    image: 'https://m.media-amazon.com/images/I/61NB8cysL8L._AC_UF1000,1000_QL80_.jpg',
    rating: 4.2,
    reviews: 420,
    condition: 'New',
    sector: 'Competitive',
    sellerName: 'Exam Hub',
  },
   {
    id: '1',
    title: 'Physics for JEE Advanced',
    price: 350,
    city: 'Hyderabad',
    image: 'https://m.media-amazon.com/images/I/61Iz2yy2CKL._SY425_.jpg',
    rating: 4.6,
    reviews: 1200,
    condition: 'Used',
    sector: 'Engineering',
    sellerName: 'Rahul Books',
  },
  {
    id: '2',
    title: 'NEET Biology Complete Guide',
    price: 280,
    city: 'Chennai',
    image: 'data:image/jpeg;base64,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',
    rating: 4.4,
    reviews: 890,
    condition: 'New',
    sector: 'Medical',
    sellerName: 'Medico Store',
  },
  {
    id: '3',
    title: 'Rich Dad Poor Dad',
    price: 299,
    city: 'Bangalore',
    image: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._SY425_.jpg',
    rating: 4.7,
    reviews: 25000,
    condition: 'Used',
    sector: 'Finance',
    sellerName: 'Finance World',
  },
  {
    id: '4',
    title: 'GATE CSE Handbook',
    price: 500,
    city: 'Pune',
    image: 'https://m.media-amazon.com/images/I/61NB8cysL8L._AC_UF1000,1000_QL80_.jpg',
    rating: 4.2,
    reviews: 420,
    condition: 'New',
    sector: 'Competitive',
    sellerName: 'Exam Hub',
  }, {
    id: '1',
    title: 'Physics for JEE Advanced',
    price: 350,
    city: 'Hyderabad',
    image: 'https://m.media-amazon.com/images/I/61Iz2yy2CKL._SY425_.jpg',
    rating: 4.6,
    reviews: 1200,
    condition: 'Used',
    sector: 'Engineering',
    sellerName: 'Rahul Books',
  },
  {
    id: '2',
    title: 'NEET Biology Complete Guide',
    price: 280,
    city: 'Chennai',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbqLx62FuSnv7Fj_SiX9jQoJ_UCPifwSWABr9hHMG7ZVR1yu_EGkyG1HK14SCUJKzW7MGeKRBvBqqX7zZD2d2jt6LluWByXLfjzqB-jvIfL30b3op68ehxNg&usqp=CAc',
    rating: 4.4,
    reviews: 890,
    condition: 'New',
    sector: 'Medical',
    sellerName: 'Medico Store',
  },
  {
    id: '3',
    title: 'Rich Dad Poor Dad',
    price: 299,
    city: 'Bangalore',
    image: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._SY425_.jpg',
    rating: 4.7,
    reviews: 25000,
    condition: 'Used',
    sector: 'Finance',
    sellerName: 'Finance World',
  },
  {
    id: '4',
    title: 'GATE CSE Handbook',
    price: 500,
    city: 'Pune',
    image: 'https://m.media-amazon.com/images/I/61NB8cysL8L._AC_UF1000,1000_QL80_.jpg',
    rating: 4.2,
    reviews: 420,
    condition: 'New',
    sector: 'Competitive',
    sellerName: 'Exam Hub',
  },
]

/* ---------------- COMPONENT ---------------- */
export default function Buy() {
  const [search, setSearch] = useState('')
  const [sector, setSector] = useState<'All' | Book['sector']>('All')
  const [condition, setCondition] = useState<'All' | Book['condition']>('All')
  const [sort, setSort] = useState<'price' | 'rating'>('price')
  const [minRating, setMinRating] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)

  const [cart, setCart] = useState<string[]>([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [seller, setSeller] = useState<string | null>(null)

  /* ---------------- FILTER ---------------- */
  const filtered = books
    .filter(b => b.title.toLowerCase().includes(search.toLowerCase()))
    .filter(b => (sector === 'All' ? true : b.sector === sector))
    .filter(b => (condition === 'All' ? true : b.condition === condition))
    .filter(b => b.rating >= minRating)
    .filter(b => b.price <= maxPrice)
    .sort((a, b) =>
      sort === 'price' ? a.price - b.price : b.rating - a.rating
    )

  const bestSellers = [...books]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 4)

  const addToCart = (id: string) => {
    if (!isLoggedIn) {
      alert('Please login first')
      return
    }
    if (!cart.includes(id)) setCart([...cart, id])
  }

  /* ---------------- UI ---------------- */
  return (
    <div style={styles.page}>
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <input
          style={styles.search}
          placeholder="Search books..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select style={styles.select} onChange={e => setSort(e.target.value as any)}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>

        <button style={styles.loginBtn} onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>

        <div style={styles.cart}>🛒 {cart.length}</div>
      </div>

      {/* BEST SELLERS */}
      <h3 style={{
        margin: '20px 0',
        fontWeight: 700,
        borderLeft: '4px solid #8EFFB3',
        paddingLeft: 12
      }}>
        Best Sellers
      </h3>

      <div style={styles.bestRow}>
        {bestSellers.map(b => (
          <div key={b.id} style={styles.bestCard}>
            <img src={b.image} style={styles.bestImg} />
            <p>{b.title}</p>
            <strong>₹{b.price}</strong>
          </div>
        ))}
      </div>

      <div style={styles.layout}>
        {/* SIDEBAR */}
        <aside style={styles.sidebar}>
          <h4>Filters</h4>

          <select style={styles.select} onChange={e => setSector(e.target.value as any)}>
            <option value="All">All Sectors</option>
            <option>Engineering</option>
            <option>Medical</option>
            <option>Finance</option>
            <option>Competitive</option>
          </select>

          <select style={styles.select} onChange={e => setCondition(e.target.value as any)}>
            <option value="All">All Condition</option>
            <option>New</option>
            <option>Used</option>
          </select>

          <label>Rating</label>
          <input type="range" min={0} max={5} step={0.5} onChange={e => setMinRating(+e.target.value)} />

          <label>Max Price ₹{maxPrice}</label>
          <input type="range" min={100} max={1000} step={50} onChange={e => setMaxPrice(+e.target.value)} />
        </aside>

        {/* GRID */}
        <main style={styles.grid}>
          {filtered.map(book => (
            <div key={book.id} style={styles.card}>
              <img src={book.image} style={styles.image} />

              <span style={styles.badge}>{book.sector}</span>

              <h4>{book.title}</h4>
              <p>⭐ {book.rating} ({book.reviews})</p>
              <strong>₹{book.price}</strong>

              <p>
                Sold by{' '}
                <span style={styles.link} onClick={() => setSeller(book.sellerName)}>
                  {book.sellerName}
                </span>
              </p>

              <div style={styles.actions}>
                <button
                  style={styles.outlineBtn}
                  onClick={() => setSelectedBook(book)}
                >
                  View
                </button>

                <button
                  style={styles.primaryBtn}
                  onClick={() => addToCart(book.id)}
                >
                  Add to Cart
                </button>
              </div>
              <button style={styles.secondaryBtn}>
                Buy Now
              </button>

            </div>
          ))}
        </main>
      </div>

      {/* BOOK MODAL */}
      {selectedBook && (
        <div style={styles.modal} onClick={() => setSelectedBook(null)}>
          <div style={styles.modalBox}>
            <h3>{selectedBook.title}</h3>
            <p>₹{selectedBook.price}</p>
            <button onClick={() => setSelectedBook(null)}>Close</button>
          </div>
        </div>
      )}

      {/* SELLER MODAL */}
      {seller && (
        <div style={styles.modal} onClick={() => setSeller(null)}>
          <div style={styles.modalBox}>
            <h3>{seller}</h3>
            <p>⭐ Rating 4.5</p>
            <p>📦 1200+ orders</p>
            <button onClick={() => setSeller(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

/* ---------------- STYLES ---------------- */
const styles: Record<string, React.CSSProperties> = {
  page: {
    padding: 24,
    minHeight: '100vh',
    background: 'linear-gradient(180deg,#f4fff8,#ffffff)',
    fontFamily: 'Inter, system-ui, sans-serif',
  },

  /* TOP BAR */
  topBar: {
    display: 'flex',
    gap: 12,
    marginBottom: 28,
    alignItems: 'center',
    background: '#ffffff',
    padding: 18,
    borderRadius: 18,
    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
  },

  search: {
    flex: 1,
    padding: '14px 16px',
    border: '1px solid #d1fae5',
    borderRadius: 14,
    fontSize: 14,
  },

  select: {
    padding: '12px 14px',
    borderRadius: 14,
    border: '1px solid #d1fae5',
    background: '#fff',
  },

  loginBtn: {
    background: '#8EFFB3',
    color: '#0f172a',
    padding: '12px 20px',
    border: 0,
    borderRadius: 999,
    fontWeight: 700,
    cursor: 'pointer',
  },

  cart: {
    background: '#0f172a',
    color: '#8EFFB3',
    padding: '12px 18px',
    borderRadius: 999,
    fontWeight: 700,
  },

  /* BEST SELLERS */
  bestRow: {
    display: 'flex',
    gap: 18,
    overflowX: 'auto',
    marginBottom: 36,
  },

  bestCard: {
    minWidth: 190,
    background: '#ffffff',
    padding: 16,
    borderRadius: 20,
    textAlign: 'center',
    boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
  },

  bestImg: {
    height: 160,
    width: '100%',
    objectFit: 'contain',
    marginBottom: 10,
  },

  /* LAYOUT */
  layout: {
    display: 'flex',
    gap: 28,
    alignItems: 'flex-start',
  },

  sidebar: {
    width: 260,
    background: '#ffffff',
    padding: 22,
    borderRadius: 22,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
  },

  /* GRID */
  grid: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
    gap: 28,
  },

  /* CARD */
  card: {
    background: '#ffffff',
    padding: 18,
    borderRadius: 22,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    boxShadow: '0 14px 36px rgba(0,0,0,0.08)',
    transition: 'transform .25s ease, box-shadow .25s ease',
  },

  image: {
    width: '100%',
    height: 220,
    objectFit: 'contain',
    borderRadius: 14,
    background: '#f0fdf4',
  },

  badge: {
    position: 'absolute',
    top: 14,
    left: 14,
    background: '#0f172a',
    color: '#8EFFB3',
    padding: '5px 12px',
    fontSize: 12,
    borderRadius: 999,
    fontWeight: 600,
  },

  actions: {
    display: 'flex',
    gap: 10,
    marginTop: 'auto',
  },

  outlineBtn: {
    background: '#ffffff',
    color: '#0f172a',
    border: '1px solid #8EFFB3',
    padding: '10px 14px',
    borderRadius: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },

  primaryBtn: {
    flex: 1,
    background: '#8EFFB3',
    color: '#0f172a',
    padding: '12px 0',
    border: 0,
    borderRadius: 14,
    fontWeight: 700,
    cursor: 'pointer',
  },

  secondaryBtn: {
    background: '#0f172a',
    color: '#8EFFB3',
    padding: '12px 0',
    border: 0,
    borderRadius: 14,
    fontWeight: 700,
    cursor: 'pointer',
  },

  link: {
    color: '#22c55e',
    cursor: 'pointer',
    fontWeight: 700,
  },

  /* MODAL */
  modal: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(15,23,42,.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
  },

  modalBox: {
    background: '#ffffff',
    padding: 26,
    borderRadius: 22,
    minWidth: 340,
    boxShadow: '0 20px 50px rgba(0,0,0,.3)',
  },
}

import React, { useState } from "react";
import "./Favorites.css";

interface FavoriteBook {
  id: number;
  title: string;
  price: number;
  image: string;
}

const initialData: FavoriteBook[] = [
  {
    id: 1,
    title: "Mathematics for IIT",
    price: 400,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 2,
    title: "Physics Galaxy",
    price: 350,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
  },
  {
    id: 3,
    title: "Organic Chemistry Guide",
    price: 299,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
];

const Favorites: React.FC = () => {
  const [books, setBooks] = useState(initialData);
  const [search, setSearch] = useState("");

  const removeFavorite = (id: number) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="favorites">
      <div className="container">
        {/* Header */}
        <div className="favHeader">
          <div>
            <h1>Favorite Books</h1>
            <p>Your saved books for quick access</p>
          </div>

          <input
            className="searchBox"
            placeholder="Search favorites..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="empty">
            <h2>No favorites yet ❤️</h2>
            <p>Start adding books you love.</p>
          </div>
        )}

        {/* Cards */}
        <div className="favGrid">
          {filtered.map((book) => (
            <div className="favCard" key={book.id}>
              <img src={book.image} alt={book.title} />

              <div className="favContent">
                <h3>{book.title}</h3>
                <div className="price">₹{book.price}</div>

                <div className="favBtns">
                  <button className="btn view">View</button>
                  <button
                    className="btn remove"
                    onClick={() => removeFavorite(book.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

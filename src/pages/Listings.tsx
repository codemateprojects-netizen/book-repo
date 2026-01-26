import React, { useState } from "react";
import "./MyListings.css";

interface Listing {
  id: number;
  title: string;
  price: number;
  date: string;
  status: "active" | "sold";
  image: string;
}

const data: Listing[] = [
  {
    id: 1,
    title: "Math Olympiad Guide",
    price: 400,
    date: "22 Jan 2026",
    status: "active",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    price: 350,
    date: "18 Jan 2026",
    status: "active",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
  },
  {
    id: 3,
    title: "Chemistry Complete Guide",
    price: 250,
    date: "15 Jan 2026",
    status: "sold",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
];

const MyListings: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "active" | "sold">("all");
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) => {
    if (filter !== "all" && item.status !== filter) return false;
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="myListings">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div>
            <h1>My Listings</h1>
            <p>Manage, edit, and track your book listings</p>
          </div>

          <input
            className="searchBox"
            placeholder="Search listings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="statCard">
            <span>Total</span>
            <h2>{data.length}</h2>
          </div>
          <div className="statCard">
            <span>Active</span>
            <h2>{data.filter((i) => i.status === "active").length}</h2>
          </div>
          <div className="statCard">
            <span>Sold</span>
            <h2>{data.filter((i) => i.status === "sold").length}</h2>
          </div>
        </div>

        {/* Filters */}
        <div className="filters">
          {["all", "active", "sold"].map((f) => (
            <button
              key={f}
              className={`filterBtn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f as any)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="cards">
          {filtered.map((item) => (
            <div className="card" key={item.id}>
              <div style={{ position: "relative" }}>
                <img src={item.image} alt={item.title} />
                <span className={`badge ${item.status}`}>
                  {item.status}
                </span>
              </div>

              <div className="cardContent">
                <h3>{item.title}</h3>
                <div className="price">₹{item.price}</div>
                <div className="date">Listed on {item.date}</div>

                <div className="cardBtns">
                  <button className="btn view">View</button>
                  <button className="btn edit">Edit</button>
                  <button className="btn remove">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyListings;

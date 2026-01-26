import { Link } from "react-router-dom"
import "./Home.css"

// Floating books (from assets)
import bookLeft1 from "../assets/book3.png"
import bookLeft2 from "../assets/book2.png"
import bookRight1 from "../assets/book1.png"
import bookRight2 from "../assets/book.png"
import ChatBot from "./ChatBot"

const Home: React.FC = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        {/* Floating Books - Left */}
        <div className="floating-books left">
          <img src={bookLeft1} alt="floating book" />
          <img src={bookLeft2} alt="floating book" />
        </div>

        {/* Center Content */}
        <div className="hero-content">
          <h1>
            From One Shelf <span>to Another</span>
          </h1>

          <p>
            STUVO is a student-to-student marketplace where you can buy and sell
            used exam preparation books locally at affordable prices.
          </p>

          <div className="hero-actions">
            <Link to="/buy" className="btn btn-primary">
              Buy Books
            </Link>
            <Link to="/sell" className="btn btn-secondary">
              Sell Your Books
            </Link>
          </div>
        </div>

        {/* Floating Books - Right */}
        <div className="floating-books right">
          <img src={bookRight1} alt="floating book" />
          <img src={bookRight2} alt="floating book" />
        </div>

      </section>

      {/* HIGH SELLING BOOKS */}
      <section className="container">
  <h2 className="section-title">High Selling Books</h2>
  <p className="section-subtitle">
    Books that students are buying the most this week
  </p>

  <div className="book-grid">
    {[
      {
        title: "Physics for JEE Advanced",
        price: "₹350",
        city: "Hyderabad",
        tag: "Trending",
      },
      {
        title: "Mathematics for IIT Aspirants",
        price: "₹400",
        city: "Bangalore",
        tag: "High Demand",
      },
      {
        title: "NEET Biology Complete Guide",
        price: "₹280",
        city: "Chennai",
        tag: "Best Value",
      },
      {
        title: "GATE CSE Handbook",
        price: "₹500",
        city: "Pune",
        tag: "Top Rated",
      },
    ].map((book, i) => (
      <div className="book-card" key={i}>
        <span className="book-tag">{book.tag}</span>

        <img
          src={bookRight2}
          alt={book.title}
        />

        <h3>{book.title}</h3>

        <div className="book-meta">
          <span className="book-price">{book.price}</span>
          <span className="book-city">{book.city}</span>
        </div>

        <Link to="/buy" className="btn-outline">
          View Details
        </Link>
      </div>
    ))}
  </div>
</section>

     <section className="demand-section">
  <div className="container demand-grid">

    <div className="demand-poster primary">
      <h3>Books in High Demand</h3>
      <p>
        Competitive exam books are selling faster than ever.
        List your books now and connect with buyers instantly.
      </p>
      <Link to="/sell" className="poster-btn light">
        Post Your Books
      </Link>
    </div>

    <div className="demand-poster secondary">
      <h3>Students Are Looking to Buy</h3>
      <p>
        Thousands of students search daily for affordable exam
        preparation books in your city.
      </p>
      <Link to="/buy" className="poster-btn dark">
        Browse Books
      </Link>
    </div>

  </div>

  <div className="container offer-grid">

    {/* COUPON CARD */}
    <div className="coupon-card">
      <div>
        <h3>Limited Student Discount</h3>
        <p>
          Get additional savings on selected exam books.
          Valid for a short time only.
        </p>

        <div className="coupon-code">
          STUVO10
        </div>
      </div>

      <Link to="/buy" className="coupon-btn">
        Apply Coupon
      </Link>
    </div>

    {/* HURRY-UP POSTER */}
    <div className="hurry-poster">
      <h3>Books Are Selling Fast</h3>
      <p>
        Popular exam books are being sold quickly in your city.
        Act now before listings expire.
      </p>

      <Link to="/buy" className="hurry-btn">
        View Available Books
      </Link>
    </div>

  </div>
</section>

      {/* HOW IT WORKS */}
      <section className="container how-it-works">
        <h2 className="section-title">How It Works</h2>

        <div className="steps">
          <div className="step-card">
            <span>1</span>
            <h3>Search</h3>
            <p>Find books by exam, price or city.</p>
          </div>

          <div className="step-card">
            <span>2</span>
            <h3>Connect</h3>
            <p>Chat directly with the seller.</p>
          </div>

          <div className="step-card">
            <span>3</span>
            <h3>Exchange</h3>
            <p>Meet locally and exchange safely.</p>
          </div>
        </div>
      </section>
<section className="reviews-section">
  <div className="container">

    <h2 className="section-title">Student Reviews</h2>
    <p className="section-subtitle">
      What students say about buying and selling on STUVO
    </p>

    <div className="reviews-grid">
      {[
        {
          name: "Rahul Kumar",
          role: "JEE Aspirant",
          image: "/users/rahul.jpg",
          review:
            "I sold my books within two days. The process was simple and I directly connected with buyers.",
        },
        {
          name: "Ananya Sharma",
          role: "NEET Student",
          image: "/users/rahul.jpg",
          review:
            "Found almost new books at half the price. Very helpful for students on a budget.",
        },
        {
          name: "Vikram Reddy",
          role: "GATE CSE",
          image: "/users/rahul.jpg",
          review:
            "The platform feels safe and local. No middlemen and no unnecessary charges.",
        },
      ].map((item, i) => (
        <div className="review-card" key={i}>
          <div className="stars">
  {[...Array(5)].map((_, i) => (
    <span key={i} className="star filled">★</span>
  ))}
</div>

<p className="review-text">"{item.review}"</p>


          <div className="review-user">
            <div className="avatar">
  {item.image ? (
    <img src={item.image} alt={item.name} />
  ) : (
    item.name.charAt(0)
  )}
</div>

            <div>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
  <div className="sticky-cta">
  <p>Looking for affordable exam books?</p>
  <Link to="/buy" className="sticky-btn">
    Browse Books
  </Link>
</div>
</section>
<section className="contact-section">
  <div className="container contact-grid">

    {/* CONTACT FORM */}
    <div className="contact-form">
      <h2>Need Help?</h2>
      <p>
        Have questions about buying or selling books?
        Our support team is here to help you.
      </p>

      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows={4} placeholder="Describe your issue"></textarea>
        </div>

        <button type="submit" className="btn-primary full">
          Submit Request
        </button>
      </form>
    </div>

    {/* HELP / HELPLINE */}
    <div className="help-cards">
      <div className="help-card">
        <h3>Customer Support</h3>
        <p>Mon – Sat | 9 AM – 7 PM</p>
        <span>support@stuvo.in</span>
      </div>

      <div className="help-card">
        <h3>WhatsApp Help</h3>
        <p>Quick responses for urgent queries</p>
        <span>+91 9XXXX XXXXX</span>
      </div>

      <div className="help-card">
        <h3>Campus Assistance</h3>
        <p>Local help for student exchanges</p>
        <span>Available in major cities</span>
      </div>
    </div>

  </div>
</section>

<ChatBot />
    </div>
  )
}

export default Home

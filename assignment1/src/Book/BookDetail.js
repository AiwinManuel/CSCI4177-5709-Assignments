import React, { useState } from 'react';
import './BookDetailPage.css';
import img from '../assets/images/book.jpg'; 
import blackheart from '../assets/images/blackheart.png'; 
import redheart from '../assets/images/red heart.png'; 


const BookDetailPage = () => {
  // Dummy data for the book
  const book = {
    title: 'Noble Beginnings: A Thriller (Jack Noble Thrillers Book 1)',
    author: ' L.T. Ryan (Author) ',
    description: 'In March of 2002, while the eyes of the world focused on Afghanistan, Jack Noble finds himself on the outskirts of Baghdad, Iraq. A Marine in name only, Jack is on-loan to the CIA. Normally an integral part of the team, he finds that he is nothing more than a security detail in Iraq. ',
    imageUrl: img, 
    reviews: [
        "I quite enjoyed the book. I was pleased to have the book actually have a sensible ending. It thereby offers the potential for future adventures. It has been my experience too many writers leave the ending unfinished, for obvious reasons.",
        "At this point too many times they dash in where cooler minds might fear to tread. The outcome in these situations is often disastrous with our hero getting bashed on the head, overpowered and tied up for torture. or otherwise finding himself in deep trouble. It would seem to me that these finely tuned merchants of mayhem would give some pause, and forethought, to thinklng this trough a bit more."
    ],
    rating: 4 
  };

  
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  
  const handleAddToCart = () => {
   
    setIsAddedToCart(!isAddedToCart);
  };

  
  const handleAddToFavorites = () => {
    setIsFavorited(!isFavorited);
  };

  return (
     <div className="book-detail-page">
      <div className="book-info">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <img src={book.imageUrl} alt={`Cover of the book ${book.title}`} />
        <p>{book.description}</p>
        <div className="action-buttons">
          <button onClick={handleAddToCart}>
            {isAddedToCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
          <button>Reserve</button>
          <button className="favorite-button" onClick={handleAddToFavorites}>
            <img 
              src={isFavorited ? redheart : blackheart}
              alt={isFavorited ? 'Favorited' : 'Add to Favorites'}
            />
          </button>
        </div>
      </div>
      <div className="book-reviews-ratings">
        <div className="book-reviews">
          <h2>Reviews</h2>
          <ul>
            {book.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
          <button className="next-button">Next</button> {/* Next button placeholder */}
        </div>
        <div className="book-ratings">
          {/* Placeholder for ratings image */}
          <h2>Ratings</h2>
          {"★".repeat(book.rating)}
          {"☆".repeat(5 - book.rating)}
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

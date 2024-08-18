import { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarRatings from "react-star-ratings";
// import { useCart } from "../../context/cart.context";
import { useWishlist } from '../../context/wishlist.context';
import Banner from "../../components/Banner/Banner";
import styles from './Book.module.scss';

const Book = () => {
  const book = useLoaderData();
  const { addToWishlist } = useWishlist();
  // const { addToCart } = useCart();
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Banner displayText="Single Product" />
      <section className={ styles.book }>
        <div className={ styles.image }>
          <div className={ styles.preview}>
            {
              book.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  onClick={() => setCurrent(idx)}
                />
              ))
            }
          </div>
          <img
            src={book.images[current]}
            className={ styles.main }
          />
        </div>
        <div className={ styles.body }>
          <span className={ styles.author }>By {book.author}</span>
          <span className={ styles.title }>{book.title}</span>
          <span>
            <StarRatings
              rating={book.rating}
              starDimension="15px"
              starSpacing="1px"
            /> ({book.rating})
          </span>
          <span className={ styles.price}>₦{book.price}</span>
          <p className={ styles.description}>{book.description}</p>
          <hr />
          <label htmlFor="quantity">
            <strong>{book.instock}</strong> in stock
            <input
              id="quantity"
              type="number"
              role="input"
              aria-label="quantity"
              min={1}
              defaultValue={1}
              max={book.instock}
            />
          </label>
          <div>
            <button
              onClick={() => {
                const { id, title, images } = book;
                addToWishlist({ id, title, images });
                toast('Book successfully added to wishlist !!');
              }}
            >
              Add To Wishlist
            </button>
            <button
            >Add To Cart</button>
          </div>
          <hr />
          <div className={ styles.extra }>
            <span>Year Published:</span> {book.date_published} <br/>
            <span>Category:</span> {book.category} <br/>
            <span>Tags:</span> {book.tags.join(', ')} <br/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
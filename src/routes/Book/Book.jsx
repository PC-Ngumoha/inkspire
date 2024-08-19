import { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';
import { toast } from 'react-toastify';
import StarRatings from "react-star-ratings";
import { useCart } from "../../context/cart.context";
import { useWishlist } from '../../context/wishlist.context';
import Banner from "../../components/Banner/Banner";
import styles from './Book.module.scss';

const Book = () => {
  const book = useLoaderData();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [current, setCurrent] = useState(0);
  const [quantity, setQuantity] = useState(1);

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
          </label>
          <div>
            <CiSquareMinus
              className={ styles.adjustQuantity }
              onClick={(evt) => {
                evt.stopPropagation();
                // Handle decrementing quantity value
                setQuantity(
                  (prev) => prev > 1 ? prev - 1 : prev
                )
              }}
              />
            <input
              id="quantity"
              type="number"
              role="input"
              aria-label="quantity"
              value={quantity}
              onChange={(evt) => {
                const value  = parseInt(evt.target.value);
                if (value <= book.instock) {
                  setQuantity(value);
                }
              }}
              max={book.instock}
            />
            <CiSquarePlus
              className={ styles.adjustQuantity }
              onClick={() => {
                // Handle incrementing quantity value
                setQuantity(
                  (prev) => prev < book.instock ? prev + 1 : prev
                )
              }}
              />
          </div>
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
              onClick={() => {
                const { id, title, images, price } = book;
                addToCart({ id, title, images, price, quantity });
                toast('Book successfully added to cart !!');
              }}
            >
              Add To Cart
            </button>
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
import { useState } from "react";
import StarRatings from "react-star-ratings";
import Banner from "../../components/Banner/Banner";
import styles from './Book.module.scss';

const sample = {
  id: 10,
  title: "781-xwlj-9538-5831-lenn",
  author: "Hamel Belfelt",
  price: 699.37,
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  rating: 2.0,
  category: "Mind & Spirit",
  tags: [
    "Mind & Spirit",
    "Historical & Cultural",
    "Romance & Relationships"
  ],
  images: [
    "http://dummyimage.com/110x160.png/ff4444/ffffff",
    "http://dummyimage.com/201x147.png/dddddd/000000",
    "http://dummyimage.com/218x135.png/5fa2dd/ffffff"
  ],
  instock: 9,
  date_published: 1994
}

const Book = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Banner displayText="Single Product" />
      <section className={ styles.book }>
        <div className={ styles.image }>
          <div className={ styles.preview}>
            {
              sample.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  onClick={() => setCurrent(idx)}
                />
              ))
            }
          </div>
          <img src={sample.images[current]} />
        </div>
        <div>
          <span>By {sample.author}</span>
          <span className={ styles.title }>{sample.title}</span>
          <span>
            <StarRatings
              rating={sample.rating}
              starDimension="15px"
              starSpacing="3px"
            /> ({sample.rating})
          </span>
          <span className={ styles.price}>₦{sample.price}</span>
          <p className={ styles.description}>{sample.description}</p>
          <hr />
          <label htmlFor="quantity">
            {sample.instock} in stock
            <input
              id="quantity"
              type="number"
              role="input"
              aria-label="quantity"
              min={1}
              defaultValue={1}
              max={sample.instock}
            />
          </label>
          <div>
            <button>Buy Now</button>
            <button>Add To Cart</button>
          </div>
          <hr />
          <div className={ styles.extra }>
            <span>Year Published:</span> {sample.date_published} <br/>
            <span>Category:</span> {sample.category} <br/>
            <span>Tags:</span> {sample.tags} <br/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
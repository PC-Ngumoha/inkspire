import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Banner from "../../components/Banner/Banner";
import styles from './Wishlist.module.scss';

const book = {
  id: 1,
  title: "The art of seduction",
  author: "Robert Greene",
  price: 610.86,
  description: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  rating: 4.7,
  category: "Romance & Relationships",
  tags: [
    "Arts & Creativity",
    "Romance & Relationships",
    "Historical & Cultural"
  ],
  images: [
    "https://i.ibb.co/4Z1mJR8/art-of-seduction-1.jpg",
    "https://i.ibb.co/1J34Cy3/art-of-seduction-2.jpg",
    "https://i.ibb.co/qJt9R4n/art-of-seduction-3.jpg"
  ],
  instock: 13,
  date_published: 2001
};

const Wishlist = () => {
  const navigate = useNavigate();

  return (
    <>
      <Banner displayText="your wishlist" />
      <section className={ styles.wishlist }>

        <div
          key={ book.id }
          className={ styles.card }
          onClick={() => navigate(`/book/${book.id}`)}
        >
          <div className={ styles.cardImage }>
            <img src={ book.images[0] } />
          </div>
          <div className={ styles.cardInfo }>
            <span className={ styles.title }>{ book.title }</span>
          </div>
          <button>
              <FaTrash />
          </button>
        </div>

      </section>
    </>
  );
};

export default Wishlist;
import { useNavigate, useLoaderData } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Banner from "../../components/Banner/Banner";
import { useWishlist } from '../../context/wishlist.context';
import styles from './Wishlist.module.scss';

const Wishlist = () => {
  const navigate = useNavigate();
  const books = useLoaderData()
  const { removeFromWishlist } = useWishlist();

  return (
    <>
      <Banner displayText="your wishlist" />
      <section className={ styles.wishlist }>

        {
          books.length !== 0
          ? books.map((book) => (
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
                <button onClick={(evt) => {
                  evt.stopPropagation()
                  removeFromWishlist(book.id);
                  toast('Book successfully removed from wishlist !!');
                  navigate('/shop');
                }}>
                    <FaTrash />
                </button>
              </div>
            ))
          : (
            <div className={ styles.message }>
              No items currently available in your wishlist.
            </div>
          )
        }
      </section>
    </>
  );
};

export default Wishlist;
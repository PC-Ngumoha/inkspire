import { useLoaderData } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import Banner from "../../components/Banner/Banner";
import { useCart } from '../../context/cart.context';
import styles from './Cart.module.scss';

const Cart = () => {
  const items = useLoaderData();
  const { total, removeFromCart } = useCart();

  return (
    <>
      <Banner displayText="cart" />
      <section className={ styles.cart }>
        {
          items.length !== 0
          ? (
            <>
              <table>
                <thead>
                  <th>Book</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </thead>
                <tbody>
                  {
                    items.map((item) => (
                      <tr key={ item.id }>
                        <td>
                          <div className={ styles.book }>
                            <img src={item.images[0]} />
                            <span>{item.title}</span>
                          </div>
                        </td>
                        <td className={ styles.numeric }>
                          {item.quantity}
                        </td>
                        <td className={ styles.numeric }>
                          ₦{item.price}
                        </td>
                        <td className={ styles.cancelButton }>
                          <IoMdClose
                            onClick={ () => {
                              removeFromCart(item.id);
                              toast('Book successfully deleted from cart');
                            }}
                          />
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

              <div className={ styles.total }>
                <div>
                  <span className={ styles.text }>Total:</span>
                  <span className={ styles.amount }>
                    ₦{ total }
                  </span>
                </div>
                <button>
                  Order now
                </button>
              </div>
            </>
          ) : (
            <div className={ styles.message }>
              No items currently available in your wishlist.
            </div>
          )
        }
      </section>
    </>
  );
}

export default Cart;

import { IoMdClose } from 'react-icons/io';
import Banner from "../../components/Banner/Banner";
import styles from './Cart.module.scss';

const item = {
  id: 1,
  title: "The art of seduction",
  price: 610.86,
  quantity: 1,
  images: [
    "https://i.ibb.co/4Z1mJR8/art-of-seduction-1.jpg",
    "https://i.ibb.co/1J34Cy3/art-of-seduction-2.jpg",
    "https://i.ibb.co/qJt9R4n/art-of-seduction-3.jpg"
  ]
}

const Cart = () => {
  return (
    <>
      <Banner displayText="cart" />
      <section className={ styles.cart }>
        <table>
          <thead>
            <th>Book</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </thead>
          <tbody>

            <tr>
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
                <IoMdClose />
              </td>
            </tr>

          </tbody>
        </table>

        <div className={ styles.total }>
          <div>
            <span className={ styles.text }>Total:</span>
            <span className={ styles.amount }>
              ₦{ item.price * item.quantity}
            </span>
          </div>
          <button>
            Order now
          </button>
        </div>
      </section>
    </>
  );
}

export default Cart;

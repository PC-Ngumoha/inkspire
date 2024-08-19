import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import Banner from "../../components/Banner/Banner";
import styles from './Order.module.scss';

const Order = () => {

  // Throws confetti once the page loads up
  useEffect(() => {
    confetti({
      particleCount: 500,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <>
      <Banner displayText="order comfirmed" />
      <section className={ styles.order }>
        <div className={ styles.heading }>
          <FaCheckCircle className={ styles.checkmark } />
          <span>Congratulations</span>
        </div>
        <span className={ styles.message }>
          Your order has been confirmed.<br />Your books will be at your door tomorrow.
        </span>
        <span className={ styles.endNote }>Happy Reading</span>
        <Link to='/shop' className={ styles.back }>Back</Link>
      </section>
    </>
  );
};

export default Order;
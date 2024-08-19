
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import image from '../../assets/studying.jpg';

const Home = () => {
  return (
    <main className={ styles.home }>
      <section id='hero' className={ styles.hero }>
        <div className={ styles.container }>
          <div className={ styles.tagline }>
            <span className={ styles.heading }>
              Can reading a book,<br />change your life ?
            </span>
            <span className={ styles.body }>
              We want to show you that the answer is YES
            </span>
            <Link
              to='/shop'
              className={ styles.link }
            >
              Start reading now ⇾
            </Link>
          </div>
          <img
            src={ image }
            alt='A guy studying in a park'
          />
        </div>
      </section>
      <section id='services' className={ styles.services }></section>
      <section id='topbooks' className={ styles.topbooks }></section>
      <section id='categories' className={ styles.categories }></section>
      <section id='offers' className={ styles.offers }></section>
      <section id='testimonials' className={ styles.testimonials }></section>
      <section id='cta' className={ styles.cta }></section>
    </main>
  );
};

export default Home;
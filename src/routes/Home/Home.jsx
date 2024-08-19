
import { IoCartOutline } from 'react-icons/io5';
import { BsAward } from 'react-icons/bs';
import { FiTag } from 'react-icons/fi';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import image from '../../assets/studying.jpg';
import 'react-multi-carousel/lib/styles.css';


const services = [
  {
    id: 1,
    icon: <IoCartOutline />,
    name: 'free delivery',
    body: 'Mauris a eros ac libero maximus ornare in nec ipsum. Nulla vitae finibus libero. Nam aliquet velit a urna efficitur.'
  },
  {
    id: 2,
    icon: <BsAward />,
    name: 'quality guarantee',
    body: 'Curabitur a ligula quis elit bibendum feugiat id quis neque. Phasellus in placerat erat. Class aptent taciti sociosqu ad litora.'
  },
  {
    id: 3,
    icon: <FiTag />,
    name: 'daily offers',
    body: 'Etiam consectetur, felis nec rutrum hendrerit, sapien diam mollis nunc, ac tincidunt sem odio vulputate nibh. Maecenas egestas ornare aliquet.'
  }
];

const topBooks = [
  {
    id: 1,
    title: "The art of seduction",
    price: 610.86,
    rating: 4.7,
    image: "https://i.ibb.co/1J34Cy3/art-of-seduction-2.jpg"
  },
  {
    id: 2,
    title: "The 48 laws of power",
    price: 500.86,
    rating: 4.6,
    image: "https://i.ibb.co/g9pGRZ7/48-laws-of-power-1.png"
  },
  {
    id: 3,
    title: "Atomic habits",
    price: 700.86,
    rating: 4.8,
    image:"https://i.ibb.co/jrGbM00/atomic-habits-1.jpg"
  }
];



const Home = () => {

  return (
    <main className={ styles.home }>
      {/* HERO SECTION */}
      <section id='hero' className={ styles.hero }>
        <div className={ styles.container }>
          <div className={ styles.tagline }>
            <span className={ styles.heading }>
              Can reading a book,<br />change your life ?
            </span>
            <span className={ styles.body }>
              We aim to show you that the answer is YES
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
      {/* OUR SERVICES */}
      <section id='services' className={ styles.services }>
        {
          services.map((service) => (
            <div key={ service.id } className={ styles.service }>
              <div className={ styles.icon }>
                { service.icon }
              </div>
              <span className={ styles.name }>
                {service.name}
              </span>
              <span className={ styles.body }>
                {service.body}
              </span>
            </div>
          ))
        }
      </section>
      {/* BEST SELLING BOOKS */}
      <section id='topbooks' className={ styles.topbooks }>
        <h2 className={ styles.sectionHeading }>best selling items</h2>
        <div className={ styles.books }>
          {
            topBooks.map((book) => (
              <div
                key={ book.id }
                className={ styles.card }
              >
                <div className={ styles.cardImage }>
                  <img src={ book.image } />
                </div>
                <div className={ styles.cardInfo }>
                  <span className={ styles.title }>{ book.title }</span>
                  <span>
                    <StarRatings
                    rating={book.rating}
                    starDimension="10px"
                    starSpacing=".2px"
                  /> { book.rating }
                  </span>
                  <span className={ styles.price }>₦{ book.price }</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      {/* WHAT OUR CUSTOMERS SAY */}
      {/* <section id='testimonials' className={ styles.testimonials }>
        <h2 className={ styles.sectionHeading }>what our customers say</h2>
      </section> */}
      <section id='categories' className={ styles.categories }>

      </section>
      <section id='cta' className={ styles.cta }></section>
    </main>
  );
};

export default Home;
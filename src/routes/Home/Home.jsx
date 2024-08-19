
import { IoCartOutline } from 'react-icons/io5';
import { BsAward } from 'react-icons/bs';
import { FiTag } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import image from '../../assets/studying.jpg';

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
      <section id='topbooks' className={ styles.topbooks }></section>
      <section id='categories' className={ styles.categories }></section>
      <section id='offers' className={ styles.offers }></section>
      <section id='testimonials' className={ styles.testimonials }></section>
      <section id='cta' className={ styles.cta }></section>
    </main>
  );
};

export default Home;
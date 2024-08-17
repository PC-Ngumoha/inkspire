import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import { FaSearch }  from 'react-icons/fa';
import { IoChevronBackOutline,
  IoChevronForwardOutline
} from 'react-icons/io5';
import sample from '../../assets/sample.jpg';
import styles from './Shop.module.scss';



const filterFields = {
  categories: [
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'Arts & Creativity'
    },
    {
      id: 3,
      name: 'Historical & Cultural'
    },
    {
      id: 4,
      name: 'Romance & Relationships'
    }
  ],
  priceRange: [
    {
      id: 1 ,
      name: 'All'
    },
    {
      id: 2 ,
      name: 'Less than ₦1000'
    },
    {
      id: 3,
      name: '₦1000 - ₦4000'
    },
    {
      id: 4,
      name: 'Above ₦4000'
    }
  ]
}

const Shop = () => {
  const navigate = useNavigate();

  return (
    <>
      <Banner displayText='Shop' />
      <main className={ styles.shop }>
        <aside>
          <div className={styles.searchBar}>
            <FaSearch />
            <input
              type='text'
              role='search'
              aria-label='book filter'
              placeholder='Search'
            />
          </div>
          <div>
            <span className={ styles.heading }>
              Categories
            </span>
            {
              filterFields.categories.map((filter) => (
                <button
                  key={filter.id}
                  className={ styles.filterButtons }
                >
                  {filter.name}
                </button>
              ))
            }
          </div>
          <div>
            <span className={ styles.heading }>
              Filter by price
            </span>
            {
              filterFields.priceRange.map((filter) => (
                <button
                  key={filter.id}
                  className={ styles.filterButtons }
                >
                  {filter.name}
                </button>
              ))
            }
          </div>
        </aside>
        <article>
          <span>Some text will be displayed here</span>
          <div className={ styles.container }>

            <div
              className={ styles.card }
              onClick={() => navigate('/book/1')}>
              <div className={ styles.cardImage }>
                <img src={ sample } alt='Sample Image'/>
              </div>
              <div className={ styles.cardInfo }>
                <span className={ styles.title }>Book of Mormon</span>
                <span className={ styles.price }>₦1000</span>
              </div>
            </div>

          </div>
          <div className={ styles.controls }>
            <button>
              <IoChevronBackOutline />
            </button>
            <button>
              <IoChevronForwardOutline />
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default Shop;
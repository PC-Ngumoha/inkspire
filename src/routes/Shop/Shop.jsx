import Banner from '../../components/Banner/Banner';
import { FaSearch } from 'react-icons/fa';
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
      id: 1,
      name: 'Less than ₦1000'
    },
    {
      id: 2,
      name: '₦1000 - ₦4000'
    },
    {
      id: 3,
      name: 'Above ₦4000'
    }
  ]
}

const Shop = () => {
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
          Book grid will be displayed here
        </article>
      </main>
    </>
  );
};

export default Shop;
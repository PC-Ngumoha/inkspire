import { useState, useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import { FaSearch }  from 'react-icons/fa';
import styles from './Shop.module.scss';

// COMMMENTED OUT TILL I IMPLEMENT PAGINATION
// import { IoChevronBackOutline,
//   IoChevronForwardOutline
// } from 'react-icons/io5';



const fields = {
  categories: [
    {
      id: 1,
      name: 'All',
      selected: false
    },
    {
      id: 2,
      name: 'Arts & Creativity',
      selected: false
    },
    {
      id: 3,
      name: 'Historical & Cultural',
      selected: false
    },
    {
      id: 4,
      name: 'Romance & Relationships',
      selected: false
    }
  ],
  priceRange: [
    {
      id: 1 ,
      name: 'All',
      selected: false
    },
    {
      id: 2 ,
      name: 'Less than ₦1000',
      selected: false
    },
    {
      id: 3,
      name: '₦1000 - ₦4000',
      selected: false
    },
    {
      id: 4,
      name: 'Above ₦4000',
      selected: false
    }
  ]
}

const Shop = () => {
  const navigate = useNavigate();
  const books = useLoaderData();

  // Related to the filter fields
  const [categories, setCategories] = useState(fields.categories);
  const [ranges, setRanges] = useState(fields.priceRange);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    // setting selected category
    setCategories((prev) => {
      for (let i = 0; i < prev.length; i++) prev[i].selected = false;
      prev[currentCategory].selected = true;
      return [...prev];
    });

    // updating the current selected price range filter
    setRanges((prev) => {
      for (let i = 0; i < prev.length; i++) prev[i].selected = false;
      prev[priceRange].selected = true;
      return [...prev];
    });
  }, [currentCategory, priceRange]);

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
              categories.map((filter, idx) => (
                <button
                  key={filter.id}
                  className={
                    filter.selected
                    ? styles.selected
                    : styles.normal
                  }
                  onClick={ () => setCurrentCategory(idx) }
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
              ranges.map((filter, idx) => (
                <button
                  key={filter.id}
                  className={
                    filter.selected
                    ? styles.selected
                    : styles.normal
                  }
                  onClick={ () => setPriceRange(idx) }
                >
                  {filter.name}
                </button>
              ))
            }
          </div>
        </aside>
        <article>
          <strong>Currently displaying &quot;{
            categories[currentCategory].name
          }&quot; books</strong>
          <div className={ styles.container }>
          {
            books.map(book => (
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
                  <span className={ styles.price }>₦{ book.price }</span>
                </div>
              </div>
            ))
          }

          </div>
          {/* THIS PART WILL BE USEFUL
          WHEN I IMPLEMENT PAGINATION */}
          {/* <div className={ styles.controls }>
            <button>
              <IoChevronBackOutline />
            </button>
            <button>
              <IoChevronForwardOutline />
            </button>
          </div> */}
        </article>
      </main>
    </>
  );
};

export default Shop;
import { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { FaSearch } from "react-icons/fa";
import styles from "./Shop.module.scss";

// COMMMENTED OUT TILL I IMPLEMENT PAGINATION
// import { IoChevronBackOutline,
//   IoChevronForwardOutline
// } from 'react-icons/io5';

const priceRangeChoices = {
  LESS_THAN_N1000: "Less than ₦1000",
  N1000_TO_N4000: "₦1000 - ₦4000",
  ABOVE_N4000: "Above ₦4000",
};

const fields = {
  categories: [
    {
      id: 1,
      name: "All",
      selected: false,
    },
    {
      id: 2,
      name: "Arts & Creativity",
      selected: false,
    },
    {
      id: 3,
      name: "Historical & Cultural",
      selected: false,
    },
    {
      id: 4,
      name: "Romance & Relationships",
      selected: false,
    },
  ],
  priceRange: [
    {
      id: 1,
      name: "All",
      selected: false,
    },
    {
      id: 2,
      name: "Less than ₦1000",
      selected: false,
    },
    {
      id: 3,
      name: "₦1000 - ₦4000",
      selected: false,
    },
    {
      id: 4,
      name: "Above ₦4000",
      selected: false,
    },
  ],
};

const Shop = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  // console.log(data);

  // Related to the filter fields
  const [categories, setCategories] = useState(fields.categories);
  const [ranges, setRanges] = useState(fields.priceRange);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [priceRange, setPriceRange] = useState(0);
  const [books, setBooks] = useState(data);
  // const [search, setSearch] = useState('');

  // Filter by price range
  // BUGS Difficult to keep track of previous filtering
  useEffect(() => {
    // updating the current selected price range filter
    setRanges((prev) => {
      for (let i = 0; i < prev.length; i++) prev[i].selected = false;
      prev[priceRange].selected = true;
      return [...prev];
    });

    const handlePriceRangeFiltering = () => {
      // Implement filtering and update books state
      let filteredBooks;

      switch (ranges[priceRange].name) {
        case priceRangeChoices.LESS_THAN_N1000:
          filteredBooks = books.filter((book) => book.price < 1000);
          console.log(filteredBooks);
          break;

        case priceRangeChoices.N1000_TO_N4000:
          filteredBooks = books.filter(
            (book) => book.price >= 1000 && book.price <= 4000
          );
          break;

        case priceRangeChoices.ABOVE_N4000:
          filteredBooks = books.filter((book) => book.price > 4000);
          break;

        default:
          filteredBooks = data;
      }

      setBooks(filteredBooks);
    };

    handlePriceRangeFiltering();
  }, [priceRange]);

  // Filter by category
  // BUGS Difficult to keep track of previous filtering
  useEffect(() => {
    // setting selected category
    setCategories((prev) => {
      for (let i = 0; i < prev.length; i++) prev[i].selected = false;
      prev[currentCategory].selected = true;
      return [...prev];
    });

    // Utitlity functions for filtering the books listed on the shelf
    const handleCategoryFiltering = () => {
      if (categories[currentCategory].name !== "All") {
        // Implement filtering and update the books state
        const filteredBooks = books.filter(
          (book) => book.category === categories[currentCategory].name
        );
        console.log(filteredBooks);
        setBooks(filteredBooks);
      } else {
        setBooks(data);
      }
    };

    handleCategoryFiltering();
  }, [currentCategory]);

  return (
    <>
      <Banner displayText="Shop" />
      <main className={styles.shop}>
        <aside>
          <div className={styles.searchBar}>
            <FaSearch />
            <input
              type="text"
              role="search"
              aria-label="book filter"
              placeholder="Search"
            />
          </div>
          <div>
            <span className={styles.heading}>Categories</span>
            {categories.map((filter, idx) => (
              <button
                key={filter.id}
                className={filter.selected ? styles.selected : styles.normal}
                onClick={() => setCurrentCategory(idx)}
              >
                {filter.name}
              </button>
            ))}
          </div>
          <div>
            <span className={styles.heading}>Filter by price</span>
            {ranges.map((filter, idx) => (
              <button
                key={filter.id}
                className={filter.selected ? styles.selected : styles.normal}
                onClick={() => setPriceRange(idx)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </aside>
        <article>
          <strong>
            Currently displaying &quot;{categories[currentCategory].name}&quot;
            books
          </strong>
          <div className={styles.container}>
            {books.map((book) => (
              <div
                key={book.id}
                className={styles.card}
                onClick={() => navigate(`/book/${book.id}`)}
              >
                <div className={styles.cardImage}>
                  <img src={book.images[0]} />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.title}>{book.title}</span>
                  <span className={styles.price}>₦{book.price}</span>
                </div>
              </div>
            ))}
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

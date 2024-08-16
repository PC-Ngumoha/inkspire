import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiQuillInk, GiShoppingBag } from 'react-icons/gi';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import styles from './Navbar.module.scss';
import { concatClasses } from '../../utils/helpers';

const routes = {
  pages: [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Shop',
      path: '/shop'
    }
  ],
  preferences: [
    {
      id: 3,
      name: 'Wishlist',
      path: '/wishlist'
    },
    {
      id: 4,
      name: <GiShoppingBag />,
      path: '/cart'
    }
  ]
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return  !open ? (
    <nav className={ styles.navbar } role="navigation" aria-label="main navigation">
      <ul className={
        concatClasses(styles.pages, styles.group) }>
        {
          routes.pages.map((item) => (
            <li key={ item.id } className={ styles.navOption }>
              <Link to={ item.path }> { item.name }</Link>
            </li>
          ))
        }
      </ul>
      <span className={ styles.brand }>
        <GiQuillInk /> Inkspire
      </span>
      <ul className={
        concatClasses(styles.preferences, styles.group) }>
        {
          routes.preferences.map((item) => {
            if (item.id === 4) {
              return (
                <li key={ item.id } className={ styles.cart }>
                  <Link to={ item.path }> { item.name } 0 </Link>
                </li>
              )
            } else {
              return (
                <li key={ item.id } className={ styles.navOption }>
                  <Link to={ item.path }> { item.name }</Link>
                </li>
              )
            }
          })
        }
      </ul>
      <CiMenuFries
        className={ styles.openDropdown }
        onClick={ () => setOpen(true) }
      />
    </nav>
  ) : (
    <div className={ styles.dropdown }>
      <IoClose
        onClick={ () => setOpen(false) }
        className={ styles.closeDropdown }
      />
      <ul className={ styles.pages }>
        {
          routes.pages.map((item) => (
            <li key={ item.id } className={ styles.items }>
              <Link to={ item.path }> { item.name }</Link>
            </li>
          ))
        }
      </ul>
      <ul className={ styles.preferences }>
        {
          routes.preferences.map((item) => {
            if (item.id === 4) {
              return (
                <li key={ item.id } className={ styles.items }>
                  <Link to={ item.path }> { item.name } 0 </Link>
                </li>
              )
            } else {
              return (
                <li key={ item.id }>
                  <Link to={ item.path }> { item.name }</Link>
                </li>
              )
            }
          })
        }
      </ul>
    </div>
  );
}

export default Navbar;

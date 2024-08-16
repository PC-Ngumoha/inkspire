import styles from './Banner.module.scss';
import PropTypes from 'prop-types';

const Banner = ({ displayText }) => {
  return (
    <div className={ styles.banner }>
      <span>{displayText}</span>
    </div>
  )
};

Banner.propTypes = {
  displayText: PropTypes.string.isRequired,
};

export default Banner;
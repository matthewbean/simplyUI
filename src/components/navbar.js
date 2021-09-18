import React from 'react'
import PropTypes from 'prop-types';
import styles from './navbar.module.css'

const Navbar = ({ options, style }) => {
  return <nav style={style} className={styles.navbar}></nav>
}
Navbar.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
};
export default Navbar
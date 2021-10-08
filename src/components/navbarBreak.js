import React from 'react'
import PropTypes from 'prop-types';
import styles from './navbarBreak.module.css'

const NavbarBreak = ({ options, style }) => {
  return <nav style={style} className={styles.navbarBreak}></nav>
}
NavbarBreak.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
};
export default NavbarBreak
import React from 'react'
import PropTypes from 'prop-types';
import styles from './navbar.module.css'

const Navbar = ({ options, style, children }) => {
  if (options?.fluid){
    return <nav style={style} className={styles.navbar}>
      <div className= {styles.fluidContainer}>
        {children}
      </div>
    </nav>
  }
    return <nav style={style} className={styles.navbar + ' ' + styles.notFluid}>{children}</nav>
}
Navbar.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
};
export default Navbar
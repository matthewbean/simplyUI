import React from 'react'
import PropTypes from 'prop-types';
import styles from './fluidContainer.module.css'

const FluidContainer =({ options, children }) => {
  return <div className={styles.fluidContainer}>
    {children}
  </div>
}
FluidContainer.propTypes = {
  options: PropTypes.object
};
export default FluidContainer
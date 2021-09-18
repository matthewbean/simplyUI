import React from 'react'
import PropTypes from 'prop-types';
import styles from './container.module.css'

const Container =({ options, children }) => {
  return <div className={styles.container}>
    {children}
  </div>
}
Container.propTypes = {
  options: PropTypes.object
};
export default Container
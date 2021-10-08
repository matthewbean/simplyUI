import React from 'react'
import PropTypes from 'prop-types';
import styles from './reset.module.css'

const Reset = ({  style, children }) => {
  return <div style={style} className={styles.reset}>{children}</div>
}
Reset.propTypes = {
  style: PropTypes.object,
};
export default Reset
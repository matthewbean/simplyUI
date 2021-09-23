import React from 'react'
import PropTypes from 'prop-types';
import styles from './typography.module.css'

const Typography = ({ options, style, children }) => {
  return <div style={style} className={styles.typography}>{children}</div>
}
Typography.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
};
export default Typography
import React from 'react'
import PropTypes from 'prop-types';
import styles from './button.module.css'

const Button = ({ onClick, options, style, children }) => {
  return <button style={style} onClick={onClick} className={styles.button}>{children}</button>
}
Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  options: PropTypes.object,
  text: PropTypes.string
};
export default Button
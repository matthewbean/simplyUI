import React from 'react'
import PropTypes from 'prop-types';
import styles from './button.module.css'

const Button = ({ text, onClick, options, style, children }) => {
  return <button style={style} onClick={onClick} className={styles.button}>{text}{children}</button>
}
Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  options: PropTypes.object,
  text: PropTypes.string
};
export default Button
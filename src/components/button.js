import React from 'react'
import PropTypes from 'prop-types';
import styles from './button.module.css'

const Button = (props) => {
  return <button {...props} className={styles.button + ' ' + (props?.options?.rounded?styles.rounded: '')}>{props.children}</button>
}
Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  options: PropTypes.object,
  text: PropTypes.string
};
export default Button
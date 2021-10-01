import React from 'react'
import PropTypes from 'prop-types';
import styles from './card.module.css'

const Card = (props) => {
  const { style, children, options }=props
  return <div style={style} className={styles.card  + ' ' + (props?.options?.rounded?styles.rounded: '')}>{children}</div>
}
Card.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
  text: PropTypes.string
};
export default Card
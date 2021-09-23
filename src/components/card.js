import React from 'react'
import PropTypes from 'prop-types';
import styles from './card.module.css'

const Card = ({ text, options, style, children }) => {
  return <div style={style} className={styles.card}>{children}</div>
}
Card.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
  text: PropTypes.string
};
export default Card
import React from 'react'
import PropTypes from 'prop-types';
import styles from './input.module.css'

const Input = (props) => {
  const { options, name, type } =props;
  let inputProps={...props, label:undefined}
  return (
  <div className={styles.inputGroup}>
    {options?.label &&<label htmlFor={name}>{options?.label}:</label>}
    <input {...inputProps} type={type ?? 'text'} className={styles.input}></input>
  </div>
  )
}
Input.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
  text: PropTypes.string
};
export default Input
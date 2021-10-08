import React from 'react'
import PropTypes from 'prop-types';
import styles from './flexItem.module.css'

const FlexItem =({ options, children, columns }) => {
  let stylesList=columns.split(' ')

  return <div className={stylesList.map((item)=>styles[item]).join(' ') + ' ' + styles.flexItem}>
    {children}
  </div>
}
FlexItem.propTypes = {
  options: PropTypes.object
};
export default FlexItem
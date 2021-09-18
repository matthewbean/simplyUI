import React, {useState} from 'react'
import PropTypes from 'prop-types';
import styles from './pagination.module.css'
import Button from './button'
const Pagination =({ options, children }) => {
  if (!options){
    return(<div>Pagination requires option of pageLength to be set.</div>)
  }
  const { pageLength } = options
  const pagesNumber=Math.ceil(children.length/pageLength)
  const [state, setState] =useState({page: 1, pages: pagesNumber})
  const handleNext= ()=>{
    if (state.page>=state.pages){
      setState({...state, page:1})
    } else {
      setState({...state, page:state.page+1})
    }
  }
  const handlePrevious= ()=>{
    if (state.page<=1){
      setState({...state, page: state.pages})
    } else {
      setState({...state, page:state.page-1})
    }
  }
  return <div className={styles.pagination}>
    {children.filter((item, i)=>i<=pageLength*state.page-1 && i> pageLength*state.page-pageLength-1).map((item)=>item)}
    <div className={styles.controls}>
    <Button className={styles.button} onClick={handlePrevious}>Previous</Button>
    <Button className={styles.button} onClick={handleNext}>Next</Button>
    </div>
  </div>
}
Pagination.propTypes = {
  options: PropTypes.object
};
export default Pagination
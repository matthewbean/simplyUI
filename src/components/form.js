import React, { useState } from 'react'
import Input from './input'
import PropTypes from 'prop-types';
import styles from './form.module.css'
import { colorLuminance } from '../utilities/utils'; 

const Form = ({ options,onSubmit, style, children }) => {
  let initialState={}
  children.forEach(element => {
    if (element.type==='input' || element.type.name === 'Input'){
      if (!element.props.name){
        console.error('Inputs must have a name property.')
      } else {
        initialState[element.props.name]=''
      }
    }
  });
  const [state, setState]=useState(initialState)
  const handleSubmit = (e)=>{
    if (options?.preventDefault || options?.provenDefault === undefined){
      console.log('prevent default')
      e.preventDefault()
    }
    if (onSubmit){
      onSubmit(state)
    } else {
      console.log('form results: ', state)
    }
  }
  const handleChange = (e)=>{
    setState({...state, [e.target.name]:e.target.value})
  }
  return <form style={style} onSubmit={handleSubmit} className={styles.form}>{children.map((item, i)=>{
    if (item.type ==='input'){
      return <input {...item.props} type={item.props.type ?? 'text'} onChange={(e)=>handleChange(e)} value={state[item.props.name]}></input>
    }   else if (item.type.name === 'Input' && item.props.type === 'submit'){
      let primary=getComputedStyle(document.documentElement).getPropertyValue('--primary')
      return <Input {...item.props} style={{background:`linear-gradient(145deg, ${colorLuminance(primary, 0.17)}, ${colorLuminance(primary, 0.1)})`}} ></Input>
    }
    else if (item.type.name === 'Input'){
      return <Input {...item.props} type={item.props.type ?? 'text'} onChange={(e)=>handleChange(e)} value={state[item.props.name]}></Input>
    }
     else {
       return item
     }
  })}</form>
}
Form.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
  text: PropTypes.string
};
export default Form
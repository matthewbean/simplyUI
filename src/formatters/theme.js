import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { shade } from '../utilities/utils';

const Theme = (props) => {
  useEffect(() => {
    let root = document.documentElement;
    if (props?.theme){
      for (const property in props.theme) {
        root.style.setProperty(property, props.theme[property]);
      }
      if (props.theme['--primary']){
        if (!props.theme['--dark-gradient']){
        root.style.setProperty('--dark-gradient', shade(-.05, props.theme['--primary'], false))
        }
        if (!props.theme['--light-gradient']){
        root.style.setProperty('--light-gradient', shade(.03, props.theme['--primary'], false))
        }
      }
      if (props.theme['--background']){
        if (!props.theme['--dark-shadow']){
          root.style.setProperty('--dark-shadow', shade(-.35, props.theme['--background'], false))
        }
        if (!props.theme['--light-shadow']){        
        root.style.setProperty('--light-shadow', shade(.79, props.theme['--background'], true))
        }
      }
    }
    
  }, [])

  return <>{props.children}</>
}
Theme.propTypes = {
  options: PropTypes.object,
  text: PropTypes.string
};
export default Theme
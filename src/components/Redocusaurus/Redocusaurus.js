import React from 'react';
import { RedocStandalone } from 'redoc';
import './styles.css';

/**
 *
 * @param {{
 *  spec: string
 * }} props
 */
function Redocusaurus(props) {
  return (
    <RedocStandalone 
      specUrl={props.spec}
      options={{
        scrollYOffset: 'nav'
      }}
    />
  );
}

export default Redocusaurus;

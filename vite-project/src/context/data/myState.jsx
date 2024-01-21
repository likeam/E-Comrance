import React from 'react';
import myContext from './myContext';

function MyState(props) {
    const state = {
        name: 'Hania',
        age: '6 Year'
    }

    const color = 'red';
  return (
    <myContext.Provider value={{state,color}}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState
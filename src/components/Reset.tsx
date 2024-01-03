import React from 'react'
import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { initialState } from './UseMemo';
import { Button } from 'react-bootstrap';
function Reset() {
    const {dispatch}=useContext(TodoContext)

      function btnReset ()
    {
        dispatch({type:'RESET_TASK',paylod:initialState})
    }
  return (
    <><Button variant='contained' onClick={btnReset}>Reset</Button></>
  )
}

export default Reset
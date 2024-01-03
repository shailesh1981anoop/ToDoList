import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddForm() {
    const navigate = useNavigate();
  return (
    <div><Button
    variant="contained"
    onClick={() => {
      navigate("/UseMemo");
    }}
  >
    Add User Name
  </Button></div>
  )
}

export default AddForm
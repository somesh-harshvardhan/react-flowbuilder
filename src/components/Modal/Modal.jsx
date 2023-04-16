import React from 'react'
import { Modal as MUIModal } from '@mui/material'
const Modal = ({open,handleOpen,handleClose,cb=()=>{}}) => {
  
  return (
    <MUIModal onClose={handleClose} open={open} >
        <h1 style={{top : '50%',left : '50%',height : '200px',background : '#fff',position : 'absolute'}}>This is modal</h1>
        <button>Create new node</button>
        <button onClick={()=>cb()}>Cancel new Node</button>
    </MUIModal>
  )
}

export default Modal
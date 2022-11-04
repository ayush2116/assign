import React from 'react'
import { TextField, Stack } from '@mui/material'
import './Text.css'
const Text = () => {
  
  return (
   
    <div spacing={4}>
         <div direction = 'row' spacing ={2}>
        <TextField  
        variant='outlined'
        placeholder='name'
        InputProps={{
          className: 'input',
          disableUnderline: true,
        
        }}
        />
        <TextField  
        variant='outlined'
        placeholder='name'
        InputProps={{
          className: 'input',
          disableUnderline: true,
        
        }}
        />
    </div>
    </div>
  )
}

export default Text

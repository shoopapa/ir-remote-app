import { IconButton } from '@material-ui/core';
import React from 'react';


interface IrButtonType {
  onClick: Function;
  name: string;
  children: React.ReactNode
  disabled?: boolean;
}

const IrButton = ({onClick, name, children, disabled}:IrButtonType) => {
  return (
    <IconButton
      style={{padding:30}}
      disabled={disabled ?? false}
      onClick={()=>onClick(name)}
      size='medium'
      color="primary"
      aria-label={name}
    >
      {disabled ? <div style={{width:35, height:35}}/> : children }
  </IconButton>
  )
}

export default IrButton
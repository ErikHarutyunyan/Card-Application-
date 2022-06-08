import React from 'react'
import ButtonWrapper from './Button.styles'

const Button = ({title="",onClick}) => {
  return (
    <ButtonWrapper type='button' onClick={onClick}>{title}</ButtonWrapper>
  )
}

export default Button
import React from 'react'
import { Link } from 'react-router-dom'

function Button({ children, onClick, variant, to }) {

  const baseStyles = 'custom-button'

  const variantStyles ={
    default: "",
    arrowBtn: "buttons",
    scrollBtn: "scrollBtn",
  }

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variantStyles[variant]}`}>
        {children}
      </Link>
    )
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button
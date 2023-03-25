import React from 'react'

export const Footer = () => {
  let foot_style =
  {
    position: "relative",

    width: "100%"
  }

  return (
    <footer className="bg-dark text-light py-3 text-center" style={foot_style}>

      Copyright &copy; TodoList.com
    </footer>
  )
}


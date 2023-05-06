import React from 'react'
import logo from '../1batlogo.png'
import './style.css'

export const Footer = () => {
  return (
    <div>
      <img className="logo" src={logo} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"/>


    </div>
  )
}
export default Footer;

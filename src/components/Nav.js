import React from 'react'
import logo from '../1batlogo.png'
import './style.css'

export const Nav = () => {

  return (
    <div style={{backgroundColor: 'black'}} className='header'>
      <img className="logo" src={logo} data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"/>
    {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button> */}

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body"
  style={{fontSize: '25px'
  }}>
    <h5 id="offcanvasTopLabel">
    </h5>
    <a href="./Drums">DRUM MACHINE</a> <br />
    <a href="#">MARKETING</a><br />
    <a href="#">APPS</a> <br />
    <a href="#">PRESS</a> <br />
    MORE...
  </div>
</div>
    </div>
  )
}
export default Nav;

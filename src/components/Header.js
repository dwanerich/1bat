import React from 'react'
import logo from '../1batlogo.png'

export const Header = () => {
  return (
    <div>
      <img className="logo" src={logo} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"/>
    {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button> */}

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <h5 id="offcanvasTopLabel">
    <a href="./Drums">About</a> <br />
  <a href="#">Services</a> <br />
  <a href="#">Clients</a> <br />
  <a href="#">Contact</a> <br />
    </h5>
    MORE...
  </div>
</div>
    </div>
  )
}
export default Header;

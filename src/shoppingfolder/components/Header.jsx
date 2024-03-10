import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
    <div className='left'>
      <div className="title">
        <h1>Shooping Mall</h1>
      </div>
    </div>
    <div className='center'>
      <ul>
        <li>Women</li>
        <li>Men</li>
        <li>Childern</li>
        <li>Beauty</li>
      </ul>
    </div>
    <div className="search">
      <input type="text" placeholder='search ...' />
    </div>
    <div className='right'>
      <div className="signin">
        Signin / Signup
      </div>
      <div className="cart">
        Cart
      </div>
    </div>
  </div>
  )
}

export default Header
import React from 'react'
import "../Style/Style.css"

export const Header = () => {
  return (
    <nav className=''>
      <div className="container">
        <a href="#">Company logo</a>
        <div className='nav_container'>
          <ul>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Other's</a></li>
          </ul>
        </div>
      </div>
      <div className="button">
        <button className='nav_btn'>signup</button>
      </div>
    </nav>
  )
}

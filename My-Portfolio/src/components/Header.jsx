import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
   <nav>
    <a href='/' className='sitetitle'>Dheeraj Mehra</a>
    <ul>
      <li>
        <a href='/Profile'>Home</a>
      </li>
      <li>
        <a href='/About'>About</a>
      </li>
    </ul>
   </nav>
  
  )
}

export default Header
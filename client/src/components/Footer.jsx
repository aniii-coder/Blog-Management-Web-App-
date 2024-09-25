import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footerCategories'>
        <li><Link id='footerMenu' to='/posts/categories/Snacks'>Snacks</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Lunch'>Lunch</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Dinner'>Dinner</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Brunch'>Brunch</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/SouthIndian'>South Indian</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Continental'>Continental</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Italian'>Italian</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/NonVeg'>Non-veg</Link></li>
      </ul>
      <hr />
      <span className='footerCopyright'>Owned by:- Aniket Singh</span>
      <div className="footerCopyright">Copyright &copy; 2024 recipe.com</div>
    </footer>
  )
}

export default Footer
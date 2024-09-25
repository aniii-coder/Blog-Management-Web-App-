import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../thumbnailAvatar/icon1.jpeg'
import Icon1 from '../thumbnailAvatar/icon1.jpg'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose} from 'react-icons/ai'

import { UserContext } from '../context/userContext';

const Header = () => {
  const { currentUser} = useContext(UserContext)
  return (
    <nav>
      <div className="container ">
        <Link to='/' className='nav__logo'>
          <img src={Icon1} alt="" id='img1' />
        </Link>
        <div className="animateClass"><span class="move">Hello! Welcome to my Recipe Sharing App.</span></div>
        {currentUser?.id &&<ul className='nav__menu'>
          <li ><Link to={`/profile/${currentUser.id}`} id='navMenu'>{currentUser?.name}</Link></li>
          <li ><Link to='/create' id='navMenu'>Create Recipe</Link></li>
          <li ><Link to='/authors' id='navMenu'>Chef's</Link></li>
          <li ><Link to='/logout' id='navMenu'>Logout</Link></li>
        </ul>}
        {!currentUser?.id &&<ul className='nav__menu'>
          <li ><Link to='/authors' id='navMenu'>Chef's</Link></li>
          <li ><Link to='/login' id='navMenu'>Login</Link></li>
        </ul>}
        <button className="nav__toggle-btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default Header
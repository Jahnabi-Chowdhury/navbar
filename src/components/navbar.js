import React, { useState } from 'react'
import "./navbar.css"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <nav className='main-nav'>

        <div className='logo'>
            <h2>
                <span>C</span>lass
                <span>A</span>ssignment
            </h2>
        </div>
        <div className =  'menu-link'>
            <ul>
                <li>
                    <a href="blank">Home</a>
                </li>
                <li>
                    <a href="blank">About</a>
                </li>
                <li>
                    <a href="blank">Service</a>
                </li>
                <li>
                    <a href="blank">Contact</a>
                </li>
            </ul>
        </div>
        <div className='social-media'>
        <ul className='social-media-desktop'>
            <li>
                <a href="https://www.youtube.com/@FreedominThought" target={'blank'}><FaFacebookSquare classname='facebook'/></a>
            </li>
            <li>
                <a href="https://www.youtube.com/@FreedominThought"target={'blank'}><FaInstagramSquare className ='instagram'/></a>
            </li>
            <li>
                <a href="https://www.youtube.com/@FreedominThought"target={'blank'}><FaYoutubeSquare className='youtube'/></a>
            </li>
        </ul>
        <div className='hamburger-menu'> 
        <a href="blank" onClick = "() => setShowMediaIcons(!showMediaIcons)">
            <GiHamburgerMenu/></a>
        </div>
        </div>


    </nav>
    <section className='hero-section'>
        <p>Welcome to</p>
        <h1>Class Assignment</h1>

    </section>

    </>
  )
}
export default Navbar

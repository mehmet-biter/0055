import React from 'react'
import Image from 'next/image'
import twitter from '../../public/TwitterSquared.svg'
import facebook from '../../public/Facebook.svg'
import discord from '../../public/DiscordBubble.svg'
const footer = () => {
  return (
    <div className="footer-1">
      <div className="section1">
        <div className="column1" >
        <Image src='/logo-f.svg' alt='logo' className='logo-f-1' width={100} height={100}/>  
          <h1 className='logo-title-f'>Lorem ipsum</h1>
          <p className='logo-descp-f'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="column ancor">
          <h3>Lorem</h3>
          <ul>
            <li><a href="/page1">About Us</a></li>
            <li><a href="/page2">Explore More</a></li>
            <li><a href="/page3">Features</a></li>
            <li><a href="/page4">Advantages</a></li>
            <li><a href="/page4">Blogs & Articles</a></li>
          </ul>
        </div>
        
        <div className="column ancor">
          <h3>Lorem</h3>
          <ul>
            <li><a href="/page1">Learn</a></li>
            <li><a href="/page2">Exchage</a></li>
            <li><a href="/page3">Spot</a></li>
            <li><a href="/page4">P2P Trade</a></li>
            <li><a href="/page4">Market</a></li>
            {/* <li><a href="/page4">Send Crypto</a></li>
            <li><a href="/page4">Testimonials</a></li> */}
          </ul>
        </div>
        
        <div className="column ancor">
          <h3>Lorem</h3>
          <ul>
            <li><a href="/page1">Terms & Conditions</a></li>
            <li><a href="/page2">Privacy</a></li>
            <li><a href="/page3">Payments</a></li>
            <li><a href="/page4">Misson</a></li>
            <li><a href="/page4">Trade</a></li>
          </ul>
        </div>
        
      </div>
      <div className="section2">
        <h1>Social Media</h1>
        <div className="icon-container">
            <a href=""><Image src={twitter} alt='twitter' width={50} height={50}/></a>
            <a href=""><Image src={facebook} alt='facebook' width={50} height={50}/></a>
            <a href=""> <Image src={discord} alt='discord' width={50} height={50}/></a>
        </div>
      </div>
      <div className="section3">
        <div className="sec-top">
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
        </div>
        <div className="sec-bottom">
            <p>All Rights and Copyrights Reserved.</p>
        </div>    
      </div>
    </div> 
     )
}

export default footer
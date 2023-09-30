import React from 'react'
import Image from 'next/image'
const appsection = () => {
  return (
    <div className='app-section-container'>
        <div className="app-section-content">
            <h1>Trade To Your <span style={{color:'#FF914D'}}>Convenience</span> and <span style={{color:'#FF914D'}}>Anywhere</span></h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="app-store">
                <div className="hero-section-applestore">
                    <Image src='/apple.svg' alt='google-play' width={20} height={20}/>
                    <div className='apple-detail'>
                        <h6>Download on the</h6>
                        <h4>App Store</h4>
                    </div>
                </div> 
                <div className="hero-section-applestore">
                    <Image src='/play.svg' alt='google-play' width={20} height={20}/>
                    <div className='apple-detail'>
                        <h6>Get it On</h6>
                        <h4>Google Play</h4>
                    </div>
                </div> 
            </div>
               
        </div>
    </div>
  )
}

export default appsection
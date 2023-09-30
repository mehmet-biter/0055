import React from 'react'
import Image from 'next/image'
function hero() {
  return (
    <div className='hero-section'>
        <div className="hero-section-content">
            <h1>Emerging <span style={{color:'#FF914D'}}>Trading</span> and <span style={{color:'#FF914D'}}>Exchange</span> Platform</h1>
            <p>Join 200,000+ traders and exchange worldwide that have choosed to tade with us.</p>
            <button className='btn-hero-section'>Start Trading</button>
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

export default hero
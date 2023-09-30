import React from 'react'
import Image from 'next/image'
import Crown from '../../public/Crown.svg'
import CoinWallet from '../../public/CoinWallet.svg'
import Unlock from '../../public/Unlock.svg'
const trade = () => {
  return (
    <div className='trade-container'>
        <h1>Trade With Ease</h1>
        <p>We care about efficiency and safety about our clients and traders 24/7 throughout the month and year.</p>
        <div className="trade-cards">
            <div className="col-lg-4">
                <div className="trade-card">
                        <Image src={Crown} alt='trading-1' width={80} height={80}/>
                        <h6>Our <span style={{color:'#FF914D'}}>Licenses</span></h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="trade-card">
                        <Image src={CoinWallet} alt='trading-1' width={80} height={80}/>
                        <h6>Your <span style={{color:'#FF914D'}}>Fund</span></h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="trade-card">
                        <Image src={Unlock} alt='trading-1' width={80} height={80}/>
                        <h6>Your <span style={{color:'#FF914D'}}>Privacy</span></h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default trade
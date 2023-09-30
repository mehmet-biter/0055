import React from 'react'
import Image from 'next/image'
import stakingimg from '../../public/staking.svg'
const staking = () => {
  return (
    <div className='bot-container' style={{backgroundColor:'#fff'}}>
        <div className="col-md-6 wc">
            <div className="wallet-img1">
                <Image src={stakingimg} alt='wallet' width={534} height={499}/>
            </div>
        </div>
        <div className="col-md-6 wc">
            <h1 className='wallet-title1'>Start <span style={{color:'#FF914D', fontWeight:600}}>Earning </span>Through Staking</h1>
            <p className='wallet-p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='btn-custom-landing'>Explore More</button>
        </div>
    </div>
      )
}

export default staking
import React from 'react'
import Image from 'next/image'
import walletimg from '../../public/wallet-img.svg'
const wallet = () => {
  return (
    <div className='wallet-container'>
        <div className="col-md-6 wc">
            <h1 className='wallet-title'>Hot and cold <span style={{color:'#FF914D', fontWeight:600}}>wallet Security</span></h1>
            <p className='wallet-p'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='btn-custom-landing'>Explore More</button>
        </div>
        <div className="col-md-6 wc">
            <div className="wallet-img">
                <Image src={walletimg} alt='wallet' width={534} height={499}/>
            </div>
            
        </div>
    </div>
  )
}

export default wallet
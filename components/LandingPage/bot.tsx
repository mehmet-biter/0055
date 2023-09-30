import React from 'react'
import Image from 'next/image'
import botimg from '../../public/bot-img.svg'
const bot = () => {
  return (
    <div className='bot-container'>
        <div className="col-md-6 wc">
            <div className="wallet-img">
                <Image src={botimg} alt='wallet' width={534} height={499}/>
            </div>
        </div>
        <div className="col-md-6 wc">
            <h1 className='wallet-title'><span style={{color:'#FF914D', fontWeight:600}}>Automated </span>Bot Trading</h1>
            <p className='wallet-p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='btn-custom-landing'>Create Now</button>
        </div>
    </div> 
     )
}

export default bot
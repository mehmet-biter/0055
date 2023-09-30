import React from 'react'
import Image from 'next/image'
import referimg from '../../public/refer.svg'
const refer = () => {
  return (
    <div className='wallet-container' style={{backgroundColor:'#FFFBF9'}}>
        <div className="col-md-6 wc">
            <h1 className='wallet-title'>Earn and Trade Together, Refer Friends</h1>
            <p className='wallet-p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <button className='btn-custom-landing'>Learn More</button>
        </div>
        <div className="col-md-6 wc">
            <div className="wallet-img">
                <Image src={referimg} alt='wallet' width={534} height={499}/>
            </div>
            
        </div>
    </div>
      )
}

export default refer
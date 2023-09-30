import React from 'react'
import Image from 'next/image'
import iPhone16 from '../../public/iPhone16.svg'
const newtotrade = () => {
  return (
    <div className='newtrade-container'>
        <div className="newtrade">
            <div className="col-lg-6 ntt">
                <h1 className='newtrade-title'>New To Trading?</h1>
                <p className='newtrade-p'>Learn more about trading and exchanging with us.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className='newtrade-btn'>Start Now</button>
            </div>
            <div className="col-lg-6">
                <div className="newtrade-img">
                    {/* <Image src={iPhone16} alt="newtrade"  width={379} height={497} className='newtrade-img1'/> */}
                    <div className="newtrade-img1"></div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default newtotrade
import React from 'react'
import Image from 'next/image'
import onlinesupport from '../../public/OnlineSupport.svg'
import note from '../../public/Note.svg'
import shield from '../../public/UserShield.svg'
const assistance = () => {
  return (
    <div className='assistance-container'>
        <h1>Need Assistance?</h1>
        <div className="assistance-section">
            <div className="col-lg-4">
                <div className="assistance-card">
                    <Image src={onlinesupport} alt='online-support' width={80} height={80}/>
                    <div className='assistance-card-content'>
                        <h6>Chat Support</h6>
                        <p>Get 24/7 chat support with our friendly customer service agents at your service.</p>
                        <a href="">Start Now</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="assistance-card">
                    <Image src={note} alt='online-support' width={80} height={80}/>
                    <div className='assistance-card-content'>
                        <h6>FAQs</h6>
                        <p>View FAQs for detailed instructions on specific features.</p>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="assistance-card">
                    <Image src={shield} alt='online-support' width={100} height={80}/>
                    <div className='assistance-card-content'>
                        <h6>Policies</h6>
                        <p>Feel free to read the terms and conditions and the policies we have made for traders.</p>
                        <a href="">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default assistance
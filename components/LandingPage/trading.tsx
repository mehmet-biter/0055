import React,{useState} from 'react'
import Image from 'next/image'
import Account from '../../public/Account.svg'
import moneystack from '../../public/moneystack.svg'
import Handshake from '../../public/Handshake.svg'
import forward from '../../public/forward.svg'
import back from '../../public/back.svg'
const Trading = () => {
    const cardData = [
        {
          image: '/Account.svg',
          title: 'Create an account',
          description: 'Create an account on the website or on the application',
        },
        {
          image: '/Handshake.svg',
          title: 'Make a deal',
          description: 'Make a deal on the website on the trading page and withdraw',
        },
        {
          image: '/moneystack.svg',
          title: 'Make a deposit',
          description: 'Make a cash deposit to your account and proceed with dealing',
        },
      ];
      
        const [currentPage, setCurrentPage] = useState(0);
      
        const totalPages = cardData.length;
      
        const handleNextPage = () => {
          setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        };
      
        const handlePrevPage = () => {
          setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
        };
      
        const displayCard = cardData[currentPage];
  return (
    <div className='trading-container'>
        <div className="col-lg-6">
            <h1 className='trading-title'>Start Trading and Investing Now?</h1>
            <p className='trading-p'>Join 200,000+ traders and exchange worldwide that have choosed to tade with us.</p>
            <button className='btn-trading'>Create account</button>
        </div>
        <div className="col-lg-6">
            <div className="trading-cards">
                <div className="trading-card1">
                    <Image src={Account} alt='trading-1' width={50} height={50}/>
                    <h6>Create an account</h6>
                    <p>Create an account on the website or on the application</p>
                </div>
                <div className="trading-card2">
                    <Image src={Handshake} alt='trading-1' width={50} height={50}/>
                    <h6>Make a deal</h6>
                    <p>Make a deal on the website on the trading page and withdraw</p>
                </div>
                <div className="trading-card3">
                    <Image src={moneystack} alt='trading-1' width={50} height={50}/>
                    <h6>Make a deposit</h6>
                    <p>Make a cash deposit to you account and proceed with dealing</p>
                </div>
            </div>
            <div className="trading-cards-mobile">
            <div className={`trading-card trading-card${currentPage + 1}`}>
                <Image src={displayCard.image} alt={`trading-${currentPage + 1}`} width={50} height={50}/>
                <h6>{displayCard.title}</h6>
                <p>{displayCard.description}</p>
            </div>
            <div className="t-pagination1">
                <Image src={back} alt='left' width={40} height={40} onClick={handlePrevPage}/>
                <Image src={forward} alt='left' width={40} height={40} onClick={handleNextPage}/>
            </div>

            </div>
        </div>    
    </div>
  )
}

export default Trading
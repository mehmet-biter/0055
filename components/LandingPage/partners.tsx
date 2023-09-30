import React from 'react'
import Image from 'next/image'
import graphpos from '../../public/graph-pos.svg'
const logos = [
    '/partners/1.svg',
    '/partners/2.svg',
    '/partners/3.svg',
    '/partners/4.svg',
    '/partners/5.svg',
    '/partners/6.svg',
    '/partners/7.svg',
    '/partners/8.svg',
    '/partners/9.svg',
    '/partners/10.svg',
    
  ];
const partners = () => {
  return (
    <div className="partner-section">
      <h2>Our Partners</h2>
      <div className="partner-logos">
        {logos.map((logo, index) => (
          <div key={index} className="partner-logo">
            <Image src={logo} alt={`Partner Logo ${index + 1}`} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default partners
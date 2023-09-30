import React from 'react'
import Image from 'next/image'
import graphpos from '../../public/graph-pos.svg'
interface TokenCardProps {
    name: string;
    value: string;
    image: string;
    graphimage: string;
    graphvalue: string;
  }
  const TokenCard: React.FC<TokenCardProps> = ({ name, value, image, graphimage, graphvalue }) => {
    return (
            <div className='card-token'>
                <div className="card-l">
                    <div className='token-image'>
                        <Image src={image} alt='bitcoin' width={50} height={50}/>
                    </div>
                    <div className='token-detail'>
                        <h6>{name}</h6>
                        <p>$ {value}</p>
                    </div>
                </div>
                <div className="card-r">
                <Image src={graphimage} className='graph-line' alt='arrow' width={50} height={50}/>
                <p style={{color:graphimage==='/graph-neg.svg'?"red":"#15C63C"}}>{graphvalue}</p>
                </div>
                

            </div>
    )
}

export default TokenCard
import React from 'react'
import './slideshoes.css'

import homeshoes1 from '/home/homeshoes (1).jpg'
import homeshoes2 from '/home/homeshoes (2).jpg'
import homeshoes3 from '/home/homeshoes (3).jpg'
import homeshoes4 from '/home/homeshoes (4).jpg'

const products = [
  { id:1,
    title: "Men's Canvas Piper",
    price: "$90",
    color: "Blizzard",
    image: homeshoes1,
  },
  {  id:2,
    title: "Men's Tree Runner Go",
    price: "$120",
    color: "Natural White/Rustic Orange",
    image: homeshoes2,
  },
  {   id:3,
    title: "Women's Tree Glider",
    price: "$135",
    color: "Blizzard/Hanami Plum",
    image: homeshoes3,
  },
  {   id:4,
    title: "Men's Tree Dasher 2 - Utility",
    price: "$145",
    color: "Natural White/Rustic Brown",
    image: homeshoes4,
  },
];

function slideshoes() {
  return (
    <>
    <div className='slideshoes'>
        <div className="slidecard">
                    { products.map((shoes)=>(
                        <div key={shoes.id} className="newslide">
                            <img src={shoes.image} alt="" height={100}/>

                            <div className="shoestexthome">
                                <h3>{shoes.title}</h3>
                                <h4 className='hclass'>{shoes.color}</h4>
                                <h3 className='hclass'>{shoes.price}</h3>
                            </div>
                        </div>
                    ))
                }
            
        </div>
      
    </div>
    </>
  )
}

export default slideshoes

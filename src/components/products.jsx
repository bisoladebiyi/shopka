import React from 'react'
import { Link } from 'react-router-dom'
import heart from '../img/Vector.svg'

const Products = ({ product }) => {
  
    return (
        <div className="product-container">
            <div className="product-cards">
                
                    {product.map((product) => (    
                        <div className="product-preview" key={product.id}>
                            <a href="">
                                <img src={product.img} alt=""/>
                                <p>{product.desc}</p>
                                <p>{product.price}</p>
                                <p>{product.info}</p>
                                <button><img src={heart} alt=""/> Watch</button>
                            </a>
                             
                        </div>
                    ))}
                
               
            </div>
            
        </div>
    )
}

export default Products

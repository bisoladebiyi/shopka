import Categories from './categories'
import { useState, useEffect } from 'react';
import Products from './products';

const Home = () => {

   const [ product , setProduct ] = useState(null)

    useEffect( () => {
        fetch("http://localhost:3000/products")
          .then(res => {
            return res.json()
          })
          .then(data => {
            setProduct(data)
          })
  
    },[])
    
    return ( <div>
        <Categories />
        { product && <Products product={product} /> }
    </div> );
}
 
export default Home;
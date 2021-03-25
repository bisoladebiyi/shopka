import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [ product , setProduct ] = useState(null)

    useEffect( () => {
        fetch(url)
          .then(res => {
            return res.json()
          })
          .then(data => {
            setProduct(data)
          })
  
    },[url])
    return { product }
}
export default useFetch;
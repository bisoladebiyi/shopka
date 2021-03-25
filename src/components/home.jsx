import Categories from './categories'
import Products from './products';
import useFetch from '../useFetch';



const Home = () => {

 const { product } = useFetch("http://localhost:3000/products")

    return ( <div>
        <Categories />
        { product && <Products product={product} /> }
    </div> );
}
 
export default Home;
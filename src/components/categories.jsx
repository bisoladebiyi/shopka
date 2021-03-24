import hanger from "../images/hanger.svg"
import pets from "../images/pets.svg"
import nuclear from "../images/nuclear-station.svg"
import ship from "../images/ship-wheel.svg"
const Categories = () => {
    return ( 
    <div className="categories">
        <div>
         <img src={hanger}  alt=""/>
         <a href="#">Clothing & Shoes</a>
        </div>
        <div>
         <img src={pets}  alt=""/>
         <a href="#">Pets</a>
        </div>
        <div>
         <img src={nuclear}  alt=""/>
         <a href="#">Toys & Entertainment</a>
        </div>
        <div>
         <img src={ship}  alt=""/>
         <a href="#">Vintage</a>
        </div>
        <div>
         <img src={hanger}  alt=""/>
         <a href="#">Clothing & Shoes</a>
        </div>
    </div> 
    );
}
 
export default Categories;
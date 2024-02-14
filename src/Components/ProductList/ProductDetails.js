import { useState } from "react";
import Button from "./Button";
// so to tell react that when the button is clicked and the value of this product count variable changes, it should run the component function again, we need to use a function called as useState  
//usestate function-only use inside a component function or in a inner function
let style = {
    padding: '0px,20px',
    margin: 10,
    fontSize: 20//'font-size:20,px is not neceesary snice react will bw doing that automatically
}



function ProductDetails(props) {
    let badgeClass = 'badge-margin-left-40 badge';
    badgeClass += props.isAvailable ? ' bg-success ' : ' bg-danger';

    // state of the product is independent  from the state of other products
    // useState- is a react hook, function is going to return an array:
    //1 elemnt of that array is going to be a spatial whose value will change.
    // 2 elemnt of that array is going to be a function  which we can then call to assign a new value to that special variable
    // let productCount=0;
    let [productCount, updateCount] = useState(0)
    function displayFormattedProductCount() {
        return productCount > 0 ? productCount : '0';
    }

    let incrementProductCount = function () {
        //     productCount++;
        //     console.log(productCount);

        updateCount(++productCount)
    }
    let decrementProductCount = function () {
        // productCount--;
        // console.log(productCount);
        updateCount(--productCount)
    }

    return (
        <div>
            <div> <h6 className="d-flex align-items-center justify-content-between mt-1 font-weight-bold my-0">{props.price}</h6>
                <Button eventHandler={decrementProductCount} disable={productCount == 0} children="2222">-</Button>


                <span style={style}>{displayFormattedProductCount()}</span>
                <Button eventHandler={incrementProductCount}>+</Button>
            </div>

            <span className={badgeClass}>{props.isAvailable ? ' Available' : ' Unavailable'}</span>
        </div>


    )

}
export default ProductDetails;
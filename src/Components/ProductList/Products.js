
import ProductDetails from "./ProductDetails";

// let productCount=5;
// let ImageUrl=require("../images/Untitled (7).png");// if we writing require
// let style={
//     padding:'0px,20px',
//    margin:10,
//     fontSize:20//'font-size:20,px is not neceesary snice react will bw doing that automatically
// }
// let isAvailable ='Available';

// let badgeClass ='badge-margin-left-40 badge';
// badgeClass += isAvailable === 'Available' ?  ' bg-success ' : ' bg-danger';// this is for displaying one badge







// function displayFormattedProductCount(){
//      return productCount> 10 ? productCount:'zero';
// }
// here parameter props, so this props is going to be an object and this object we have id,name,description....as its properties, and the values we are assigning to those properties willl be the value for those properties

function Products(props) {


    // let badgeClass ='badge-margin-left-40 badge';
    // badgeClass += props.isAvailable ?' bg-success ' : ' bg-danger';

    return (
        <li className="list-group-item" style={{backgroundColor: props.isAvailable ?'white':'lightgreen' }}>
            <div className="media align-items-lg-centre flex-column flex-lg-row p-3 d-flex justify-content-between">

                <div> <h3 className="mt-0 font-weight-bold mb-2">{props.name}</h3>
                    <p className=" mb-0 small">{props.description} </p>
                    {/* <div> <h6 className="d-flex align-items-center justify-content-between mt-1 font-weight-bold my-0">{props.price}</h6>
            <button className="btn btn-primary mt-3" style={{marginLeft:10}}>-</button>
            
            <span  style={style}>{displayFormattedProductCount()}</span>
            <button className="btn btn-primary mt-3">+</button></div>
            <span className={badgeClass}>{props.isAvailable ? ' Available' : ' Unavailable'}</span> */}

                    <ProductDetails price={props.price} isAvailable={props.isAvailable} />



                </div>


                {/* <img  src={require("../images/Untitled (7).png")}/>  */}
                {/* <img src={ImageUrl}/> */}
                <img src={(props.imageUrl)} style={{ width: 100, height: 150 }} alt="" />
            </div>
        </li>

    )// here for img - src , alt classname all are called atributes
    //STYLES can be given inline also.{{}}

}

export default Products;
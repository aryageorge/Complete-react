import Products from './Products';





// here we need to loop our , ie, we adding the products 5 times, when we add other array we should add again our <product></product> component, so in angular we use ngFor, but instead we here use" map" function to loop.
//map - will loops an aray , transforms an array  and return a array with a transformed  elemnt 
function ProductList(props) {
    // console.log(props.newProducts);
    // let[newProductList,updateProductList]=useState(products);
    // updateProductList([props.newProducts, ...products])//when we use a spread opeartor into any array, it expands the array into individual elemnts
// if(props.newProductLists.length === 0)return<h3>no product Available</h3>
    return props.newProductLists.length === 0 ? <h3>no product Available</h3>:// if incase no products are displayed.
     (
        

        <ul className="list-group shadow">

            {
                props.newProductLists.map((product) => {
                    return (
                        <Products
                            key={product?.pID}
                            id={product?.pID}
                            name={product?.pName}
                            description={product?.desc}
                            isAvailable={product?.isAvailable}
                            imageUrl={product?.image}
                            price={product?.price}

                        ></Products>)
                })}
            {/* <Products id={products[0].pID}
                    name={products[0].pName}
                    description={products[0].desc}
                    isAvailable={products[0].isAvailable}
                    imageUrl={products[0].image}
                    price={products[0].price}

                ></Products>
                <Products id={products[1].pID}
                    name={products[1].pName}
                    description={products[1].desc}
                    isAvailable={products[1].isAvailable}
                    imageUrl={products[1].image}
                    price={products[1].price}

                ></Products>
                <Products id={products[2].pID}
                    name={products[2].pName}
                    description={products[2].desc}
                    isAvailable={products[2].isAvailable}
                    imageUrl={products[2].image}
                    price={products[2].price}

                ></Products>
                <Products id={products[3].pID}
                    name={products[3].pName}
                    description={products[3].desc}
                    isAvailable={products[3].isAvailable}
                    imageUrl={products[3].image}
                    price={products[3].price}

                ></Products>
                <Products id={products[4].pID}
                    name={products[4].pName}
                    description={products[4].desc}
                    isAvailable={products[4].isAvailable}
                    imageUrl={products[4].image}
                    price={products[4].price}

                ></Products> */}

        </ul>
    )
}
export default ProductList;
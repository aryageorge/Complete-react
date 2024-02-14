import { useState } from "react";
import ProductForm from "./ProductForm";




function CreateProduct(props){
   let[showForm,updateshowForm] = useState(false)



    // child-parent
    function onCreateProduct(product){
        // console.log(product);
        props.createProduct(product)
    }

function onCreateNewProduct(){
    updateshowForm(true)
} 
function onSubmittedOrCancelProduct(){
    updateshowForm(false)
}




    return(
        <div  style={{backgroundColor:'white', padding:'10px, 20px ,20px,10px'}}>
           {!showForm && <button onClick={onCreateNewProduct} style={{margin:'20px'}}> Create Product</button>}
{ showForm && <ProductForm createProduct={onCreateProduct} onCancel={onSubmittedOrCancelProduct}></ProductForm>}
        </div>
    );
}
export default CreateProduct;
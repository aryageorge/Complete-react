//form
// difference between ONinput and OnChange  event listerner is that oninput will be called evrytime , we make a key stroke in that input element and can be only used in input elemnets but onchange can be used in other elmnts other than input elemnt.  

import { useState } from "react";
import CreateProduct from "./CreateProduct";



function ProductForm(props) {
    // document.getElementById('name').addEventListener("change",function(event){

    // }), this is plain js logic
    //using mutiple state approach
    let [pName, updateName] = useState('');
    let [pPrice, updatePrice] = useState('');
    let [pDescription, updateDescription] = useState('');
    let [pAvailable, updateAvailable] = useState(false);
    let [pImage, updateImage] = useState('');
    // SINGLE STATE-video 26
    //updating state depends on previous value-video 27

//there is default beahiour of html forms specially with this type submit , if it's clicked  , overall form elemnt will be submitted. 
// we use state variable instead of global variables, bese if we use state variables, when the value of state changes it revaluvates the component function and display it on webpage  . 
// by two-way data binding , we can clear the form when we click in the add button.
// parent to child -props.
// child- parent-


    function nameInputHandler(event) {
        updateName(event.target.value);


    }
    function priceInputHandler(event) {
        updatePrice(event.target.value);


    }
    function descriptionInputHandler(event) {
        updateDescription(event.target.value);


    }
    function availabilityInputHandler(event) {
        updateAvailable(event.target.checked);


    }
    function imageInputHandler(event) {
        updateImage(event.target.value);


    }
    function createProductEventHandler(event){
        event.preventDefault();
        let product={
            // pID: 1,
            pName:pName,
            desc: pDescription,
            isAvailable:Boolean(pAvailable) ,
            image: pImage,
            price:Number (pPrice)
    }
    // console.log(product);
    props.createProduct(product)

    updateName('');
    updatePrice('');
    updateDescription('');
    updateAvailable(false);
    updateImage('')
   
    props.onCancel();
    }

    return (
        <form className="row g-3"  style={{padding:'30px'}}  onSubmit={createProductEventHandler}>
            <div className="col-md-6">
                <label for="name">Product Name</label>
                <input type="text"

                    className="form-control"
                    id="name"
                    placeholder="Product Name"
                    value={pName}
                    onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label for="price">Product Price</label>
                <input type="number"

                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    placeholder="Product Price"
                    value={pPrice}
                    onChange={priceInputHandler} />
            </div>
            <div className="form-group">
                <label for="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    placeholder="Product Description"
                    value={pDescription}
                    onChange={descriptionInputHandler} />

            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="isAvailable"checked={pAvailable} onChange={availabilityInputHandler} />
                <label className="form-check-label" for="isAvailable">Is product available in stock?</label>
            </div>
            <div className="form-group">
                <label for="select-image ">select product images</label>
                <input type="file" className="form-control" id="select-image"  value={pImage} onChange={imageInputHandler} />
            </div>
            <button type="submit" className="btn btn-primary"> Add Product</button>
            <button type="button" onClick={props.onCancel} className="btn btn-primary"> Cancel</button>
        </form>);



};
export default ProductForm;

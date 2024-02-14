
import './app.css';

import CreateProduct from './Components/CreateProduct/CreateProduct';
import FilterProduct from './Components/FilterProduct/FilterProduct';
import ProductList from './Components/ProductList/ProductLIst';

import { useState } from 'react';

//array creted, inside array create an object

const products = [
  {
    pID: 1,
    pName: 'Fresh Milk',
    desc: 'Youre welcome! If you have any more questions or need further assistance, feel free to ask. Happy coding!',
    isAvailable: true,
    image: 'images/milk-1887234_1280.jpg',
    price: '250'


  },
  {
    pID: 2,
    pName: 'Fresh Cream',
    desc: 'Youre welcome! If you have any more questions or need further assistance, feel free to ask. Happy coding!',
    isAvailable: false,
    image: 'images/pudding-1719824_1280.jpg',
    price: '280'


  },
  {
    pID: 3,
    pName: 'Cow Milk',
    desc: 'Youre welcome! If you have any more questions or need further assistance, feel free to ask. Happy coding!',
    isAvailable: true,
    image: 'images/yogurt-1612787_1280.jpg',
    price: '203'


  },
  {
    pID: 4,
    pName: 'Almond Milk',
    desc: 'Youre welcome! If you have any more questions or need further assistance, feel free to ask. Happy coding!',
    isAvailable: false,
    image: 'images/Untitled (7).png',
    price: '320'


  },
  {
    pID: 5,
    pName: 'Fresh juices',
    desc: 'Youre welcome! If you have any more questions or need further assistance, feel free to ask. Happy coding!',
    isAvailable: true,
    image: 'images/milk-1887234_1280.jpg',
    price: '250'


  }
]



function App() {
  // let[newProduct, updateProduct] = useState(null)
  let [newProductList, updateProductList] = useState(products);
  let [filterTextValue, updatefilterText] = useState('all');
  let filteredProductList = newProductList.filter((product) => {
    if (filterTextValue === 'Avaliable') {
      return product.isAvailable === true;
    }
    else if(filterTextValue==='unAvaliable')
    {
      return product.isAvailable === false;
    }
    else{
      return product;
    }


  })

  //child-parent(Createproduct-app)-lifting state up
  function createProduct(product) {
    product.pID = newProductList.length + 1;
    updateProductList([product, ...newProductList]);
  }

  //PARENT-CHILD
  function onFilterValueSelected(filterValue) {
    updatefilterText(filterValue);
  }

  return <div className='row'>
    <div className="col-lg-8 mx-auto">
      <CreateProduct createProduct={createProduct}></CreateProduct>
      <FilterProduct onFilterValueSelect={onFilterValueSelected}></FilterProduct>
      <ProductList newProductLists={filteredProductList} ></ProductList>

    </div>

  </div>

  // create a component using a function
  // let msg='my'
  //  // jsx-markup // browser will not understand jsx, instead we wants to make it plain js.
  // return(<div>
  //      <h1 className="header" >This is  {msg} first  component{10+5}</h1>
  //      <input type="text"></input>
  // <p className="para">hey, am a person</p>
  // </div>)// if more than one html, then should put a brackets, 
  //jsx is simply an xml, jsx follows xml rules, so every element in the html should be closed.<input></input>,img etc...



}

export default App;

import React, { useEffect, useState } from "react";

const ManageServices = () => {

    // get all products 
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch(`https://mighty-coast-78516.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                
                setDisplayProducts(data.products);
            });
    }, []);

    // delete product 

    const handleRemoveOrder = (id)=>{
      const confirm = window.confirm('Are You Sure To Delete?')
      if(confirm){
          const url = `https://mighty-coast-78516.herokuapp.com/services/${id}`;
      fetch(url,{
          method:'DELETE'
      })
      .then(res=> res.json())
      .then(data=>{
          if(data.deletedCount>0){
              alert('Deleted Successfully')
              const remainingProducts =displayProducts.filter(product => product._id !== id);
              setDisplayProducts(remainingProducts);
          }
      })
      }
  }

  return (
    <div>
      <h1 className="text-center py-4">Manage Products</h1>

      <ul className="row">
                    {
                        displayProducts.map(product => <li
                          key={product._id}
                          className="col-6 p-4 "
                        >
                        <h4>Name: {product.title}</h4>                     
                        <h4>Price: {product.price}</h4>
                        <button onClick={()=>handleRemoveOrder(product._id)}>Delete Product</button>
                        </li> )                 
                   }
      </ul>
    </div>
  );
};

export default ManageServices;
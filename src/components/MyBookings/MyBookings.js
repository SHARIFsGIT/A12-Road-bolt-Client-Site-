import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://mighty-coast-78516.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleRemoveOrder = (id)=>{
    const confirm = window.confirm('Are You Sure To Delete?')
    if(confirm){
        const url = `https://mighty-coast-78516.herokuapp.com/booked_service/${id}`;
    fetch(url,{
        method:'DELETE'
    })
    .then(res=> res.json())
    .then(data=>{
        if(data.deletedCount>0){
            alert('Deleted Successfully')
            const remainingUsers =orders.filter(order => order._id !== id);
            setOrders(remainingUsers);
        }
    })
    }
}



  return (
    <div>
      <h1>MyBookings</h1>

      <ol>
                {orders.map(order => <li
                    key={order._id}
                >Name: {order.name} <br /> Email: {order.email}
                <button onClick={()=>handleRemoveOrder(order._id)}>Remove Order</button>
                 </li>)}
            </ol>

    </div>
  );
};

export default MyBookings;

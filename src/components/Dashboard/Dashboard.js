import React, { useEffect, useState } from "react";
import {Link, useRouteMatch} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";


const Dashbaord = () => {
  let { url } = useRouteMatch();
  const { user,logOut } = useAuth();
  const [isAdmi, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://mighty-coast-78516.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmi);
  return (
    <div>
      <div className="dashboard-container">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h4>Dashboard</h4>
              {
                !isAdmi && <div>
                  <Link to="/dashboard/payment">
                <li className="dashboard-menu mt-5">Payment</li>
              </Link>

              <Link to={`${url}/UserBookingList`}>
                <li className="dashboard-menu mt-5">Booking list</li>
              </Link>

              <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>

              <button className="mt-5" onClick={logOut}>Logout</button>
                </div>
              }
              
              {isAdmi && <div className="admin-dashboard">
                  <Link to={`${url}/addService`}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>
                
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/manageServices`}>
                  <li className="dashboard-menu">Manage Service</li>
                </Link>
                <Link to={`${url}/BookingList`}>
                <li className="dashboard-menu ">Booking list</li>
              </Link>
                      <button className="mt-5" onClick={logOut}>Logout</button>
                        
                </div>
                }
              
            </div>
          </div>
          <div className="col-md-9">
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
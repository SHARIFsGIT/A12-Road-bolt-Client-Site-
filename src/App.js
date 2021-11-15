import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import OrderReview from './components/OrderReview/OrderReview';
import Orders from './components/Orders/Orders';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ContactUs from './components/ContactUs/ContactUs';
import Dashboard from './components/Dashboard/Dashboard';
import AddServices from './components/AddServices/AddServices';
import ManageServices from './components/ManageServices/ManageServices';
import Review from './components/Review/Review';
import MyBookings from './components/MyBookings/MyBookings';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import AuthProvider from './context/AuthProvider';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
             <Home></Home>
            </Route>
            <Route exact path="/review">
            <OrderReview></OrderReview>
            </Route>
            <Route exact path="/addService">
            <AddServices></AddServices>
          </Route>
          <Route exact path="/manageOrders">
            <ManageServices></ManageServices>
          </Route>
            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
             <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/orders">
              <Orders></Orders>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/dashboard/review">
                <Review></Review>
              </Route>
              <Route exact path="/dashboard/payment">
                <Payment></Payment>
              </Route>
              <Route exact path="/dashboard/BookingList">
                <Orders></Orders>
              </Route>
              <Route exact path="/dashboard/UserBookingList">
                <MyBookings></MyBookings>
              </Route>
              <Route exact path="/dashboard/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path="/dashboard/addService">
                <AddServices></AddServices>
              </Route>
              <Route exact path="/dashboard/manageServices">
                <ManageServices></ManageServices>
              </Route>
              
            <Route exact path="dashboard/*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import React from "react";
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "../components/Cart";
import CartPage from "../components/CartPage";
import Home from "../components/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fitnes from "../components/Fitnes";
import ProductDetails from "../components/ProductDetails";
import IdmanCloth from "../components/IdmanCloth";
import IdmanType from "../components/IdmanType";
import Brends from "../components/Brends";
import Blog from "../components/Blog";
import Qeydiyyat from "../components/Qeydiyyat";
import Giris from "../components/Giris";
import Checkout from "../components/Checkout";
import CheckoutDetails from "../components/CheckoutDetails";
import Payment from "../components/Payment";
import PaymentEnd from "../components/PaymentEnd";
import ScrollToTop from "../components/ScrollTop";
// import App1 from '../components/App1';

const AppRouter = () => {
  return (
    <div className="app-router">
      <BrowserRouter>
        <ScrollToTop />

        <Switch>
          <CartProvider>
            <Header />

            <Route path="/" component={Home} exact></Route>
            <Route path="/fitnes" component={Fitnes}></Route>
            <Route path="/idmancloth" component={IdmanCloth}></Route>
            <Route path="/idmantype" component={IdmanType}></Route>
            <Route path="/brends" component={Brends}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/cart" component={CartPage}></Route>
            <Route path="/giris" component={Giris}></Route>
            <Route path="/qeydiyyat" component={Qeydiyyat}></Route>
            <Route path="/checkout" component={Checkout}></Route>
            <Route path="/checkoutdetails" component={CheckoutDetails}></Route>
            <Route path="/pdetails" component={ProductDetails}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/paymentend" component={PaymentEnd}></Route>
          </CartProvider>
        </Switch>
        <Footer />
        {/* <App1 /> */}
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;

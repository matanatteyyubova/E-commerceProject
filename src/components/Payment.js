import React from 'react';
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Payment = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();
    return (
        <div className='payment-sec'>
               {/* ***************Payment*********** */}
      <div className="container mt-5">
        <div className="payment_form">
          <form action>
            <h4>Kart məlumatlarınızı daxil edin</h4>
            <br /><br />
            <div className="wrapperr">
              <label htmlFor="cc-number-input">Kart nömrəsi</label>
              <input type="text" maxLength={19} className="cc-number-input" placeholder="0000  0000  0000  0000" />
              <br /> <br />
              <div className="payment_content">
                <span>
                  <label htmlFor="cc-expiry-input">Bitmə tarixi</label> <br />
                  <input type="text" maxLength={5} className="cc-expiry-input" placeholder="00/00" />
                </span>
                <span>
                  <label htmlFor="cc-cvc-input">CVV</label> <br />
                  <input type="text" maxLength={3} className="cc-cvc-input" placeholder="000" />
                </span>
              </div>
              <br /> <br />
              <h4>Ödəniş məlumatları</h4>
              <br />
              <p className="paymant_amount">Ödəniş məbləği</p>
              <p className="price">{cartTotal} <span>AZN</span></p>
              <br />
             <Link to="/paymentend"> <button type="submit">Ödəniş et</button></Link>
            </div> 
          </form>
        </div>
      </div>
      {/* ***************Payment End*********** */}

        </div>
    );
};

export default Payment;
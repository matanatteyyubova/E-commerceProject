import React from "react";
import { useCart } from "react-use-cart";

const FitnesItem = (props) => {
  const { addItem } = useCart();
  return (
    <div className="card ">
      <img src={props.img} className="card-img-top" alt="err" />
      <div className="icons-text">
        <div className="boxs">
          <i class="far fa-heart"></i>
        </div>
        <div className="boxs">
          <i class="fas fa-search"></i>
        </div>
        <div className="boxs">
          <i class="far fa-copy"></i>
        </div>
      </div>
      <div className="card-body text-center ">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <p className="card-text-price">{props.price} ₼</p>
        <button
          onClick={() => addItem(props.item)}
          className="btn p-2 ps-3 pe-3"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FitnesItem;

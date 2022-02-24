import React from "react";
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";



const ProductItem = (props) => {

  const { t } = useTranslation();
  const { addItem } = useCart();

  return (
    <div id="card-dark" className="card">
      <img id='dard-mode-img' src={props.img} className="card-img-top" alt="err" />
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
       <Link to={props.to} style={{ textDecoration: "none" ,color: "black" }}> <h5 id="product-name1" className="card-title">{props.title}</h5></Link>
        <p className="card-text">{props.desc}</p>
        <p className="card-text-price">{props.price} ₼</p>
        <button
          onClick={() => addItem(props.item)}
          className="btn p-2 ps-3 pe-3"
        >
       {t('text45')}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

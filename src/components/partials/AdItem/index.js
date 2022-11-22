import React from "react";
import { Link } from "react-router-dom";
import { Item } from "./styled";

export default function AdItem(props) {
  let price = "";
  if (props.data.priceNegotiable) {
    price = "Preço Negociavel";
  } else {
    price = `R$ ${props.data.price}`;
  }

  return (
    <Item>
      <Link to={`/ad/${props.data.id}`}>
        <div className="'itemImage">
          <img src={props.data.image} alt="" />
          <div className="itemName">{props.data.title}</div>
          <div className="'itemPrice">{price}</div>
        </div>
      </Link>
    </Item>
  );
}

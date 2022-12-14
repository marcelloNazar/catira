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
    <Item className="aditem">
      <Link to={`/ad/${props.data.id}`}>
        <div className="'image">
          <img src={props.data.image} alt="100%" width="100%" />
        </div>
        <div className="itemName">{props.data.title}</div>
        <div className="'itemPrice">{price}</div>
      </Link>
    </Item>
  );
}

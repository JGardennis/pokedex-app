import React from "react";
import { Item } from "../../helpers/types";
import Card from "./Card";

const ItemsCard = (props: Item) => (
  <Card
    {...props}
    type="normal"
    to={{
      pathname: `/item/${props.id}`,
      state: { item: props },
    }}
  >
    {props.text}
  </Card>
);

export default ItemsCard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
import PizzaItem from "../PizzaItem";
import Skeleton from "../../Skeleton";
export default function PizzaList({ loading, pizza }) {
  return (
    <>
      <div className="Pizza">
        <div className="container">
          <h1 className="Pizza__h1">Все пиццы</h1>
          <ul className="Pizza__ul">
            {loading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : pizza.map((item) => <PizzaItem key={item.id} {...item} />)}
          </ul>
        </div>
      </div>
    </>
  );
}

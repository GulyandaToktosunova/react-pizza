import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/img/basket.png";
export default function NotFounBlock() {
  return (
    <div className="basket">
      <h1 className="basket__title">Корзина пустая </h1>
      <p className="basket__text">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img className="img" src={img} alt="" />
      <button className="btn">
        <span className="span">Вернуться назад</span>
      </button>
    </div>
  );
}

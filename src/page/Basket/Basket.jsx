import React from "react";
import svg from "../../assets/img/p.svg";
import m from "../../assets/img/m.png";
// import second from "../../App/";
// import { useContext } from "react";
export default function Basket() {
  // const { searchValue, setSearch } = useContext;
  return (
    <div className="cont">
      <div className="nav ">
        <div className="wrapper">
          <img className="logo" src={svg} alt="" />
          <div>
            <h1 className="title">Корзина</h1>
          </div>
        </div>

        <div className="inner">
          <img className="m" src={m} alt="" />
          <p className="text">Очистить корзину</p>
        </div>
      </div>
      <div className="pizzas">
        <p className="pizzas__text">Всего пицц:{} шт</p>
        <p className="pizzas__title">Сумма заказа:{}₽ </p>
      </div>
      <div className="btn">
        <button className="btn1">
          <span className="btn1__span"> Вернуться назад </span>
        </button>
        <button className="btn2">
          <span className="btn2__span">Оплатить сейчас</span>
        </button>
      </div>
    </div>
  );
}

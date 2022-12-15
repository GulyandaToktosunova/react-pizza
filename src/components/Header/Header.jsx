import React, { useState } from "react";
import logo from "../../assets/img/pizza.svg";
import Searchbar from "../Searchbar";
import { NavLink } from "react-router-dom";
export default function Header({ searchValue, setSearch }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <header className="header">
        <div className="container nav">
          <NavLink to="/">
            <div className="header__wrapper">
              <img src={logo} alt="" />

              <div>
                <h1 className="header__title">REACT PIZZA</h1>
                <p className="header__text">самая вкусная пицца </p>
              </div>
            </div>
          </NavLink>
          <Searchbar searchValue={searchValue} setSearch={setSearch} />
          <NavLink className="header__btn" to="/basket">
            <div className="header__inner">
              {/* <span className="">{totalPrice}</span> */}
              <span className="header__span"> {totalPrice} </span>
              <span className="header__span"> || </span>
              <span className="header__span">{total}</span>
            </div>
          </NavLink>
        </div>
      </header>
    </>
  );
}

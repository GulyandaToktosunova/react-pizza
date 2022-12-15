import React, { useState } from "react";

export default function PizzaItem({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
  category,
  rating,
}) {
  const [btn, setBtn] = useState(false);
  const [active, setActive] = useState(0);
  const [activ, setActiv] = useState(0);

  const typesElem = ["Тонкое", "Традиционное"];

  const handleClick = () => {
    setBtn((prevBtn) => prevBtn + 1);
  };
  const activeClick = (index) => {
    setActive(index);
  };
  const activClick = (index) => {
    setActiv(index);
  };
  const sizeElem = sizes.map((item, index) => {
    return (
      <li
        className={active === index ? "active" : ""}
        onClick={() => {
          activeClick(index);
        }}
        key={item}
      >
        {item}см
      </li>
    );
  });

  const typeElem = typesElem.map((item, index) => {
    return (
      <li
        className={activ === index ? "active" : ""}
        onClick={() => {
          activClick(index);
        }}
        key={index}
      >
        {item}
      </li>
    );
  });
  return (
    <li className="Pizza__item">
      <img className="Pizza__img" src={imageUrl} alt="" />
      <h2 className="Pizza__title">{title}</h2>
      <div className="Pizza__n">
        <ul className="Pizza__types">{typeElem} </ul>
        <ul className="Pizza__sizes"> {sizeElem}</ul>
      </div>

      <div className="Pizza__d">
        <h3 className="Pizza__price">от {price} ₽</h3>

        <button className="Pizza__btn" onClick={handleClick}>
          + Добавить
          <span className="Pizza__span"> {btn} </span>
        </button>
      </div>
    </li>
  );
}
/* <p className="Pizza__category">{category}</p> */
// <p className="Pizza__rating">{rating}</p>

import { useState } from "react";
import React from "react";

export default function Categories({ value, onClickCategory }) {
  const [categories, setCategories] = useState(0);

  const categ = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClick = (index) => {
    setCategories(index);
  };
  return (
    <>
      <div className="categ">
        <div className="categories">
          <ul className="categories__list">
            {categ.map((item, index) => (
              <li
                onClick={() => onClickCategory(index)}
                className={`${value === index ? "active" : ""} item`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

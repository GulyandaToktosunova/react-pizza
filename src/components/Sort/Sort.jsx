import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../Redux/Slices/filterSlices";
export default function Sort() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const list = [
    { name: "популярности (DESC)", sortProperty: "rating" },
    { name: "популярности (ASC)", sortProperty: "-rating" },
    { name: "по цене (DESC)", sortProperty: "price" },
    { name: "по цене (ASC)", sortProperty: "-price" },
    { name: "по алфавиту (DESC)", sortProperty: "title" },
    { name: "по алфавиту (ASC)", sortProperty: "-title" },
  ];
  const listClick = (index) => {
    dispatch(setSort(index));
    setOpen(true);
  };
  return (
    <div className="sort">
      <div className="sort__con">
        <b onClick={() => setOpen(!open)}>Сортировка по:</b>
        <span className="sort__span" onClick={() => setOpen(!open)}>
          {sort.name}
        </span>
      </div>
      {!open && (
        <div className="sort__open">
          <ul className="sort__list">
            {list.map((item, index) => (
              <li
                key={item.name}
                onClick={() => listClick(item)}
                className={`${
                  sort.sortProperty === item.sortProperty ? "active" : ""
                } item`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

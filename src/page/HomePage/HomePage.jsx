import React, { useContext, useEffect, useState } from "react";
import Categories from "../../components/Categories";
import Pizza from "../../components/pizza/PizzaLIst";
import Sort from "../../components/Sort";
import Paginate from "../../components/Paginate";
import { SearchContext } from "../../App";
// import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryid } from "../../Redux/Slices/filterSlices";

export default function HomePage() {
  const dispatch = useDispatch();
  const categoryid = useSelector((state) => state.filter.categoryid);

  // const { searchValue, setSearch } = useContext;
  const [pizza, setPizza] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [categoryid, setCategoryid] = useState(0);
  const [page, setPage] = useState(1);
  // const [sortType, setSortType] = useState({
  //   name: "популярности",
  //   sortProperty: "rating",
  // });

  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const setCategoryChange = (id) => {
    dispatch(setCategoryid(id));
  };

  const { searchValue } = useContext(SearchContext);
  const order = sortType.includes("-") ? "asc" : "desc";
  const sortBy = sortType.replace("-", "");
  const category = categoryid > 0 ? `&category=${categoryid} ` : "";
  const search = searchValue ? `&search=${searchValue} ` : "";
  useEffect(() => {
    fetch(
      ` https://638dae98aefc455fb2a8aa73.mockapi.io/PIZZA?page=${page}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizza(arr);
        setLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [category, sortBy, search, page, order]);
  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     sortBy=sort.sortBy
  //     category,
  //     page,
  //     order
  //   });
  // }, [category, sortBy,  page, order]);
  return (
    <>
      <Categories
        value={categoryid}
        onClickCategory={(index) => setCategoryChange(index)}
      />
      <Sort />
      <Pizza loading={loading} pizza={pizza} />
      <Paginate onChangePage={(number) => setPage(number)} />
    </>
  );
}

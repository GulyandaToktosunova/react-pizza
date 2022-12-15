import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./scss/style.scss";
import Basket from "./page/Basket";
import HomePage from "./page/HomePage";
import NotFoundBlock from "./components/NotFoundBlock";
import { useState, createContext } from "react";
export const SearchContext = createContext();
export default function App() {
  const [searchValue, setSearch] = useState("");
  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearch }}>
        <Header searchValue={searchValue} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
}

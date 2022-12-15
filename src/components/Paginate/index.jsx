import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
export default function Paginate({ onChangePage }) {
  return (
    <>
      <div className={styles.cont}>
        <ReactPaginate
          className={styles.root}
          breakLabel="..."
          previousLabel="<"
          onPageChange={(event) => onChangePage(event.selected + 1)}
          pageRangeDisplayed={9}
          pageCount={3}
          nextLabel=" >"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

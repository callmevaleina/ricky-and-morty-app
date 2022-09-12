import React from "react";
import { useState } from "react";

const Pagination = ({ changePage, currentPage, itemsPerPage, array = [] }) => {
  const [bgBtn, setBgBtn] = useState(true);

  const total = array.length;

  let pages = Math.round(total / itemsPerPage);

  if (pages * itemsPerPage < total) pages++;

  const range = [...Array(pages).keys()];

  const first = range.at(0) + 1;

  const last = range.at(-1) + 1;

  console.log(currentPage);

  return (
    <>
      {total > 0 && (
        <>
          {currentPage > first && (
            <div
              className="arrowLeft arrow"
              onClick={() => changePage(currentPage - 1)}
              key="back"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
          )}

          {last <= 6 ? (
            range.map((page) => (
              <div
                className="pages"
                style={{
                  background: currentPage === page + 1 ? "#02e602" : "#55167d",
                }}
                onClick={() => {
                  changePage(page + 1);
                }}
              >
                {page + 1}
              </div>
            ))
          ) : currentPage <= 3 ? (
            <>
              <div
                className="pages"
                style={{ background: currentPage === 1 && "#02e602" }}
                onClick={() => {
                  changePage(1);
                }}
              >
                1
              </div>
              <div
                className="pages"
                style={{ background: currentPage === 2 && "#02e602" }}
                onClick={() => {
                  changePage(2);
                }}
              >
                2
              </div>
              <div
                className="pages"
                style={{ background: currentPage === 3 && "#02e602" }}
                onClick={() => {
                  changePage(3);
                }}
              >
                3
              </div>
              <span className="dots">. . .</span>
              <div
                className="pages"
                style={{ background: currentPage === last && "#02e602" }}
                onClick={() => {
                  changePage(last);
                }}
              >
                {last}
              </div>
            </>
          ) : currentPage > 3 && currentPage <= last - 3 ? (
            <>
              <div className="firstLast" onClick={() => changePage(first)}>
                {first}
              </div>
              <span className="dots">. . .</span>
              <div
                className="pages"
                onClick={() => changePage(currentPage - 1)}
              >
                {currentPage - 1}
              </div>
              <div
                className="pages"
                style={{ background: "#02e602" }}
                onClick={() => changePage(currentPage)}
              >
                {currentPage}
              </div>
              <div
                className="pages"
                onClick={() => changePage(currentPage + 1)}
              >
                {currentPage + 1}
              </div>
              <span className="dots">. . .</span>
              <div className="firstLast" onClick={() => changePage(last)}>
                {last}
              </div>
            </>
          ) : (
            <>
              <div
                className="pages"
                style={{ background: currentPage === first && "#02e602" }}
                onClick={() => changePage(first)}
              >
                {first}
              </div>
              <span className="dots">. . .</span>
              <div
                className="pages"
                style={{
                  background: currentPage === range.at(-2) && "#02e602",
                }}
                onClick={() => changePage(last - 2)}
              >
                {last - 2}
              </div>
              <div
                className="pages"
                style={{
                  background: currentPage === range.at(-1) && "#02e602",
                }}
                onClick={() => changePage(last - 1)}
              >
                {last - 1}
              </div>
              <div
                className="pages"
                style={{ background: currentPage === last && "#02e602" }}
                onClick={() => changePage(last)}
              >
                {last}
              </div>
            </>
          )}

          {currentPage < last && (
            <div
              className="arrowRight arrow"
              onClick={() => changePage(currentPage + 1)}
              key="end"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Pagination;

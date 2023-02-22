import React from 'react';

const Pagination = ({ nextHandler, prevHandler, curPage, users, itemsPerPage }) => {
  const totalUserItems = users.length;
  const isPrevPageAvailable = curPage !== 1;
  const isNextPageAvailable = curPage * itemsPerPage < totalUserItems;
  return (
    <div className="pagination">
      <button className="btn" onClick={prevHandler} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{curPage}</span>
      <button className="btn" onClick={nextHandler} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;

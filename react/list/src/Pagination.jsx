import React from 'react';

const Pagination = ({ goNext, goPrev, curPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = curPage !== 1;
  const isNextPageAvailable = curPage * itemsPerPage < totalItems;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{curPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;

import React from 'react';
import '../Styles/Pagination.css';

const Pagination = ({ total, current, handlePage }) => {
  const pages = new Array(total).fill(0).map((el, i) => (
    <button
      key={i}
      disabled={current === i + 1}
      onClick={() => handlePage(i + 1)}
      className={`pagination-button ${current === i + 1 ? 'active' : ''}`}
    >
      {i + 1}
    </button>
  ));

  return <div className="pagination-container">{pages}</div>;
};

export default Pagination;

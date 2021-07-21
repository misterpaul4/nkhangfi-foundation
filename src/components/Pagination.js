import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="mr-2" onClick={() => paginate(1)}>
          <button>&laquo;</button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link text-success">
              {number}
            </button>
          </li>
        ))}
        <li className="ml-2" onClick={() => paginate(pageNumbers.length)}>
          <button>&raquo;</button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;

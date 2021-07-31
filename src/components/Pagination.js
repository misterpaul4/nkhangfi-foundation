import React, { useState } from 'react';
import '../css/pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [activePage, setActive] = useState(1);

  const pageNumbers = [];

  for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageClicked = value => {
    setActive(value);
    paginate(value);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="mr-2" onClick={() => pageClicked(1)}>
          <button className="page-link text-dark">&laquo;</button>
        </li>

        {pageNumbers.map(number => (
          <li key={number} className="page-item mx-1">
            <button onClick={() => pageClicked(number)} className={activePage === number ? "page-link page-active" : "page-link text-dark"}>
              {number}
            </button>
          </li>
        ))}

        <li className="ml-2" onClick={() => pageClicked(pageNumbers.length)}>
          <button className="page-link text-dark">&raquo;</button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;

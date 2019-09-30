import React from 'react';

const Pagination = () => (
  <section className="section" id="pagination">
    <h1 className="title">Pagination</h1>
    <hr />
    <nav className="pagination">
      <a className="pagination-previous is-disabled">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link">1</a>
        </li>
        <li>
          <span className="pagination-ellipsis">…</span>
        </li>
        <li>
          <a className="pagination-link">45</a>
        </li>
        <li>
          <a className="pagination-link is-current">46</a>
        </li>
        <li>
          <a className="pagination-link">47</a>
        </li>
        <li>
          <span className="pagination-ellipsis">…</span>
        </li>
        <li>
          <a className="pagination-link">86</a>
        </li>
      </ul>
    </nav>
    <br />
    <nav
      className="pagination is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">…</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 45">
            45
          </a>
        </li>
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 47">
            47
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">…</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 86">
            86
          </a>
        </li>
      </ul>
    </nav>
  </section>
);

export default Pagination;

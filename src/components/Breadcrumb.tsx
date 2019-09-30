import React from 'react';

const Breadcrumb = () => (
  <section className="section" id="breadcrumb">
    <h1 className="title">Breadcrumb</h1>
    <hr />
    <nav className="breadcrumb">
      <ul>
        <li>
          <a>Bulma</a>
        </li>
        <li>
          <a>Documentation</a>
        </li>
        <li>
          <a>Components</a>
        </li>
        <li className="is-active">
          <a>Breadcrumb</a>
        </li>
      </ul>
    </nav>
  </section>
);

export default Breadcrumb;

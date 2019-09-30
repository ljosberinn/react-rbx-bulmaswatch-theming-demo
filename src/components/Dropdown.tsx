import React from 'react';

const Dropdown = () => (
  <section className="section" id="dropdown">
    <h1 className="title">Dropdown</h1>
    <hr />
    <div className="columns">
      <div className="column">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>Dropdown button</span>
              <span className="icon is-small">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                Dropdown item
              </a>
              <a className="dropdown-item">Other dropdown item</a>
              <a href="#" className="dropdown-item is-active">
                Active dropdown item
              </a>
              <a href="#" className="dropdown-item">
                Other dropdown item
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                With a divider
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <button
              className="button is-info"
              aria-haspopup="true"
              aria-controls="dropdown-menu2"
            >
              <span>Content</span>
              <span className="icon is-small">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu2" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <p>
                  You can insert <strong>any type of content</strong> within the
                  dropdown menu.
                </p>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item">
                <p>
                  You simply need to use a <code>&lt;div&gt;</code> instead.
                </p>
              </div>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                This is a link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Dropdown;

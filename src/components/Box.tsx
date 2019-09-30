import React from 'react';

const Box = () => (
  <section className="section" id="box">
    <h1 className="title"> Box </h1>
    <hr />
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              alt="Image"
              src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong> John Smith </strong> <small> @johnsmith </small>
              <small> 31m </small>
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean efficitur sit amet massa fringilla egestas. Nullam
              condimentum luctus turpis.
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fa fa-reply"> </i>
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fa fa-retweet"> </i>
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fa fa-heart"> </i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </section>
);

export default Box;

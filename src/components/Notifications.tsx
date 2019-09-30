import React from 'react';

const Notifications = () => (
  <section className="section" id="notifications">
    <h1 className="title"> Notifications </h1>
    <hr />
    <div className="columns is-multiline">
      <div className="column is-half">
        <div className="notification ">
          <button className="delete"> </button> Lorem ipsum dolor sit amet,
          <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      </div>

      <div className="column is-half">
        <div className="notification is-primary">
          <button className="delete"> </button> Lorem ipsum dolor sit amet,
          <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      </div>

      <div className="column is-half">
        <div className="notification is-link">
          <button className="delete"> </button> Lorem ipsum dolor sit amet,
          <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      </div>

      <div className="column is-half">
        <div className="notification is-info">
          <button className="delete"> </button> Lorem ipsum dolor sit amet,
          <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      </div>

      <div className="column is-half">
        <div className="notification is-success">
          <button className="delete"> </button> Lorem ipsum dolor sit amet,
          <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      </div>

      <div className="column is-half">
        <div className="notification is-warning">
          <button className="delete"> </button> Lorem ipsum dolor sit amet,
          <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      </div>

      <div className="column is-half">
        <div className="notification is-danger">
          <button className="delete"> </button> Lorem ipsum dolor sit amet,
          <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      </div>
    </div>
  </section>
);

export default Notifications;

import React from 'react';

const Tag = () => (
  <section className="section" id="tag">
    <h1 className="title"> Tag </h1>
    <hr />
    <div className="tags">
      <span className="tag is-primary"> Primary </span>

      <span className="tag is-link"> Link </span>

      <span className="tag is-info"> Info </span>

      <span className="tag is-success"> Success </span>

      <span className="tag is-warning"> Warning </span>

      <span className="tag is-danger"> Danger </span>

      <span className="tag is-white"> White </span>

      <span className="tag is-black"> Black </span>

      <span className="tag is-light"> Light </span>

      <span className="tag is-dark"> Dark </span>

      <span className="tag is-primary is-medium"> Medium </span>
      <span className="tag is-info is-large"> Large </span>
      <span className="tag is-success">
        Bar
        <button className="delete is-small"> </button>
      </span>
      <span className="tag is-warning is-medium">
        Hello
        <button className="delete is-small"> </button>
      </span>
      <span className="tag is-danger is-large">
        World
        <button className="delete"> </button>
      </span>
    </div>
    <div className="field is-grouped is-grouped-multiline">
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-dark">npm</span>
          <span className="tag is-info">0.5.0</span>
        </div>
      </div>

      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-dark">build</span>
          <span className="tag is-success">passing</span>
        </div>
      </div>

      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-dark">chat</span>
          <span className="tag is-primary">on gitter</span>
        </div>
      </div>
    </div>
    <div className="field is-grouped is-grouped-multiline">
      <div className="control">
        <div className="tags has-addons">
          <a className="tag is-link">Technology</a>
          <a className="tag is-delete"></a>
        </div>
      </div>

      <div className="control">
        <div className="tags has-addons">
          <a className="tag is-link">CSS</a>
          <a className="tag is-delete"></a>
        </div>
      </div>

      <div className="control">
        <div className="tags has-addons">
          <a className="tag is-link">Flexbox</a>
          <a className="tag is-delete"></a>
        </div>
      </div>

      <div className="control">
        <div className="tags has-addons">
          <a className="tag is-link">Web Design</a>
          <a className="tag is-delete"></a>
        </div>
      </div>

      <div className="control">
        <div className="tags has-addons">
          <a className="tag is-link">Open Source</a>
          <a className="tag is-delete"></a>
        </div>
      </div>

      <div className="control">
        <div className="tags has-addons">
          <a className="tag is-link">Community</a>
          <a className="tag is-delete"></a>
        </div>
      </div>

      <div className="control">
        <div className="tags has-addons">
          <a className="tag is-link">Documentation</a>
          <a className="tag is-delete"></a>
        </div>
      </div>
    </div>
  </section>
);

export default Tag;

import React from 'react';

const Progress = () => (
  <section className="section" id="progress">
    <h1 className="title"> Progress bars </h1>
    <hr />

    <progress className="progress " max="100" value="15">
      15%
    </progress>

    <progress className="progress is-primary" max="100" value="15">
      15%
    </progress>

    <progress className="progress is-link" max="100" value="15">
      15%
    </progress>

    <progress className="progress is-info" max="100" value="15">
      15%
    </progress>

    <progress className="progress is-success" max="100" value="15">
      15%
    </progress>

    <progress className="progress is-warning" max="100" value="15">
      15%
    </progress>

    <progress className="progress is-danger" max="100" value="15">
      15%
    </progress>

    <progress className="progress is-small" max="100" value="15">
      15%
    </progress>
    <progress className="progress" max="100" value="30">
      30%
    </progress>
    <progress className="progress is-medium" max="100" value="45">
      45%
    </progress>
    <progress className="progress is-large" max="100" value="60">
      60%
    </progress>
    <h2 className="title is-2">Indeterminate</h2>
    <progress className="progress is-small is-primary" max="100">
      15%
    </progress>
    <progress className="progress is-danger" max="100">
      30%
    </progress>
    <progress className="progress is-medium is-dark" max="100">
      45%
    </progress>
    <progress className="progress is-large is-info" max="100">
      60%
    </progress>
  </section>
);

export default Progress;

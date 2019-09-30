import React from 'react';

const Typography = () => (
  <section className="section" id="typography">
    <h1 className="title"> Typography </h1>
    <hr />
    <div className="columns">
      <div className="column">
        <h1 className="title is-1"> Title 1 </h1>
        <h2 className="title is-2"> Title 2 </h2>
        <h3 className="title is-3"> Title 3 </h3>
        <h4 className="title is-4"> Title 4 </h4>
        <h5 className="title is-5"> Title 5 </h5>
        <h6 className="title is-6"> Title 6 </h6>{' '}
      </div>
      <div className="column">
        <h1 className="subtitle is-1"> Subtitle 1 </h1>
        <h2 className="subtitle is-2"> Subtitle 2 </h2>
        <h3 className="subtitle is-3"> Subtitle 3 </h3>
        <h4 className="subtitle is-4"> Subtitle 4 </h4>
        <h5 className="subtitle is-5"> Subtitle 5 </h5>
        <h6 className="subtitle is-6"> Subtitle 6 </h6>{' '}
      </div>
      <div className="column">
        <h1 className="title"> Title </h1>
        <h2 className="subtitle"> Subtitle </h2>
        <p className="title is-1"> Title 1 </p>
        <p className="subtitle is-3"> Subtitle 3 </p>
        <p className="title is-2"> Title 2 </p>
        <p className="subtitle is-4"> Subtitle 4 </p>
        <p className="title is-3"> Title 3 </p>
        <p className="subtitle is-5"> Subtitle 5 </p>
      </div>
    </div>
  </section>
);

export default Typography;

import React from 'react';

const Form = () => (
  <section className="section" id="form">
    <h1 className="title"> Form </h1>
    <hr />
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">Name</label>
          <p className="control">
            <input className="input" type="text" placeholder="Text input" />
          </p>
        </div>
        <div className="field">
          <label className="label">Username</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="text"
              placeholder="Text input"
              defaultValue="bulma"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
          <p className="help is-success">This username is available</p>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="text"
              placeholder="Email input"
              defaultValue="hello@"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-warning"></i>
            </span>
          </p>
          <p className="help is-danger">This email is invalid</p>
        </div>
        <div className="field">
          <label className="label">Subject</label>
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <p className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label className="checkbox">
              <input type="checkbox" /> I agree to the
              <a href="#">terms and conditions</a>
            </label>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label className="radio">
              <input type="radio" name="question" /> Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" /> No
            </label>
          </p>
        </div>
        <div className="field is-grouped">
          <p className="control">
            <button className="button is-primary">Submit</button>
          </p>
          <p className="control">
            <button className="button is-link">Cancel</button>
          </p>
        </div>
        <br />
        <h4 className="subtitle"> Disabled </h4>
        <hr />
        <div className="field">
          <p className="control">
            <input
              className="input"
              disabled
              placeholder="Disabled input"
              type="text"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <textarea
              className="textarea"
              disabled
              placeholder="Disabled textarea"
            ></textarea>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label className="checkbox is-disabled">
              <input disabled type="checkbox" /> Remember me
            </label>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label className="radio is-disabled">
              <input disabled name="question" type="radio" /> Yes
            </label>
            <label className="radio is-disabled">
              <input disabled name="question" type="radio" /> No
            </label>
          </p>
        </div>
        <div className="field is-grouped">
          <p className="control">
            <button className="button is-primary" disabled>
              Submit
            </button>
          </p>
          <p className="control">
            <button className="button" disabled>
              Cancel
            </button>
          </p>
        </div>
        <br />
        <h3 className="title"> Horizontal Form </h3>
        <hr />
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">From</label>
          </div>
          <div className="field-body">
            <div className="field is-grouped">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                  <i className="fa fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="email"
                  placeholder="Email"
                  defaultValue="alex@smith.com"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-check"></i>
                </span>
              </p>
              <p className="help is-success">This email is correct</p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Department</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option>Business development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">Already a member?</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <label className="radio">
                  <input type="radio" name="member" /> Yes
                </label>
                <label className="radio">
                  <input type="radio" name="member" /> No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Subject</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input is-danger"
                  type="text"
                  placeholder="e.g. Partnership opportunity"
                />
              </div>
              <p className="help is-danger">This field is required</p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Question</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Explain how we can help you"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label"></div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary">Send message</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 className="title">File</h3>
        <hr />
        <div className="field">
          <div className="file">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fa fa-upload"></i>
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
            </label>
          </div>
        </div>
        <div className="field">
          <div className="file has-name">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fa fa-upload"></i>
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
        <div className="field">
          <div className="file is-primary">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fa fa-upload"></i>
                </span>
                <span className="file-label">Primary file…</span>
              </span>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="file is-info has-name">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fa fa-upload"></i>
                </span>
                <span className="file-label">Info file…</span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="file is-warning is-boxed">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fa fa-cloud-upload"></i>
                </span>
                <span className="file-label">Warning file…</span>
              </span>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="file is-danger has-name is-boxed">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fa fa-cloud-upload"></i>
                </span>
                <span className="file-label">Danger file…</span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="column">
        <br />
        <h3 className="subtitle"> Styles </h3>
        <hr />
        <div className="field">
          <p className="control">
            <input
              className="input is-rounded"
              type="text"
              placeholder="Rounded input"
            />
          </p>
        </div>
        <br />
        <h3 className="subtitle"> Colors </h3>
        <hr />
        <div className="field">
          <p className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Primary input"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              className="input is-info"
              type="text"
              placeholder="Info input"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              className="input is-success"
              type="text"
              placeholder="Success input"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              className="input is-warning"
              type="text"
              placeholder="Warning input"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              className="input is-danger"
              type="text"
              placeholder="Danger input"
            />
          </p>
        </div>
        <br />
        <h3 className="subtitle"> Sizes </h3>
        <hr />
        <div className="field">
          <p className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Small input"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input className="input" type="text" placeholder="Normal input" />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Medium input"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              className="input is-large"
              type="text"
              placeholder="Large input"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <span className="select is-small">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <span className="select is-medium">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <span className="select is-large">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label is-small">Small input</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-small"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Normal input</label>
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label is-medium">Medium input</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-medium is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-medium is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label is-large">Large input</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-medium is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-medium is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-large is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-large is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <br />
        <h4 className="subtitle"> With Font Awesome icons </h4>
        <hr />
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Login</button>
          </p>
        </div>
        <br />
        <h3 className="title"> Form addons </h3>
        <hr />
        <div className="field has-addons">
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder="Find a repository"
            />
          </p>
          <p className="control">
            <a className="button is-info">Search</a>
          </p>
        </div>
        <div className="field has-addons">
          <p className="control">
            <input
              className="input is-large"
              type="text"
              placeholder="Find a repository"
            />
          </p>
          <p className="control">
            <a className="button is-info is-large">Search</a>
          </p>
        </div>
        <div className="field has-addons">
          <p className="control">
            <span className="select">
              <select>
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </select>
            </span>
          </p>
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder="Amount of money"
            />
          </p>
          <p className="control">
            <a className="button">Transfer</a>
          </p>
        </div>
        <div className="field has-addons">
          <p className="control">
            <span className="select">
              <select>
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </select>
            </span>
          </p>
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Amount of money"
            />
          </p>
          <p className="control">
            <a className="button">Transfer</a>
          </p>
        </div>
        <div className="field has-addons">
          <p className="control is-expanded">
            <span className="select is-fullwidth">
              <select name="country">
                <option defaultValue="Argentina">Argentina</option>
                <option defaultValue="Bolivia">Bolivia</option>
                <option defaultValue="Brazil">Brazil</option>
                <option defaultValue="Chile">Chile</option>
                <option defaultValue="Colombia">Colombia</option>
                <option defaultValue="Ecuador">Ecuador</option>
                <option defaultValue="Guyana">Guyana</option>
                <option defaultValue="Paraguay">Paraguay</option>
                <option defaultValue="Peru">Peru</option>
                <option defaultValue="Suriname">Suriname</option>
                <option defaultValue="Uruguay">Uruguay</option>
                <option defaultValue="Venezuela">Venezuela</option>
              </select>
            </span>
          </p>
          <p className="control">
            <button type="submit" className="button is-primary">
              Choose
            </button>
          </p>
        </div>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Find a repository"
            />
          </p>
          <p className="control">
            <a className="button is-info">Search</a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Form;

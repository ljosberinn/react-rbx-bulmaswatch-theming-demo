import React from 'react';

const Navbar = () => (

    <section className="section" id="navbar">
      <h1 className="title">Navbar</h1>
      <hr />

      <nav className="navbar ">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample1" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample2">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample2" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-link">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample3">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample3" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-info">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample4">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample4" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-success">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample5">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample5" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-warning">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample6">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample6" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-danger">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample7">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample7" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-white">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample8">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample8" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample9">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample9" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-light">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{ color: '#333' }}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{ color: '#55acee' }}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample10">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample10" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{ color: '#333' }}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{ color: '#55acee' }}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExample11">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExample11" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Modifiers
                </a>
                <a className="navbar-item " href="#">
                  Grid
                </a>
                <a className="navbar-item " href="#">
                  Form
                </a>
                <a className="navbar-item " href="#">
                  Elements
                </a>
                <a className="navbar-item is-active" href="#">
                  Components
                </a>
                <a className="navbar-item " href="#">
                  Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="#blog/">
                Blog
              </a>
              <div
                id="blogDropdown"
                className="navbar-dropdown "
                data-style="width: 18rem;"
              >
                <a
                  className="navbar-item"
                  href="/2017/03/10/new-field-element/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>
                <a
                  className="navbar-item"
                  href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                >
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>
                <a className="navbar-item" href="#blog/">
                  More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a
                            className="button is-rss is-small"
                            href="#atom.xml"
                          >
                            <span className="icon is-small">
                              <i className="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>
              <div id="moreDropdown" className="navbar-dropdown ">
                <a className="navbar-item " href="#extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://twitter.com/jgthms"
              target="_blank"
            >
              Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br />

      <h2 className="subtitle">Transparent</h2>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{color: '#333'}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{color: '#55acee'}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-burger burger" data-target="navMenuExamplet">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenuExamplet" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="#">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="#">
                Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item " href="#">
                  Overview
                </a>
                <a className="navbar-item " href="#">
                  Discover
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>
                    version
                    <p className="has-text-info is-size-6-desktop">0.4.3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/jgthms/bulma"
              target="_blank"
            >
              Github
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a id="twitter" className="button">
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>

)

export default Navbar;
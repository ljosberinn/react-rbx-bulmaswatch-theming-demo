import React, { useContext, MouseEvent } from 'react';
import { ThemeContext, ThemeType } from '../Theme';
import { Navbar, Column } from 'rbx';

const Header: React.FC = () => {
  const { AVAILABLE_THEMES, theme: currentTheme, setTheme } = useContext(
    ThemeContext,
  );

  const halfOfArray = Math.floor(AVAILABLE_THEMES.length / 2);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, theme: ThemeType) => {
    e.preventDefault();
    setTheme(theme);
  };

  return (
    <section className="hero is-primary">
      <div className="hero-head">
        <nav className="main-nav navbar ">
          <div className="container">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Change Theme</a>
                <div className="navbar-dropdown is-boxed">
                  <Column.Group>
                    <Column>
                      {AVAILABLE_THEMES.slice(0, halfOfArray).map(theme => {
                        return (
                          <Navbar.Item
                            active={theme === currentTheme}
                            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                              handleClick(e, theme)
                            }
                            key={theme}
                          >
                            {theme}
                          </Navbar.Item>
                        );
                      })}
                    </Column>
                    <Column>
                      {AVAILABLE_THEMES.slice(
                        halfOfArray,
                        AVAILABLE_THEMES.length,
                      ).map(theme => {
                        return (
                          <Navbar.Item
                            active={theme === currentTheme}
                            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                              handleClick(e, theme)
                            }
                            key={theme}
                          >
                            {theme}
                          </Navbar.Item>
                        );
                      })}
                    </Column>
                  </Column.Group>
                </div>
              </div>
            </div>
            <span className="navbar-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="navbar-end navbar-menu">
              <a
                href="https://github.com/ljosberinn/react-rbx-bulmaswatch-theming-demo/stargazers"
                className="navbar-item"
              >
                <img
                  src="https://img.shields.io/github/stars/ljosberinn/react-rbx-bulmaswatch-theming-demo.svg"
                  alt="GitHub stars"
                />
              </a>
              <a
                className="navbar-item"
                href="//github.com/ljosberinn/react-rbx-bulmaswatch-theming-demo/issues"
                target="_blank"
              >
                <i className="fa fa-bug"></i>&nbsp;Report an issue
              </a>
              <a
                className="navbar-item"
                href="//github.com/ljosberinn/react-rbx-bulmaswatch-theming-demo"
                target="_blank"
              >
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{currentTheme}</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;

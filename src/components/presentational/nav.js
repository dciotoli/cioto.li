import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Page from './page';

class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleHideMenu = this.handleHideMenu.bind(this);

    this.state = {
      menuVisible: false,
    };
  }

  handleShowMenu() {
    this.setState({
      menuVisible: true,
    });
  }

  handleHideMenu() {
    this.setState({
      menuVisible: false,
    });
  }

  render() {
    const {
      links,
      title,
      collapseWidth,
    } = this.props;

    const {
      menuVisible,
    } = this.state;

    return (
      <React.Fragment>
        <style>
          {`@media screen and (max-width:${collapseWidth}px) {
              nav.navbar .nav-links {
                opacity: 0;
                filter: blur(10px);
                transform: translateY(100%);
                transition: opacity 0.5s, filter 0.5s;
                pointer-events: none;
                font-size: 20px;
                flex-flow: column;
                position: absolute;
                top: 0px;
                bottom: 0px;
                left: 0px;
                right: 0px;
                background-color: rgba(0, 0, 0, 0.9);
                justify-content: center;
                line-height: 2em;
              }

              nav.navbar .nav-links > .nav-item > a {
                color: rgb(232,232,232);
              }

              nav.navbar .menuIcon {
                display:flex;
              }

              nav.navbar .nav-links.visible {
                opacity: 1;
                filter: blur(0px);
                transform: translateY(0);
                pointer-events: auto;
              }

              nav.navbar .nav-links.visible .nav-close {
                display:block;
              }
            }
          `}
        </style>
        <nav className="navbar">
          <Page style={{ display: 'flex' }}>
            <div key="brand" className="nav-brand">
              <Link to="/">{title}</Link>
            </div>
            <div key="links" className={`nav-links${menuVisible ? ' visible' : ''}`}>
              <div className="nav-close">
                <FontAwesomeIcon icon="times" onClick={() => this.handleHideMenu()} />
              </div>
              {links.map(x => (
                <div key={x.title} className="nav-item">
                  <Link onClick={() => this.handleHideMenu()} to={x.path}>{x.title}</Link>
                </div>
              ))}
            </div>
            <div key="icon" className="menuIcon">
              <FontAwesomeIcon icon="bars" onClick={() => this.handleShowMenu()} />
            </div>
          </Page>
        </nav>
      </React.Fragment>
    );
  }
}

NavBar.defaultProps = {
  // fixed: true,
  // hideOnScroll: 'mobile', // valid values are "always", "tablet", "mobile", and "never"
  links: [],
  title: '',
  collapseWidth: 420, // any valid css width expression. Used to generate a media query
};

NavBar.propTypes = {
  // fixed: PropTypes.bool,
  collapseWidth: PropTypes.number,
  // hideOnScroll: PropTypes.string,
  links: PropTypes.array,
  title: PropTypes.string,
};

export default NavBar;

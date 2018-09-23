import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          {`@media screen and (max-width:${collapseWidth}px){nav.navbar .nav-links{display:none;}nav.navbar .menuIcon{display:block;}}`}
        </style>
        <nav className="navbar">
          <div key="brand" className="nav-brand">
            {title}
          </div>
          <div key="links" className={`nav-links${menuVisible ? ' visible' : ''}`}>
            {links.map(x => (
              <div key={x.title} className="nav-item">
                <Link to={x.path}>{x.title}</Link>
              </div>
            ))}
          </div>
          <div key="icon" className="menuIcon">
            <FontAwesomeIcon icon="bars" onClick={() => alert('clicked!')} />
          </div>
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
  collapseWidth: 768, // any valid css width expression. Used to generate a media query
};

NavBar.propTypes = {
  // fixed: PropTypes.bool,
  collapseWidth: PropTypes.number,
  // hideOnScroll: PropTypes.string,
  links: PropTypes.array,
  title: PropTypes.string,
};

export default NavBar;

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  renderLinks() {
    return this.props.links.map(link => (
      <NavLink key={link.text} text={link.text} url={link.url} />
    ));
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-left">
            {
              this.renderLinks()
            }
          </ul>
        </div>
      </nav>
    );
  }
}

const NavLink = ({ text, url }) => (
  <li>
    <Link to={url}>
      {text}
    </Link>
  </li>
);

const navLinkPropType = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape(navLinkPropType),
  ).isRequired,
};

NavLink.propTypes = navLinkPropType;

import React from 'react';
import { Link } from 'react-router-dom';

import "./navigation.scss";

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link className="navlink" to="/">Home</Link>
        </li>

        <li>
          <Link className="navlink" to="/table">See the table</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

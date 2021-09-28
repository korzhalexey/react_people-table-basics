import React from 'react';
import Navigation from '../Navigation/Navigation';

import './pageNotFound.scss';

function PageNotFound(props) {
  return (
    <div className="page-not-found-block">
      <h1>Whoops!</h1>
      <h3>404 Page Not Found</h3>

      <picture>
        <img
          src="https://media.coschedule.com/uploads/vacation-1.gif"
          alt="Dogs on Vacation"
          loading="lazy"
        />
      </picture>

      <Navigation />
    </div>
  );
}

export default PageNotFound;

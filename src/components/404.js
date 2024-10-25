import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Lasting Performance PT</title>
      </Helmet>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    </>
  );
};

export default NotFound;


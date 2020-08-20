import React from 'react';
import { Helmet } from 'react-helmet';

// this is how we import styles, because my life is a nightmare
const styles = preval`
  const fs = require('fs');
  const path = require('path');
  const parsedStylePath = path.resolve(__dirname, '../styles/footer.module.css.json');
  const styleJSON = fs.readFileSync(parsedStylePath, 'utf-8');

  module.exports = JSON.parse(styleJSON);
`;

export function Footer() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/styles/footer.module.css" />
      </Helmet>
      <footer className={styles.footer}>powered by boops</footer>
    </>
  );
}

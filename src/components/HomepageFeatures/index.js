import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'HTML',
    Svg: require('@site/static/img/undraw_html.svg').default,
    description: (
      <>
        HTML provides the basic structure.
      </>
    ),
  },
  {
    title: 'CSS',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <code>CSS</code>CSS provides the skin to the structure in the form
of design, formatting, and layout.
      </>
    ),
  },
  {
    title: 'MongoDB',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        MongoDB is a NoSQL database in which data is stored
in documents that consist of key-value pairs, sharing
a lot of resemblance to JSON.
      </>
    ),
  },
  {
    title: 'ExpressJS',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Express is a flexible and clean Node.js web application
framework that provides a robust set of features to
develop web and mobile applications.
      </>
    ),
  },
  {
    title: 'ReactJS',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        React is an open-source JavaScript library that is
used for building user interfaces specifically for
single-page applications.
      </>
    ),
  },
  {
    title: 'NodeJS',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       NodeJS is a cross-platform JavaScript runtime
environment, it’s built on Chrome’s V8 engine to run
JavaScript code outside the browser, for easily
building fast and scalable applications.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Free forever',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Individuals and small companies can use Invoice-Collector for free. You help us improve our product and maintain the collectors.</>
    ),
  },
  {
    title: 'Privacy first',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Self-hosting ensures that sensitive data such as credentials, passwords and financial data remains within your private network, reducing the risk of data breaches.
      </>
    ),
  },
  {
    title: 'Open-source',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The open-source nature of Invoice-Collector ensures complete transparency. Users can inspect the code, understand how the tool works, and verify that it meets their security and compliance requirements.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

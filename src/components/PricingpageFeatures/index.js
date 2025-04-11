import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Self-Hosted',
    offer: 'Free',
    price: '0€',
    unit: 'forever',
    features: [
      'Unlimited collectors',
      'Privacy & security',
      'Core and community collectors'
    ]
  },
  {
    title: 'Self-Hosted',
    offer: 'Premium',
    price: '100€',
    unit: '/ collector / month',
    features: [
      'Unlimited collectors',
      'Privacy & security',
      'Core, community and premium collectors',
      'Automatic updates',
      'Support and maintenance',
      'Custom collectors'
    ]
  },
  {
    title: 'Cloud-SaaS',
    offer: 'Premium',
    price: '0.01€',
    unit: '/ collector / user / month',
    features: [
      'Unlimited collectors',
      'Data privacy',
      'Enhanced credentials security',
      'Core, community and premium collectors',
      'Automatic updates',
      'Support and maintenance',
      'Custom collectors',
      'On demand features'
    ]
  },
];

function Feature({title, offer, price, unit, features}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p><em>{offer}</em></p>
        <Heading as="h1" className="text--primary">{price}</Heading>
        <p><em>{unit}</em></p>
        {offer === 'Free' ? (
          <Link className="button button--secondary" to="/docs">Get Started</Link>
        ) : (
          <Link to="mailto:Invoice-Collector<contact@invoice-collector.com>" className="button button--primary">Contact us</Link>
        )}
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PricingpageFeatures() {
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

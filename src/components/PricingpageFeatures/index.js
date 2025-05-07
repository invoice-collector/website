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
      {text: 'Unlimited collectors', checked: true},
      {text: 'Privacy & security', checked: true},
      {text: 'Core and community collectors', checked: true},
      {text: 'Premium collectors', checked: false},
    ]
  },
  /*{
    title: 'Self-Hosted',
    offer: 'Premium',
    price: '100€',
    unit: '/ collector / month',
    features: [
      {text: 'Unlimited collectors', checked: true},
      {text: 'Privacy & security', checked: true},
      {text: 'Core and community collectors', checked: true},
      {text: 'Premium collectors', checked: true},
      {text: 'Automatic updates', checked: true},
      {text: 'Support and maintenance', checked: true},
      {text: 'Custom collectors', checked: true},
    ]
  },*/
  {
    title: 'Cloud-SaaS',
    offer: 'Premium',
    price: 'Pay-as-you-go',
    unit: '/ month',
    features: [
      {text: 'Unlimited collectors', checked: true},
      {text: 'Data privacy', checked: true},
      {text: 'Enhanced Data credentials security', checked: true},
      {text: 'Core and community collectors', checked: true},
      {text: 'Premium collectors', checked: true},
      {text: 'Automatic updates', checked: true},
      {text: 'Support and maintenance', checked: true},
      {text: 'Custom collectors', checked: true},
      {text: 'On demand features', checked: true},
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
            <li key={idx}>
              <img 
                src={feature.checked ? "img/icon-check-green.svg" : "img/icon-cross-red.svg"} 
                alt={feature.checked ? "check icon" : "cross icon"}
              />
              {feature.text}
            </li>
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
        <div className="row" style={{justifyContent: 'center'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

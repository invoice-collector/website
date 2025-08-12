import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PricingpageFeatures from '@site/src/components/PricingpageFeatures';
import { PricingPage } from '../../components/PricingPage';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import './index.module.css';

function PricingpageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Pricing
        </Heading>
        <p className="hero__subtitle">
          Invoice-Collector is for Free for small companies in self-hosted.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Pricing"
      description={siteConfig.tagline}>
      <main>
        <PricingPage />
      </main>
    </Layout>
  );
}

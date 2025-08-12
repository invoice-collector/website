import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { PricingPage } from '../../components/PricingPage';
import './index.module.css';

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

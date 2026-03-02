import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LandingPageEn from '@site/src/components/LandingPage/Accountant/en';
import LandingPageFr from '@site/src/components/LandingPage/Accountant/fr';

export default function Home() {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const isFrench = currentLocale && currentLocale.startsWith('fr');
  const history = useHistory();
  console.log('currentLocale', currentLocale);
  console.log('isFrench', isFrench);

  useEffect(() => {
    if (isFrench) {
      history.push('/fr/');
    }
  }, [isFrench]);

  return <LandingPageEn />;
}

import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import LandingPage from '@site/src/components/LandingPage/Accountant';

export default function Home() {
  const isDev = process.env.NODE_ENV === 'development';
  const isFrench = typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('fr');
  const history = useHistory();
  console.log('isDev', isDev);
  console.log('isFrench', isFrench);

  useEffect(() => {
    if (!isDev && isFrench) {
      history.push('/fr/');
    }
  }, [isFrench]);
  return <LandingPage />;
}

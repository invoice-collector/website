import { useEffect } from 'react';
import CommonLandingPage from '@site/src/components/LandingPage/CommonLandingPage';

export default function Home() {
  const isDev = process.env.NODE_ENV === 'development';
  const isFrench = typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('fr');
  console.log('isDev', isDev);
  console.log('isFrench', isFrench);

  useEffect(() => {
    if (!isDev && isFrench && !window.location.pathname.includes('/fr/')) {
      window.location.replace('/fr/');
    }
  }, [isFrench]);
  return <CommonLandingPage />;
}

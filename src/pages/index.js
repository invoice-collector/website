import { useEffect } from 'react';
import LandingPage from '@site/src/components/LandingPage/Accountant';

export default function Home() {
  const isDev = process.env.NODE_ENV === 'development';
  const isFrench = typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('fr');
  console.log('isDev', isDev);
  console.log('isFrench', isFrench);

  useEffect(() => {
    if (!isDev && isFrench) {
      window.location.replace('/fr/');
    }
  }, [isFrench]);
  return <LandingPage />;
}

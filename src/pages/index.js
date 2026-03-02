import LandingPageEn from '@site/src/components/LandingPage/Accountant/en';
import LandingPageFr from '@site/src/components/LandingPage/Accountant/fr';

export default function Home() {
  const isFrench = typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('fr');
  return isFrench ? <LandingPageEn /> : <LandingPageEn />;
}

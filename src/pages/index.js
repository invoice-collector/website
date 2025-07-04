import LandingPageEn from '@site/src/components/LandingPage/ERP';
import LandingPageFr from '@site/src/components/LandingPage/ERP_fr';

export default function Home() {
  const isFrench = typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('fr');
  return isFrench ? <LandingPageFr /> : <LandingPageEn />;
}

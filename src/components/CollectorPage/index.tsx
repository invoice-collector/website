import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { Collector } from '@site/src/types/collector';
import styles from './styles.module.css';

const APP_SIGNUP_URL = 'https://app.invoice-collector.com/signup';

interface FaqItem {
  question: string;
  answer: string;
}

interface CollectorContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  back: string;
  h1: string;
  lead: string;
  detailsTitle: string;
  labels: {
    type: string;
    authentication: string;
    captcha: string;
    version: string;
  };
  faqTitle: string;
  faq: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  visitWebsite: string;
}

function getContent(locale: string, c: Collector): CollectorContent {
  const name = c.name;

  if (locale === 'fr') {
    return {
      metaTitle: `Comment télécharger vos factures ${name} automatiquement`,
      metaDescription: `Découvrez comment télécharger et collecter automatiquement vos factures ${name} au format PDF avec Invoice Collector, le collecteur de factures open source et gratuit. Automatisez la récupération de vos factures ${name}.`,
      keywords: `télécharger factures ${name}, facture ${name}, note de frais ${name}, récupérer factures ${name}, collecte factures ${name}, ${name} facture PDF, automatiser factures ${name}, comptabilité ${name}`,
      back: '← Tous les collecteurs',
      h1: `Téléchargez vos factures ${name} automatiquement`,
      lead: `Invoice Collector télécharge automatiquement vos factures ${name} au format PDF. Récupérez chaque facture et note de frais ${name} en quelques secondes, sans connexion ni navigation manuelle sur les portails fournisseurs.`,
      detailsTitle: `À propos du collecteur ${name}`,
      labels: {
        type: 'Type de collecteur',
        authentication: 'Authentification',
        captcha: 'Captcha',
        version: 'Version',
      },
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          question: `Est-il sûr de connecter mon compte ${name} à Invoice Collector ?`,
          answer: `Oui. Invoice Collector est open source et peut être auto-hébergé : vos identifiants ${name} et vos données restent dans votre propre infrastructure et ne sont jamais partagés avec des tiers.`,
        },
        {
          question: `Puis-je télécharger mes anciennes factures ${name} ?`,
          answer: `Oui. Vous choisissez la date à partir de laquelle vos factures ${name} doivent être téléchargées, et Invoice Collector récupère tout l'historique disponible depuis cette date.`,
        },
        {
          question: `Dans quel format les factures ${name} sont-elles enregistrées ?`,
          answer: `Toutes les factures ${name} sont enregistrées au format PDF, ce qui facilite leur archivage, leur partage et leur import dans votre logiciel de comptabilité.`,
        },
        {
          question: 'Invoice Collector est-il gratuit ?',
          answer: `Oui. Invoice Collector est un projet open source et gratuit que vous pouvez auto-héberger pour collecter vos factures ${name} et celles de milliers d'autres services.`,
        },
        {
          question: `À quelle fréquence les factures ${name} sont-elles collectées ?`,
          answer: `La collecte est entièrement automatisée et planifiée, vous n'avez rien à faire. Invoice Collector télécharge automatiquement vos nouvelles factures ${name} de façon récurrente.`,
        },
      ],
      ctaTitle: `Prêt à automatiser vos factures ${name} ?`,
      ctaText: `Collectez vos factures ${name} et celles de milliers d'autres services automatiquement avec Invoice Collector.`,
      ctaButton: 'Commencer gratuitement →',
      visitWebsite: 'Visiter le site ↗',
    };
  }

  return {
    metaTitle: `How to download your ${name} invoices automatically`,
    metaDescription: `Learn how to automatically download and collect your ${name} invoices as PDF with Invoice Collector, the free and open-source invoice collector. Automate the retrieval of your ${name} invoices.`,
    keywords: `download ${name} invoices, ${name} invoice, ${name} bill, ${name} invoice download, collect ${name} invoices, ${name} invoice PDF, automate ${name} invoices, ${name} accounting`,
    back: '← All collectors',
    h1: `Download your ${name} invoices automatically`,
    lead: `Invoice Collector automatically downloads your ${name} invoices and bills as PDF. Collect every ${name} bill in seconds, without logging in or navigating supplier portals manually.`,
    detailsTitle: `About the ${name} collector`,
    labels: {
      type: 'Collector type',
      authentication: 'Authentication',
      captcha: 'Captcha',
      version: 'Version',
    },
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        question: `Is it safe to connect my ${name} account to Invoice Collector?`,
        answer: `Yes. Invoice Collector is open source and can be self-hosted: your ${name} credentials and data stay within your own infrastructure and are never shared with third parties.`,
      },
      {
        question: `Can I download my past ${name} invoices?`,
        answer: `Yes. You choose the start date from which your ${name} invoices should be downloaded, and Invoice Collector retrieves the full history available from that date.`,
      },
      {
        question: `In which format are ${name} invoices saved?`,
        answer: `All ${name} invoices are saved as PDF, making them easy to archive, share and import into your accounting software.`,
      },
      {
        question: 'Is Invoice Collector free?',
        answer: `Yes. Invoice Collector is a free and open-source project you can self-host to collect your ${name} invoices and those of thousands of other services.`,
      },
      {
        question: `How often are ${name} invoices collected?`,
        answer: `Collection is fully automated and scheduled, you have nothing to do. Invoice Collector downloads your new ${name} invoices automatically on a recurring schedule.`,
      },
    ],
    ctaTitle: `Ready to automate your ${name} invoices?`,
    ctaText: `Collect your ${name} invoices and those of thousands of other services automatically with Invoice Collector.`,
    ctaButton: 'Get started for free →',
    visitWebsite: 'Visit website ↗',
  };
}

function InfoRow({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }
  return (
    <div className={styles.infoRow}>
      <span className={styles.infoLabel}>{label}</span>
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
}

export default function CollectorPage({ collector }: { collector: Collector }): JSX.Element {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const t = getContent(currentLocale, collector);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Layout title={t.metaTitle} description={t.metaDescription}>
      <Head>
        <meta name="keywords" content={t.keywords} />
        {collector.logo && <meta property="og:image" content={collector.logo} />}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <main className={styles.page}>
        <div className={styles.container}>
          <Link to="/collectors" className={styles.back}>
            {t.back}
          </Link>

          <header className={styles.header}>
            {collector.logo && (
              <img
                src={collector.logo}
                alt={`${collector.name} logo`}
                className={styles.logo}
                width={80}
                height={80}
                loading="lazy"
              />
            )}
            <div>
              <h1 className={styles.title}>{t.h1}</h1>
            </div>
          </header>

          <p className={styles.lead}>{t.lead}</p>

          <section className={styles.section}>
            {collector.website && (
              <a
                href={collector.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.websiteButton}
              >
                {t.visitWebsite}
              </a>
            )}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.faqTitle}</h2>
            <div className={styles.faq}>
              {t.faq.map((item, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.cta}>
            <h2 className={styles.ctaTitle}>{t.ctaTitle}</h2>
            <p className={styles.ctaText}>{t.ctaText}</p>
            <a href={APP_SIGNUP_URL} className={styles.ctaButton}>
              {t.ctaButton}
            </a>
          </section>
        </div>
      </main>
    </Layout>
  );
}

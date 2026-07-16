import { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { CollectorSummary } from '@site/src/types/collector';
import styles from './styles.module.css';

interface CollectorsIndexContent {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: (count: number) => string;
  searchPlaceholder: string;
  empty: (query: string) => string;
}

function getContent(locale: string): CollectorsIndexContent {
  if (locale === 'fr') {
    return {
      metaTitle: 'Collecteurs',
      metaDescription:
        'Parcourez tous les collecteurs de factures pris en charge par Invoice Collector.',
      title: 'Collecteurs',
      subtitle: (count) => `${count} collecteurs disponibles.`,
      searchPlaceholder: 'Rechercher des collecteurs…',
      empty: (query) => `Aucun collecteur ne correspond à « ${query} ».`,
    };
  }

  return {
    metaTitle: 'Collectors',
    metaDescription:
      'Browse all invoice collectors supported by Invoice-Collector.',
    title: 'Collectors',
    subtitle: (count) => `${count} collectors available.`,
    searchPlaceholder: 'Search collectors…',
    empty: (query) => `No collectors match “${query}”.`,
  };
}

function searchCollectorsWithScore(
  collectors: CollectorSummary[],
  searchTerm: string
): CollectorSummary[] {
  if (!searchTerm || searchTerm.length < 1) return collectors.slice(0, 100);

  const computeCollectorScore = (collector: CollectorSummary, term: string) => {
    if (!term || term.length < 1) return 0;

    // Remove accents and special characters, convert to lowercase
    const normalize = (str: string) =>
      str.normalize('NFD').replace(/[^a-zA-Z\s]/g, '').toLowerCase();
    const name = normalize(collector.name);
    const termLower = normalize(term);

    let score = 0;
    const terms = termLower.split(' ');
    const firstTerm = terms.shift();

    if (!firstTerm) return 0;

    if (name === firstTerm) score += 8;
    else if (name.startsWith(firstTerm)) score += 4;
    else if (name.includes(firstTerm)) score += 2;

    if (score > 0) {
      terms.forEach((word) => {
        if (name.includes(word)) score += 2;
        else score = 0;
      });
    }

    return score;
  };

  return collectors
    .map((collector) => ({
      collector,
      score: computeCollectorScore(collector, searchTerm),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ collector }) => collector)
    .slice(0, 100);
}

function CollectorCard({ collector }: { collector: CollectorSummary }) {
  return (
    <Link to={`/collectors/${collector.id}`} className={styles.card}>
      {collector.logo && (
        <img
          src={collector.logo}
          alt={`${collector.name} logo`}
          className={styles.cardLogo}
          loading="lazy"
        />
      )}
      <div className={styles.cardBody}>
        <span className={styles.cardName}>{collector.name}</span>
      </div>
    </Link>
  );
}

export default function CollectorsIndex({
  collectors,
}: {
  collectors: CollectorSummary[];
}): JSX.Element {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const t = getContent(currentLocale);
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => searchCollectorsWithScore(collectors, query.trim()),
    [collectors, query]
  );

  return (
    <Layout title={t.metaTitle} description={t.metaDescription}>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle(collectors.length)}</p>

          <input
            type="search"
            className={styles.search}
            placeholder={t.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className={styles.grid}>
            {filtered.map((collector) => (
              <CollectorCard key={collector.id} collector={collector} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>{t.empty(query)}</p>
          )}
        </div>
      </main>
    </Layout>
  );
}

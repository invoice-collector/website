import { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import type { CollectorSummary } from '@site/src/types/collector';
import styles from './styles.module.css';

const STATE_LABELS: Record<string, string> = {
  active: 'Active',
  development: 'In development',
  planned: 'Planned',
};

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
        <span
          className={`${styles.badge} ${styles[`state_${collector.state}`] ?? ''}`}
        >
          {STATE_LABELS[collector.state] ?? collector.state}
        </span>
      </div>
    </Link>
  );
}

export default function CollectorsIndex({
  collectors,
}: {
  collectors: CollectorSummary[];
}): JSX.Element {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const sorted = [...collectors].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    if (!q) {
      return sorted;
    }
    return sorted.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q)
    );
  }, [collectors, query]);

  return (
    <Layout
      title="Collectors"
      description="Browse all invoice collectors supported by Invoice-Collector."
    >
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Collectors</h1>
          <p className={styles.subtitle}>
            {collectors.length} collectors available.
          </p>

          <input
            type="search"
            className={styles.search}
            placeholder="Search collectors…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className={styles.grid}>
            {filtered.map((collector) => (
              <CollectorCard key={collector.id} collector={collector} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No collectors match “{query}”.</p>
          )}
        </div>
      </main>
    </Layout>
  );
}

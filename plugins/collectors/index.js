import fs from 'fs';
import path from 'path';

/**
 * Docusaurus plugin that fetches the list of collectors from the
 * Invoice-Collector API at build time and generates:
 *   - one page per collector at `${routeBasePath}/:id`
 *   - a searchable index page at `${routeBasePath}`
 *
 * The raw data is cached to `static/<cachePath>` so builds keep working
 * offline (same fallback strategy as the fetch-openapi plugin).
 *
 * @param {import('@docusaurus/types').LoadContext} context
 * @param {{
 *   url: string,
 *   cachePath?: string,
 *   routeBasePath?: string,
 *   states?: string[],
 * }} options
 */
export default function collectorsPlugin(context, options) {
  const {
    url,
    cachePath = 'collectors.json',
    routeBasePath = '/collectors',
    states = ['active', 'development'],
  } = options;

  return {
    name: 'collectors',

    async loadContent() {
      const dest = path.join(context.siteDir, 'static', cachePath);
      let collectors;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
        collectors = await response.json();
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, JSON.stringify(collectors));
        console.log(`[collectors] Downloaded ${collectors.length} collectors from ${url}`);
      } catch (error) {
        if (fs.existsSync(dest)) {
          console.warn(`[collectors] Failed to fetch ${url}: ${error.message}`);
          console.warn(`[collectors] Using cached static/${cachePath}`);
          collectors = JSON.parse(fs.readFileSync(dest, 'utf8'));
        } else {
          throw new Error(
            `[collectors] Failed to fetch ${url} and no local cache exists: ${error.message}`
          );
        }
      }

      const filtered = collectors.filter((c) => states.includes(c.state));
      console.log(
        `[collectors] Generating ${filtered.length} pages (states: ${states.join(', ')})`
      );
      return filtered;
    },

    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;

      // `context.baseUrl` already includes the locale for the current build
      // (e.g. `/fr/`), so route paths stay in sync with locale-prefixed links.
      const base = context.baseUrl.replace(/\/$/, '');
      const basePath = `${base}${routeBasePath}`;

      // Lightweight list for the index page (avoid shipping every field).
      const summary = content.map((c) => ({
        id: c.id,
        name: c.name,
        description: c.description,
        logo: c.logo,
        website: c.website,
        type: c.type,
        state: c.state,
      }));

      const indexData = await createData(
        'collectors-index.json',
        JSON.stringify(summary)
      );

      addRoute({
        path: basePath,
        component: '@site/src/components/CollectorsIndex/index.tsx',
        modules: { collectors: indexData },
        exact: true,
      });

      for (const collector of content) {
        const data = await createData(
          `collector-${collector.id}.json`,
          JSON.stringify(collector)
        );

        addRoute({
          path: `${basePath}/${collector.id}`,
          component: '@site/src/components/CollectorPage/index.tsx',
          modules: { collector: data },
          exact: true,
        });
      }
    },
  };
}

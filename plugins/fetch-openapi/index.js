import fs from 'fs';
import path from 'path';

export default function fetchOpenapiPlugin(context, options) {
  return {
    name: 'fetch-openapi',
    async loadContent() {
      const { url, outputPath } = options;
      const dest = path.join(context.siteDir, 'static', outputPath);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
        const content = await response.text();
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, content);
        console.log(`[fetch-openapi] Downloaded ${url} → static/${outputPath}`);
      } catch (error) {
        if (fs.existsSync(dest)) {
          console.warn(`[fetch-openapi] Failed to fetch ${url}: ${error.message}`);
          console.warn(`[fetch-openapi] Using existing static/${outputPath}`);
        } else {
          throw new Error(
            `[fetch-openapi] Failed to fetch ${url} and no local fallback exists: ${error.message}`
          );
        }
      }
    },
  };
}

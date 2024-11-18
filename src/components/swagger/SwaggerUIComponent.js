import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import Layout from '@theme/Layout';

export default function SwaggerUIComponent() {
  return (    
    <Layout title="API Documentation" description="Swagger UI for API Documentation">
      <SwaggerUI url="https://raw.githubusercontent.com/InvoiceCollector/website/refs/heads/master/static/openapi.yaml" />
    </Layout>
  );
};

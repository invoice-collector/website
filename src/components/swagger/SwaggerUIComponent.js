import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerUIComponent() {
  return (
    <SwaggerUI url="https://raw.githubusercontent.com/InvoiceCollector/website/refs/heads/master/static/openapi.yaml" />
  );
};

export interface Plan {
  id: string;
  name: string;
  maxUsers: number;
  maxCredentials: number;
  maxInvoicesPerMonth: number;
  maxCollectors: number;
  priceBase: number;
  pricePerUser: number;
  pricePerCredential: number;
  pricePerInvoice: number;
  pricePerCollector: number;
  features: string[];
}

export const mockPlans: Plan[] = [
  {
    id: 'trial',
    name: 'Trial',
    maxUsers: 1,
    maxCredentials: 1,
    maxInvoicesPerMonth: -1,
    maxCollectors: -1,
    priceBase: 0,
    pricePerUser: 0,
    pricePerCredential: 0,
    pricePerInvoice: 0,
    pricePerCollector: 0,
    features: [
      '1 user',
      '1 collector',
      'Unlimited invoices per month'
    ]
  },
  {
    id: 'starter',
    name: 'Starter',
    maxUsers: -1,
    maxCredentials: -1,
    maxInvoicesPerMonth: 20,
    maxCollectors: -1,
    priceBase: 20,
    pricePerUser: 0,
    pricePerCredential: 0,
    pricePerInvoice: 0,
    pricePerCollector: 0,
    features: [
      'Unlimited users',
      'Unlimited collectors',
      '20 invoices per month'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    maxUsers: -1,
    maxCredentials: -1,
    maxInvoicesPerMonth: 100,
    maxCollectors: -1,
    priceBase: 90,
    pricePerUser: 0,
    pricePerCredential: 0,
    pricePerInvoice: 0,
    pricePerCollector: 0,
    features: [
      'Unlimited users',
      'Unlimited collectors',
      '100 invoices per month',
      'Technical support',
      'Custom collectors'
    ]
  },
  {
    id: 'custom',
    name: 'Custom',
    maxUsers: -1,
    maxCredentials: -1,
    maxInvoicesPerMonth: -1,
    maxCollectors: -1,
    priceBase: -1,
    pricePerUser: 0,
    pricePerCredential: 0,
    pricePerInvoice: 0,
    pricePerCollector: 0,
    features: [
      'Unlimited users',
      'Unlimited collectors',
      'Unlimited invoices per month',
      'Technical support',
      'Custom collectors',
      'On demand features'
    ]
  }
];
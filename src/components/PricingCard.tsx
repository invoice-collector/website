import React from 'react';
import { Check, Mail } from 'lucide-react';
import { Plan } from '../types/pricing';

interface PricingCardProps {
  plan: Plan;
  isPopular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, isPopular = false }) => {
  const formatPrice = (price: number) => {
    if (price === 0) return 'Free';
    if (price === -1) return 'Custom';
    return `€${price}`;
  };

  const getPriceUnit = (planId: string) => {
    if (planId === 'trial') return 'forever';
    if (planId === 'custom') return '/ month';
    return '/ month';
  };

  const getButtonText = (planId: string) => {
    if (planId === 'trial') return 'Get Started';
    if (planId === 'custom') return 'Contact Sales';
    return 'Choose Plan';
  };

  const getButtonAction = (planId: string) => {
    if (planId === 'custom') {
      return () => window.open('mailto:contact@invoice-collector.com');
    }
    return () => window.open('https://app.invoice-collector.com/signup');
  };

  return (
    <div className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
      isPopular ? 'border-blue-500 ring-4 ring-blue-100' : 'border-gray-200'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <div className="mb-4">
            <span className="text-5xl font-bold text-gray-900">{formatPrice(plan.priceBase)}</span>
            <span className="text-gray-600 ml-2">{getPriceUnit(plan.id)}</span>
          </div>
          <button
            onClick={getButtonAction(plan.id)}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
              isPopular
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                : plan.id === 'custom'
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border'
            }`}
          >
            {plan.id === 'custom' && <Mail className="inline-block w-4 h-4 mr-2" />}
            {getButtonText(plan.id)}
          </button>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 text-lg mb-4">Features included:</h4>
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
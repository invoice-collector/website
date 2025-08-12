import React, { useEffect } from 'react';
import { CreditCard, Shield, Zap } from 'lucide-react';
import { PricingCard } from './PricingCard';
import { mockPlans } from '../types/pricing';
import Link from '@docusaurus/Link';

export const PricingPage: React.FC = () => {
  useEffect(() => {
    // Tailwind CSS
    const tailwindLink = document.createElement('link');
    tailwindLink.rel = 'stylesheet';
    tailwindLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
    document.head.appendChild(tailwindLink);

    // FontAwesome
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css';
    document.head.appendChild(faLink);

    // Google Fonts Inter
    const interLink = document.createElement('link');
    interLink.rel = 'stylesheet';
    interLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(interLink);

    // Custom styles
    const style = document.createElement('style');
    style.innerHTML = `
      #landingpage { font-family: 'Inter', sans-serif; }
      .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
      .pulse-border { animation: pulse 2s infinite; }
      @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
          100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
      }
      .typing-effect {
          border-right: 2px solid #667eea;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
      }
      @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
      }
      @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #667eea; }
      }
      svg {
        display: inline-block;
      }
    `;
    document.head.appendChild(style);

    return () => {
        // Cleanup: remove stylesheets and styles when component unmounts
        document.head.removeChild(tailwindLink);
        document.head.removeChild(faLink);
        document.head.removeChild(interLink);
        document.head.removeChild(style);
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Invoice-Collector offers flexible pricing plans to suit businesses of all sizes.
              Start free and scale as you grow.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              {/*<div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>*/}
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-300" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isPopular={plan.id === 'starter'}
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Have questions? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  What are the available collectors?
                </h3>
                <p className="text-gray-600">
                  Our platform supports a variety of collectors, including web portals, email and API interface.
                  The full list of collectors is available in the app.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-600">
                  Absolutely. Your data is hosted on Bitwarden, which provides end-to-end encryption and zero-knowledge architecture.
                  It meets the highest security standards and requirements like GDPR and CCPA.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you offer pay-as-you-go plans?
                </h3>
                <p className="text-gray-600">
                  Yes, our Custom plan includes tailored solutions for enterprise clients with specific requirements.
                  The billing is adjusted and can be a pay-as-you-go model based on your usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="gradient-bg py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to collect invoices?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses already using Invoice-Collector to streamline their invoice management.
          </p>
          <Link to="https://app.invoice-collector.com/signup" target="_blank">
            <button class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors pulse-border">
              <i class="fas fa-rocket mr-2"></i>
              Start for Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
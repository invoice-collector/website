import { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function LandingPageEn() {
  useEffect(() => {
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

    // Modal submission
    document.getElementById('leadForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Collect form data
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const company = formData.get('company');
        const customers = formData.get('customers');
        const preference = formData.get('preference');
        const message = `- Name: ${name}\n- Company: ${company}\n- Customers: ${customers}\n- Contact preference: ${preference}`;

        fetch('https://registry.invoice-collector.com/v1/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: "website",
            type: "landing_page",
            message: message,
            email: email
          })
        });
        alert('Thank! Our team will contact you soon to start your integration.');
        document.getElementById('leadForm').reset();
        closeModal();
    });
        
    // Close modal when clicking outside
    document.getElementById('leadModal').addEventListener('click', function(e) {
        if (e.target.id === "leadModalBack") {
            closeModal();
        }
    });

    return () => {
        // Cleanup: remove stylesheets and styles when component unmounts
        document.head.removeChild(style);
        }
  });
  const {siteConfig} = useDocusaurusContext();

    function openModal() {
        document.getElementById('leadModal').classList.remove('hidden');
    }
        
    function closeModal() {
        document.getElementById('leadModal').classList.add('hidden');
    }

    function scrollToSolution() {
        document.getElementById('solution').scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <Layout
      title="The API that automates invoice collection"
      description={siteConfig.tagline}>
      <div id="landingpage">
        <section class="gradient-bg text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
                            <i class="fas fa-rocket text-yellow-300 mr-2"></i>
                            <span class="text-sm font-medium">New API • E-invoicing compliant</span>
                        </div>
                        <h1 class="text-5xl font-bold mb-6 leading-tight">
                            The API that <span class="text-yellow-300">automates</span> invoice collection for your customers, powered by <span class="text-yellow-300">AI</span>
                        </h1>
                        <p class="text-xl mb-8 text-gray-100">
                            Differentiate your software with our universal API. Our AI extracts invoices automatically from +1000 sources. Zero effort, maximum value with automation and artificial intelligence.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <Link to="https://app.invoice-collector.com/signup" target="_blank">
                                <button class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors pulse-border">
                                    <i class="fas fa-rocket mr-2"></i>
                                    Start for Free
                                </button>
                            </Link>
                            <Link to="/docs">
                                <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                                    <i class="fas fa-code mr-2"></i>
                                    Documentation
                                </button>
                            </Link>
                        </div>
                        <div class="mt-8 flex items-center space-x-6 text-sm">
                            <div class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-2"></i>
                                <span>Integration in 24h</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-shield-alt text-green-400 mr-2"></i>
                                <span>RGPD compliant</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-bolt text-green-400 mr-2"></i>
                                <span>A simple REST API</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-robot text-purple-400 mr-2"></i>
                                <span>Advanced AI extraction</span>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                            <div class="mb-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm font-medium text-gray-200">Collected invoices this month</span>
                                    <span class="text-green-400 text-sm"><i class="fas fa-arrow-up mr-1"></i>+156%</span>
                                </div>
                                <div class="text-3xl font-bold">2 847</div>
                            </div>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                                            <i class="fas fa-bolt text-white text-xs"></i>
                                        </div>
                                        <span class="text-sm">Amazon Business</span>
                                    </div>
                                    <span class="text-green-400 text-sm">✓ Collected</span>
                                </div>
                                <div class="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                            <i class="fas fa-building text-white text-xs"></i>
                                        </div>
                                        <span class="text-sm">Shopify</span>
                                    </div>
                                    <span class="text-green-400 text-sm">✓ Collected</span>
                                </div>
                                <div class="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                            <i class="fas fa-envelope text-white text-xs"></i>
                                        </div>
                                        <span class="text-sm">Email</span>
                                    </div>
                                    <span class="text-yellow-400 text-sm">⟳ In progress</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Your customers loose <span class="text-red-600">5h/week</span> hunting invoices
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Web portals, email boxes, paper documents... Manual collection is costly and hinders productivity.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-clock text-red-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Lost time</h3>
                        <p class="text-gray-600 mb-4">5-10 minutes per invoice when collecting manually</p>
                        <div class="text-3xl font-bold text-red-600">74%</div>
                        <p class="text-sm text-gray-500">of SMEs only partially automated</p>
                    </div>
                    
                    <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-dollar-sign text-red-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">High cost</h3>
                        <p class="text-gray-600 mb-4">10-40€ per supplier processed manually</p>
                        <div class="text-3xl font-bold text-red-600">x6</div>
                        <p class="text-sm text-gray-500">more expensive than an automated solution</p>
                    </div>
                    
                    <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Errors & losses</h3>
                        <p class="text-gray-600 mb-4">Lost documents, payment delays</p>
                        <div class="text-3xl font-bold text-red-600">40%</div>
                        <p class="text-sm text-gray-500">of teams cite this problem</p>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">
                        What if your customers could automate 100% of their invoice collection thanks to AI?
                    </h3>
                    <p class="text-lg text-gray-600 mb-6">
                        With Invoice Collector and its AI, turn this pain into a competitive advantage for your software.
                    </p>
                    <button onClick={scrollToSolution} class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Discover the solution <i class="fas fa-arrow-down ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <section id="solution" class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        A universal API to <span class="text-blue-600">automate</span> collection
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Invoice Collector connects to 1000+ sources and uses artificial intelligence to automatically retrieve all your customers' invoices.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-plug text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Universal connectors</h3>
                                    <p class="text-gray-600">Email (Gmail, Outlook), supplier portals (Orange, EDF, SFR...), e-invoicing platforms (Chorus Pro, Peppol)</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-brain text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Extraction AI</h3>
                                    <p class="text-gray-600">Advanced OCR + NLP to automatically extract key data (amount, date, VAT, supplier) with 95%+ accuracy</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-code text-purple-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Simple REST API</h3>
                                    <p class="text-gray-600">Plug-and-play integration in your software. Intuitive endpoints, real-time webhooks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-2xl shadow-xl p-6">
                        <div class="mb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm font-medium text-gray-500">INVOICE COLLECTOR API</span>
                                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Live</span>
                            </div>
                        </div>
                        <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                            <div class="text-green-400 mb-2">POST /api/v1/credential</div>
                            <div class="text-white mb-2">{"{"}</div>
                            <div class="text-white ml-4 mb-1">"source": "email",</div>
                            <div class="text-white ml-4 mb-1">"credentials": "***",</div>
                            <div class="text-white ml-4 mb-1">"filters": {"{"}</div>
                            <div class="text-white ml-8 mb-1">"from": "2024-01-01"</div>
                            <div class="text-white ml-4 mb-1">{"}"}</div>
                            <div class="text-white mb-4">{"}"}</div>
                            
                            <div class="text-blue-400 mb-2">Response: 200 OK</div>
                            <div class="text-white mb-2">{"{"}</div>
                            <div class="text-white ml-4 mb-1">"invoices": [</div>
                            <div class="text-white ml-8 mb-1">{"{"}</div>
                            <div class="text-white ml-12 mb-1">"id": "inv_1234",</div>
                            <div class="text-white ml-12 mb-1">"supplier": "Amazon Business",</div>
                            <div class="text-white ml-12 mb-1">"amount": 245.80,</div>
                            <div class="text-white ml-12 mb-1">"date": "2024-01-15",</div>
                            <div class="text-white ml-12 mb-1">"status": "extracted"</div>
                            <div class="text-white ml-8 mb-1">{"}"}</div>
                            <div class="text-white ml-4 mb-1">]</div>
                            <div class="text-white">{"}"}</div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
                        What you bring to your customers
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-check-circle text-green-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-2">Zero loss</h4>
                            <p class="text-sm text-gray-600">100% of invoices automatically retrieved</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-tachometer-alt text-blue-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-2">Fast closing</h4>
                            <p class="text-sm text-gray-600">Accelerated monthly closing</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-users text-purple-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-2">Freed teams</h4>
                            <p class="text-sm text-gray-600">More time for financial analysis</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-star text-yellow-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-2">Differentiation</h4>
                            <p class="text-sm text-gray-600">Competitive advantage on the market</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Our partners testify
                    </h2>
                    <p class="text-xl text-gray-600">
                        They integrated Invoice Collector and transformed their customers' experience
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-gray-50 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <span class="text-white font-bold">AB</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Alexandre Dubois</h4>
                                <p class="text-sm text-gray-600">CTO, Accounting Solutions Pro</p>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex text-yellow-400 mb-2">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="text-gray-700 italic">
                                "The integration was done in 2 weeks. Our customers save 5h/week and now ask us for more automations. Immediate ROI!"
                            </p>
                        </div>
                        <div class="text-sm text-gray-500">
                            <i class="fas fa-building mr-2"></i>
                            500+ SME customers
                        </div>
                    </div>

                    <div class="bg-gray-50 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                <span class="text-white font-bold">ML</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Marie Lefort</h4>
                                <p class="text-sm text-gray-600">Head of Product, ERP Expert</p>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex text-yellow-400 mb-2">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="text-gray-700 italic">
                                "Our customers tell us it's the most useful feature we've added in 5 years. Our retention rate has increased by 23% !"
                            </p>
                        </div>
                        <div class="text-sm text-gray-500">
                            <i class="fas fa-building mr-2"></i>
                            200+ customer companies
                        </div>
                    </div>

                    <div class="bg-gray-50 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                                <span class="text-white font-bold">TC</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Thomas Chen</h4>
                                <p class="text-sm text-gray-600">Founder, NextGen Accounting</p>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex text-yellow-400 mb-2">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="text-gray-700 italic">
                                "Game changer! We close more deals thanks to this differentiation. The API is stable and the support is responsive. Exactly what we were looking for."
                            </p>
                        </div>
                        <div class="text-sm text-gray-500">
                            <i class="fas fa-building mr-2"></i>
                            Accounting Saas Startup
                        </div>
                    </div>
                </div>

                <div class="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">
                        Join 50+ software publishers who trust Invoice Collector
                    </h3>
                    <p class="text-lg text-gray-600 mb-6">
                        They all increased their customer value and competitive differentiation
                    </p>
                    <button onClick={openModal} class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Join the partner program
                    </button>
                </div>
            </div>
        </section>

        <section id="integration" class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        A <span class="text-green-600">simple</span> 3 steps integration
                    </h2>
                    <p class="text-xl text-gray-600">
                        Add automatic invoice collection to your software in less than 24h
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div class="text-center">
                        <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-white text-2xl font-bold">1</span>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Create you API keys</h3>
                        <p class="text-gray-600 mb-4">
                            Free subscription, immediate access to the sandbox with test data
                        </p>
                        <ul class="text-sm text-gray-500 space-y-1">
                            <li>✓ Instant API keys</li>
                            <li>✓ Full documentation</li>
                        </ul>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-white text-2xl font-bold">2</span>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Integrate the endpoints</h3>
                        <p class="text-gray-600 mb-4">
                            Few lines of code to connect your software to our API
                        </p>
                        <ul class="text-sm text-gray-500 space-y-1">
                            <li>✓ A simple REST API</li>
                            <li>✓ Real time webhooks</li>
                            <li>✓ Dedicated technical support</li>
                        </ul>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-white text-2xl font-bold">3</span>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">
                            Deploy to your customers
                        </h3>
                        <p class="text-gray-600 mb-4">
                            Your customers connect their sources, invoices arrive automatically
                        </p>
                        <ul class="text-sm text-gray-500 space-y-1">
                            <li>✓ A simple monitoring dashboard</li>
                            <li>✓ Dedicated technical support</li>
                            <li>✓ Real time monitoring</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Example of integration code</h3>
                            <div class="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                                <div class="text-green-400 mb-2">// Add customer credential</div>
                                <div class="text-white mb-1"><span class="text-blue-400">const</span> invoices = await fetch(<span class="text-yellow-300">'https://api.invoice-collector.com/api/v1/credential'</span>,</div>
                                <div class="text-white ml-4 mb-1">{"{"}</div>
                                <div class="text-white ml-8 mb-1">headers: {"{ Authorization': 'Bearer YOUR_API_KEY' }"},</div>
                                <div class="text-white ml-8 mb-1">body: {"{"}</div>
                                <div class="text-white ml-12 mb-1">collector: 'amazon',</div>
                                <div class="text-white ml-12 mb-1">email: 'ana.becker@company.com',</div>
                                <div class="text-white ml-12 mb-1">password: '*********'</div>
                                <div class="text-white ml-8 mb-1">{"}"}</div>
                                <div class="text-white ml-4 mb-1">{"}"}</div>
                                <div class="text-white mb-4">);</div>
                                
                                <div class="text-green-400 mb-2">// New invoices callback</div>
                                <div class="text-white mb-1"><span class="text-blue-400">app.post</span>(<span class="text-yellow-300">'/callback/invoices'</span>{", (req, res) => {"}</div>
                                <div class="text-gray-300 ml-4 mb-1">// Add to your software</div>
                                <div class="text-white ml-4 mb-1"><span class="text-blue-400">addToSoftware</span>(req.body);</div>
                                <div class="text-white mb-1">{"});"}</div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">
                                Technical support included
                            </h3>
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>
                                        API documentation with examples
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>
                                        Technical support for integration
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>
                                        Test environment with real data
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>
                                        Real time monitoring and alerts
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>
                                        99.9% availability guaranteed
                                    </span>
                                </div>
                            </div>
                            
                            <div class="mt-8 p-4 bg-blue-50 rounded-lg">
                                <h4 class="font-semibold text-blue-900 mb-2">
                                    <i class="fas fa-lightbulb mr-2"></i>
                                    Need help with the integration?
                                </h4>
                                <p class="text-blue-700 text-sm mb-3">
                                    Our engineers can assist you with the integration or do it for you.
                                </p>
                                <button onClick={openModal} class="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                                    Plan a technical call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        <i class="fas fa-shield-alt text-blue-600 mr-3"></i>
                        Security & Compliance
                    </h2>
                    <p class="text-xl text-gray-600">
                        Your customers' datas are protected with the highest security standards
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-lock text-green-600 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-2">Encryption</h3>
                        <p class="text-sm text-gray-600">
                            End-to-end encryption, TLS 1.3, data encrypted at rest
                        </p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-2">
                            EU hosting
                        </h3>
                        <p class="text-sm text-gray-600">
                            Servers in France, native GDPR compliance
                        </p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-eye text-purple-600 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-2">
                            Full audit trail
                        </h3>
                        <p class="text-sm text-gray-600">
                            Detailed logs, traceability, controlled access
                        </p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-certificate text-yellow-600 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-2">
                            Certifications
                        </h3>
                        <p class="text-sm text-gray-600">
                            ISO 27001, SOC2, e-invoicing compliance
                        </p>
                    </div>
                </div>

                <div class="bg-gray-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
                        E-invoicing regulatory compliance
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4">
                                <i class="fas fa-check-circle text-green-600 mr-2"></i>
                                Ready for the next regulations
                            </h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>✓ Chorus Pro integration (France)</li>
                                <li>✓ Peppol network support (EU)</li>
                                <li>✓ Facture-X, UBL and CII compatibility</li>
                                <li>✓ Electronic signature</li>
                                <li>✓ 10 year storage archiving</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4">
                                <i class="fas fa-users text-blue-600 mr-2"></i>
                                Your customers are protected
                            </h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>✓ Explicit consent required</li>
                                <li>✓ Right to be forgotten respected</li>
                                <li>✓ Data portability</li>
                                <li>✓ Dedicated DPO available</li>
                                <li>✓ Transparent privacy policy</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <div class="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                            <i class="fas fa-award text-yellow-500 mr-2"></i>
                            <span class="font-semibold text-gray-900">
                                Certified e-invoicing service provider
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        A <span class="text-blue-600">win-win</span> partnership model
                    </h2>
                    <p class="text-xl text-gray-600">
                        Add value to your software while generating additional revenue
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">
                            Two flexible pricing models
                        </h3>
                        
                        <div class="space-y-6">
                            <div class="bg-white rounded-xl p-6 shadow-lg">
                                <div class="flex items-center mb-4">
                                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-chart-line text-blue-600"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold text-gray-900">Pay-as-you-go</h4>
                                </div>
                                <p class="text-gray-600 mb-3">
                                    <span class="text-2xl font-bold text-blue-600">10€</span> 
                                    per active connector per month
                                </p>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    <li>✓ No fixed costs</li>
                                    <li>✓ Automatic scaling</li>
                                    <li>✓ Transparent for your customers</li>
                                </ul>
                            </div>
                            
                            <div class="bg-white rounded-xl p-6 shadow-lg">
                                <div class="flex items-center mb-4">
                                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-handshake text-green-600"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold text-gray-900">
                                        Revenue sharing
                                    </h4>
                                </div>
                                <p class="text-gray-600 mb-3">
                                    Partagez les revenus générés par la fonctionnalité
                                    Share the revenue generated by the feature 
                                </p>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    <li>✓ Recurent incomes</li>
                                    <li>✓ Customizable models</li>
                                    <li>✓ Incentive to growth</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-2xl shadow-xl p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">
                            What the partnership includes
                        </h3>
                        
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <i class="fas fa-code text-blue-600 mr-3 mt-1"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-900">
                                        Full technical support
                                    </h4>
                                    <p class="text-sm text-gray-600">
                                        Assisted integration, documentation, REST API
                                    </p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-bullhorn text-green-600 mr-3 mt-1"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Co-marketing</h4>
                                    <p class="text-sm text-gray-600">
                                        Customers case studies, webinars, joint events
                                    </p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-headset text-purple-600 mr-3 mt-1"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-900">
                                        Dedicated customer support
                                    </h4>
                                    <p class="text-sm text-gray-600">
                                        French-speaking team, guaranteed SLAs
                                    </p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-cog text-orange-600 mr-3 mt-1"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-900">
                                        Customization
                                    </h4>
                                    <p class="text-sm text-gray-600">
                                        Specific connectors, branding, custom features
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-2">
                                <i class="fas fa-rocket mr-2 text-blue-600"></i>
                                Early adopter program
                            </h4>
                            <p class="text-sm text-gray-600 mb-3">
                                Free integration + 3 months of use offered for the first 10 partners
                            </p>
                            <span class="inline-flex items-center bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                <i class="fas fa-clock mr-1"></i>
                                Limited offer - 3 spots left
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 gradient-bg text-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl font-bold mb-6">
                    Ready to transform your software with AI automatic collection?
                </h2>
                <p class="text-xl mb-8 text-gray-100">
                    Join the software publishers who have already integrated Invoice Collector and differentiate their solution on the market.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div class="text-center">
                        <div class="text-4xl font-bold mb-2">24h</div>
                        <p class="text-gray-200">
                            Full integration
                        </p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold mb-2">+1000</div>
                        <p class="text-gray-200">
                            Connected sources
                        </p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold mb-2">95%</div>
                        <p class="text-gray-200">
                            Extraction accuracy
                        </p>
                    </div>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="https://app.invoice-collector.com/signup" target="_blank">
                        <button class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors pulse-border">
                            <i class="fas fa-rocket mr-2"></i>
                            Start for free
                        </button>
                    </Link>
                    <Link to="/docs">
                        <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                            <i class="fas fa-code mr-2"></i>
                            Documentation
                        </button>
                    </Link>
                </div>
                
                <p class="mt-6 text-sm text-gray-200">
                    <i class="fas fa-shield-alt mr-2"></i>
                    No commitment • Technical support included • GDPR compliance
                </p>
            </div>
        </section>
        </div>
        <div id="leadModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
            <div id="leadModalBack" class="flex items-center justify-center min-h-screen p-4">
                <div class="bg-white rounded-2xl max-w-md w-full p-8">
                    <div class="text-center mb-6">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">
                            Start your integration
                        </h3>
                        <p class="text-gray-600">
                            Free access to the API + technical support included
                        </p>
                    </div>
                    
                    <form id="leadForm" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">
                                Full name
                            </label>
                            <input type="text" name="name" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">
                                Professionnal email
                            </label>
                            <input type="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">
                                Name of the company
                            </label>
                            <input type="text" name="company" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">
                                Number of customers
                            </label>
                            <select required name="customers" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="1-50">1-50</option>
                                <option value="51-200">51-200</option>
                                <option value="201-1000">201-1000</option>
                                <option value="1000+">1000+</option>
                            </select>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Que préférez-vous ?</label>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="radio" name="preference" value="demo" class="mr-2"></input>
                                    <span class="text-sm">
                                        Customized demo (30 min)
                                    </span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" name="preference" value="sandbox" class="mr-2"></input>
                                    <span class="text-sm">
                                        Direct access to the sandbox
                                    </span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" name="preference" value="call" class="mr-2"></input>
                                    <span class="text-sm">
                                        Technical call with our engineers
                                    </span>
                                </label>
                            </div>
                        </div>
                        
                        <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            <i class="fas fa-rocket mr-2"></i>
                            Start integration
                        </button>
                    </form>
                    
                    <p class="mt-4 text-xs text-gray-500 text-center">
                        By submitting this form, you agree to be contacted by our technical team.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
  );
}

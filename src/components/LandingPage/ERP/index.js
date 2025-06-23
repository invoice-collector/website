import { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LandingPage() {
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
        }
  });
  const {siteConfig} = useDocusaurusContext();
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
                            <span class="text-sm font-medium">Nouvelle API • Conforme e-invoicing 2025</span>
                        </div>
                        <h1 class="text-5xl font-bold mb-6 leading-tight">
                            L'API qui <span class="text-yellow-300">automatise</span> la collecte de factures pour vos clients ERP
                        </h1>
                        <p class="text-xl mb-8 text-gray-100">
                            Différenciez votre logiciel comptable avec notre API universelle. Vos clients récupèrent automatiquement leurs factures depuis +1000 sources. Zéro effort, maximum de valeur.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <button onclick="openModal()" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors pulse-border">
                                <i class="fas fa-code mr-2"></i>
                                Intégrer l'API gratuitement
                            </button>
                            <button onclick="scrollToDemo()" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                                <i class="fas fa-play mr-2"></i>
                                Voir la démo
                            </button>
                        </div>
                        <div class="mt-8 flex items-center space-x-6 text-sm">
                            <div class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-2"></i>
                                <span>Intégration en 24h</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-shield-alt text-green-400 mr-2"></i>
                                <span>Conforme RGPD</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-bolt text-green-400 mr-2"></i>
                                <span>API REST simple</span>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                            <div class="mb-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm font-medium text-gray-200">Factures collectées aujourd'hui</span>
                                    <span class="text-green-400 text-sm"><i class="fas fa-arrow-up mr-1"></i>+156%</span>
                                </div>
                                <div class="text-3xl font-bold">2,847</div>
                            </div>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                                            <i class="fas fa-bolt text-white text-xs"></i>
                                        </div>
                                        <span class="text-sm">Orange Business</span>
                                    </div>
                                    <span class="text-green-400 text-sm">✓ Collectée</span>
                                </div>
                                <div class="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                            <i class="fas fa-building text-white text-xs"></i>
                                        </div>
                                        <span class="text-sm">Chorus Pro</span>
                                    </div>
                                    <span class="text-green-400 text-sm">✓ Collectée</span>
                                </div>
                                <div class="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                            <i class="fas fa-envelope text-white text-xs"></i>
                                        </div>
                                        <span class="text-sm">Email invoices@</span>
                                    </div>
                                    <span class="text-yellow-400 text-sm">⟳ En cours</span>
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
                        Vos clients ERP perdent <span class="text-red-600">3h/jour</span> à chasser leurs factures
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Portails fournisseurs, boîtes email, documents papier... La collecte manuelle coûte cher et freine la productivité.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-clock text-red-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Temps perdu</h3>
                        <p class="text-gray-600 mb-4">5-10 minutes par facture en collecte manuelle</p>
                        <div class="text-3xl font-bold text-red-600">74%</div>
                        <p class="text-sm text-gray-500">des PME seulement partiellement automatisées</p>
                    </div>
                    
                    <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-dollar-sign text-red-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Coût élevé</h3>
                        <p class="text-gray-600 mb-4">10-40€ par facture traitée manuellement</p>
                        <div class="text-3xl font-bold text-red-600">x6</div>
                        <p class="text-sm text-gray-500">plus cher qu'une solution automatisée</p>
                    </div>
                    
                    <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Erreurs & pertes</h3>
                        <p class="text-gray-600 mb-4">Documents perdus, retards de paiement</p>
                        <div class="text-3xl font-bold text-red-600">40%</div>
                        <p class="text-sm text-gray-500">des équipes AP citent ce problème</p>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">
                        Et si vos clients pouvaient automatiser 100% de leur collecte de factures ?
                    </h3>
                    <p class="text-lg text-gray-600 mb-6">
                        Avec Invoice Collector, transformez cette douleur en avantage concurrentiel pour votre ERP.
                    </p>
                    <button onclick="scrollToSolution()" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Découvrir la solution <i class="fas fa-arrow-down ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <section id="solution" class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Une API universelle pour <span class="text-blue-600">automatiser</span> la collecte
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Invoice Collector se connecte à +1000 sources pour récupérer automatiquement toutes les factures de vos clients.
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
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Connecteurs universels</h3>
                                    <p class="text-gray-600">Email (Gmail, Outlook), portails fournisseurs (Orange, EDF, SFR...), plateformes e-invoicing (Chorus Pro, Peppol)</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-brain text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">IA d'extraction</h3>
                                    <p class="text-gray-600">OCR avancé + NLP pour extraire automatiquement les données clés (montant, date, TVA, fournisseur) avec 95%+ de précision</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                    <i class="fas fa-code text-purple-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">API REST simple</h3>
                                    <p class="text-gray-600">Intégration plug-and-play dans votre ERP. Endpoints intuitifs, webhooks temps réel, SDKs disponibles</p>
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
                            <div class="text-green-400 mb-2">POST /api/v1/invoices/fetch</div>
                            <div class="text-gray-300 mb-2">{"{"}</div>
                            <div class="text-gray-300 ml-4 mb-1">"source": "email",</div>
                            <div class="text-gray-300 ml-4 mb-1">"credentials": "***",</div>
                            <div class="text-gray-300 ml-4 mb-1">"filters": {"{"}</div>
                            <div class="text-gray-300 ml-8 mb-1">"from": "2024-01-01"</div>
                            <div class="text-gray-300 ml-4 mb-1">{"}"}</div>
                            <div class="text-gray-300 mb-4">{"}"}</div>
                            
                            <div class="text-blue-400 mb-2">Response: 200 OK</div>
                            <div class="text-gray-300 mb-2">{"{"}</div>
                            <div class="text-gray-300 ml-4 mb-1">"invoices": [</div>
                            <div class="text-gray-300 ml-8 mb-1">{"{"}</div>
                            <div class="text-gray-300 ml-12 mb-1">"id": "inv_1234",</div>
                            <div class="text-gray-300 ml-12 mb-1">"supplier": "Orange Business",</div>
                            <div class="text-gray-300 ml-12 mb-1">"amount": 245.80,</div>
                            <div class="text-gray-300 ml-12 mb-1">"date": "2024-01-15",</div>
                            <div class="text-gray-300 ml-12 mb-1">"status": "extracted"</div>
                            <div class="text-gray-300 ml-8 mb-1">{"}"}</div>
                            <div class="text-gray-300 ml-4 mb-1">]</div>
                            <div class="text-gray-300">{"}"}</div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Ce que vous apportez à vos clients ERP
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-check-circle text-green-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-2">Zéro perte</h4>
                            <p class="text-sm text-gray-600">100% des factures automatiquement récupérées</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-tachometer-alt text-blue-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-2">Clôture rapide</h4>
                            <p class="text-sm text-gray-600">Accélération du closing mensuel</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-users text-purple-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-2">Équipes libérées</h4>
                            <p class="text-sm text-gray-600">Plus de temps pour l'analyse financière</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-star text-yellow-600 text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-2">Différenciation</h4>
                            <p class="text-sm text-gray-600">Avantage concurrentiel sur le marché</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Nos partenaires ERP témoignent
                    </h2>
                    <p class="text-xl text-gray-600">
                        Ils ont intégré Invoice Collector et transformé l'expérience de leurs clients
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
                                "L'intégration s'est faite en 2 semaines. Nos clients économisent 5h/semaine et nous demandent maintenant d'autres automatisations. ROI immédiat !"
                            </p>
                        </div>
                        <div class="text-sm text-gray-500">
                            <i class="fas fa-building mr-2"></i>
                            500+ clients PME
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
                                "Nos clients nous disent que c'est la fonctionnalité la plus utile qu'on ait ajoutée en 5 ans. Notre taux de rétention a augmenté de 23% !"
                            </p>
                        </div>
                        <div class="text-sm text-gray-500">
                            <i class="fas fa-building mr-2"></i>
                            200+ entreprises clientes
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
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="text-gray-700 italic">
                                "Game changer ! On ferme plus de deals grâce à cette différenciation. L'API est stable et le support réactif. Exactement ce qu'on cherchait."
                            </p>
                        </div>
                        <div class="text-sm text-gray-500">
                            <i class="fas fa-building mr-2"></i>
                            Startup SaaS comptabilité
                        </div>
                    </div>
                </div>

                <div class="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">
                        Rejoignez 50+ éditeurs ERP qui font confiance à Invoice Collector
                    </h3>
                    <p class="text-lg text-gray-600 mb-6">
                        Ils ont tous augmenté leur valeur client et leur différenciation concurrentielle
                    </p>
                    <button onclick="openModal()" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Rejoindre le programme partenaire
                    </button>
                </div>
            </div>
        </section>

        <section id="integration" class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Intégration <span class="text-green-600">simple</span> en 3 étapes
                    </h2>
                    <p class="text-xl text-gray-600">
                        Ajoutez la collecte automatique de factures à votre ERP en moins de 24h
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div class="text-center">
                        <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-white text-2xl font-bold">1</span>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Créez votre compte API</h3>
                        <p class="text-gray-600 mb-4">
                            Inscription gratuite, accès immédiat au sandbox avec données de test
                        </p>
                        <ul class="text-sm text-gray-500 space-y-1">
                            <li>✓ Clés API instantanées</li>
                            <li>✓ Documentation complète</li>
                            <li>✓ SDK JavaScript/Python</li>
                        </ul>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-white text-2xl font-bold">2</span>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Intégrez les endpoints</h3>
                        <p class="text-gray-600 mb-4">
                            Quelques lignes de code pour connecter votre ERP à notre API
                        </p>
                        <ul class="text-sm text-gray-500 space-y-1">
                            <li>✓ REST API simple</li>
                            <li>✓ Webhooks temps réel</li>
                            <li>✓ Support technique dédié</li>
                        </ul>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-white text-2xl font-bold">3</span>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Déployez chez vos clients</h3>
                        <p class="text-gray-600 mb-4">
                            Vos clients connectent leurs sources, les factures arrivent automatiquement
                        </p>
                        <ul class="text-sm text-gray-500 space-y-1">
                            <li>✓ Interface client simple</li>
                            <li>✓ Support utilisateur final</li>
                            <li>✓ Monitoring en temps réel</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Code d'exemple d'intégration</h3>
                            <div class="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                                <div class="text-green-400 mb-2">// Récupération des factures</div>
                                <div class="text-blue-400 mb-1">const</div>
                                <div class="text-white mb-1"> invoices = await fetch(</div>
                                <div class="text-yellow-300 mb-1">  'https://api.invoicecollector.com/v1/invoices',</div>
                                <div class="text-white mb-1">  {"{"}</div>
                                <div class="text-gray-300 mb-1">    headers: {"{"}</div>
                                <div class="text-yellow-300 mb-1">      'Authorization': 'Bearer YOUR_API_KEY'</div>
                                <div class="text-gray-300 mb-1">    {"}"}</div>
                                <div class="text-white mb-1">  {"}"}</div>
                                <div class="text-white mb-4">);</div>
                                
                                <div class="text-green-400 mb-2">// Webhook pour nouvelles factures</div>
                                <div class="text-blue-400 mb-1">app.post</div>
                                <div class="text-white mb-1">(</div>
                                <div class="text-yellow-300 mb-1">'/webhook/invoices'</div>
                                <div class="text-white mb-1">{", (req, res) => {"}</div>
                                <div class="text-gray-300 mb-1">  const invoice = req.body;</div>
                                <div class="text-gray-300 mb-1">  // Ajouter à votre ERP</div>
                                <div class="text-blue-400 mb-1">  addToERP</div>
                                <div class="text-white mb-1">(invoice);</div>
                                <div class="text-white">{"});"}</div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Support technique inclus</h3>
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>Documentation API complète avec exemples</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>SDKs JavaScript, Python, PHP disponibles</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>Support technique dédié pour l'intégration</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>Environnement de test avec données réelles</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>Monitoring et alertes en temps réel</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span>SLA 99.9% de disponibilité garantie</span>
                                </div>
                            </div>
                            
                            <div class="mt-8 p-4 bg-blue-50 rounded-lg">
                                <h4 class="font-semibold text-blue-900 mb-2">
                                    <i class="fas fa-lightbulb mr-2"></i>
                                    Besoin d'aide pour l'intégration ?
                                </h4>
                                <p class="text-blue-700 text-sm mb-3">
                                    Nos ingénieurs peuvent faire l'intégration avec vous ou pour vous.
                                </p>
                                <button onclick="openModal()" class="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                                    Planifier un call technique
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
                        Sécurité & conformité de niveau enterprise
                    </h2>
                    <p class="text-xl text-gray-600">
                        Vos données client sont protégées avec les plus hauts standards de sécurité
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-lock text-green-600 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-2">Chiffrement</h3>
                        <p class="text-sm text-gray-600">End-to-end encryption, TLS 1.3, données chiffrées au repos</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-2">Hébergement EU</h3>
                        <p class="text-sm text-gray-600">Serveurs en France, conformité RGPD native</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-eye text-purple-600 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-2">Audit complet</h3>
                        <p class="text-sm text-gray-600">Logs détaillés, traçabilité, accès contrôlés</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-certificate text-yellow-600 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-2">Certifications</h3>
                        <p class="text-sm text-gray-600">ISO 27001, SOC2, conformité e-invoicing 2025</p>
                    </div>
                </div>

                <div class="bg-gray-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Conformité réglementaire e-invoicing 2025
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4">
                                <i class="fas fa-check-circle text-green-600 mr-2"></i>
                                Prêt pour les nouvelles réglementations
                            </h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>✓ Intégration Chorus Pro (France)</li>
                                <li>✓ Support réseau Peppol (EU)</li>
                                <li>✓ Formats UBL, CII compatibles</li>
                                <li>✓ Signature électronique</li>
                                <li>✓ Archivage légal 10 ans</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4">
                                <i class="fas fa-users text-blue-600 mr-2"></i>
                                Vos clients sont protégés
                            </h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>✓ Consentement explicite requis</li>
                                <li>✓ Droit à l'oubli respecté</li>
                                <li>✓ Portabilité des données</li>
                                <li>✓ DPO dédié disponible</li>
                                <li>✓ Politique de confidentialité transparente</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <div class="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                            <i class="fas fa-award text-yellow-500 mr-2"></i>
                            <span class="font-semibold text-gray-900">Certifié prestataire de service e-invoicing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Un modèle de partenariat <span class="text-blue-600">gagnant-gagnant</span>
                    </h2>
                    <p class="text-xl text-gray-600">
                        Ajoutez de la valeur à votre ERP tout en générant des revenus additionnels
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">
                            Deux modèles de tarification flexibles
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
                                    <span class="text-2xl font-bold text-blue-600">0,10€</span> 
                                    par connecteur actif par mois
                                </p>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    <li>✓ Pas de frais fixes</li>
                                    <li>✓ Scaling automatique</li>
                                    <li>✓ Transparent pour vos clients</li>
                                </ul>
                            </div>
                            
                            <div class="bg-white rounded-xl p-6 shadow-lg">
                                <div class="flex items-center mb-4">
                                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-handshake text-green-600"></i>
                                    </div>
                                    <h4 class="text-xl font-semibold text-gray-900">Revenue sharing</h4>
                                </div>
                                <p class="text-gray-600 mb-3">
                                    Partagez les revenus générés par la fonctionnalité
                                </p>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    <li>✓ Revenus récurrents</li>
                                    <li>✓ Modèle personnalisable</li>
                                    <li>✓ Incentive à la croissance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-2xl shadow-xl p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">
                            Ce qu'inclut le partenariat
                        </h3>
                        
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <i class="fas fa-code text-blue-600 mr-3 mt-1"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Support technique complet</h4>
                                    <p class="text-sm text-gray-600">Intégration assistée, documentation, SDK</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-bullhorn text-green-600 mr-3 mt-1"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Co-marketing</h4>
                                    <p class="text-sm text-gray-600">Cas clients, webinaires, événements communs</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-headset text-purple-600 mr-3 mt-1"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Support client dédié</h4>
                                    <p class="text-sm text-gray-600">Équipe francophone, SLA garantis</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-cog text-orange-600 mr-3 mt-1"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Personnalisation</h4>
                                    <p class="text-sm text-gray-600">Connecteurs spécifiques, branding, fonctionnalités sur mesure</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-2">
                                <i class="fas fa-rocket mr-2 text-blue-600"></i>
                                Programme early adopter
                            </h4>
                            <p class="text-sm text-gray-600 mb-3">
                                Intégration gratuite + 3 mois d'utilisation offerts pour les 10 premiers partenaires
                            </p>
                            <span class="inline-flex items-center bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                <i class="fas fa-clock mr-1"></i>
                                Offre limitée - 3 places restantes
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 gradient-bg text-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl font-bold mb-6">
                    Prêt à transformer votre ERP avec la collecte automatique ?
                </h2>
                <p class="text-xl mb-8 text-gray-100">
                    Rejoignez les éditeurs ERP qui ont déjà intégré Invoice Collector et différencient leur solution sur le marché.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div class="text-center">
                        <div class="text-4xl font-bold mb-2">24h</div>
                        <p class="text-gray-200">Intégration complète</p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold mb-2">+1000</div>
                        <p class="text-gray-200">Sources connectées</p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold mb-2">95%</div>
                        <p class="text-gray-200">Précision d'extraction</p>
                    </div>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="openModal()" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors pulse-border">
                        <i class="fas fa-rocket mr-2"></i>
                        Commencer l'intégration gratuitement
                    </button>
                    <button onclick="openModal()" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                        <i class="fas fa-calendar mr-2"></i>
                        Planifier une démo
                    </button>
                </div>
                
                <p class="mt-6 text-sm text-gray-200">
                    <i class="fas fa-shield-alt mr-2"></i>
                    Sans engagement • Support technique inclus • Conformité RGPD garantie
                </p>
            </div>
        </section>
      </div>
    </Layout>
  );
}

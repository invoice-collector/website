import { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function LandingPageFr() {
    const {siteConfig} = useDocusaurusContext();

    // ROI Calculator state
    const [clients, setClients] = useState(200);
    const [invoicesPerClient, setInvoicesPerClient] = useState(4);
    const [minutesSaved, setMinutesSaved] = useState(3);
    const [hourlyCost, setHourlyCost] = useState(35);

    // Determine plan price based on client count
    const getPlanPrice = (n) => {
        if (n <= 250) return 129;
        if (n <= 500) return 199;
        if (n <= 1000) return 299;
        return 399;
    };
    const getPlanName = (n) => {
        if (n <= 250) return 'Starter';
        if (n <= 500) return 'Standard';
        if (n <= 1000) return 'Enterprise';
        return 'Custom';
    };

    const planPrice = getPlanPrice(clients);
    const planName = getPlanName(clients);
    const monthlySavings = clients * invoicesPerClient * (minutesSaved / 60) * hourlyCost;
    const roiMultiple = (monthlySavings / planPrice).toFixed(1);
    const costPerInvoice = (minutesSaved / 60) * hourlyCost;
    const breakEvenInvoices = Math.ceil(planPrice / costPerInvoice);
    const breakEvenClients = Math.ceil(breakEvenInvoices / invoicesPerClient);

    const formatCurrency = (v) => v >= 1000 ? `${v.toLocaleString('fr-FR')}€` : `${v}€`;

    return (
        <Layout
        title="L'API open source du collecteur de factures, propulsée par l'IA"
        description={siteConfig.tagline}>
            <div id="landingpage" className="font-sans text-secondary">
                <style>{`
                    /* PRIMARY GREEN */

                    .font-title { font-family: 'Playfair Display', serif; }

                    /* PRIMARY GREEN */

                    .bg-primary { background-color: #239e65; }
                    .text-primary { color: #239e65; }
                    .border-primary { border-color: #239e65; }

                    /* PRIMARY GREEN DARK */

                    .bg-primary-dark { background-color: #1d8656; }
                    .hover-bg-primary-dark:hover { background-color: #1d8656; }
                    .text-primary-dark { color: #1d8656; }
                    .hover-text-primary-dark:hover { color: #1d8656; }
                    .border-primary-dark { border-color: #1d8656; }
                    .hover-border-primary-dark:hover { border-color: #1d8656; }

                    /* PRIMARY GREEN LIGHT */

                    .bg-primary-light { background-color: #e9f5ef; }

                    /* SECONDARY GRAY */

                    .bg-secondary { background-color: #002147; }
                    .hover-bg-secondary:hover { background-color: #002147; }
                    .text-secondary { color: #002147; }
                    .hover-text-secondary:hover { color: #002147; }
                    .border-secondary { border-color: #002147; }
                    .hover-border-secondary:hover { border-color: #002147; }
                    
                    /* SECONDARY GRAY LIGHT */

                    .bg-secondary-light { background-color: #5a7080; }
                    .hover-bg-secondary-light:hover { background-color: #5a7080; }
                    .text-secondary-light { color: #5a7080; }
                    .hover-text-secondary-light:hover { color: #5a7080; }
                    .border-secondary-light { border-color: #5a7080; }
                    .hover-border-secondary-light:hover { border-color: #5a7080; }

                    /* SECTION COLORS */

                    .bg-section-odd { background-color: #faf8f4; }
                `}</style>

                {/* HERO */}
                <section className="relative bg-section-odd text-white text-center py-24 px-6">
                    <div className="inline-flex items-center gap-2 bg-primary-light text-primary border-primary backdrop-blur rounded-full px-4 py-1.5 text-sm font-medium mb-8">
                        <span className="w-2 h-2 rounded-full animate-pulse bg-primary"></span>
                        Must-have cabinet comptable 2026
                    </div>
                    <h1 className="text-4xl md:text-5xl text-secondary font-extrabold font-title leading-tight max-w-3xl mx-auto mb-6">
                        Automatisez la collecte des factures <em className="text-primary not-italic">hors facturation électronique</em>
                    </h1>
                    <p className="text-lg md:text-xl text-secondary-light max-w-2xl mx-auto mb-10">
                        Un seul outil. Tous vos clients. Toutes les factures hors e-facture récupérées automatiquement depuis un seul endroit.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-14">
                        <Link to="#contact" className="inline-block bg-primary hover-bg-primary-dark text-white hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline">Demander une démo gratuite →</Link>
                        <Link to="#roi" className="inline-block border border-secondary-light border-opacity-30 hover:border-opacity-60 text-secondary-light px-8 py-3 rounded-xl transition no-underline">Calculer mon ROI</Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white bg-opacity-5 rounded-xl p-4"><div className="text-4xl font-title font-bold text-primary">30j</div><div className="text-xs text-gray-400 mt-1">Pour mesurer le ROI pilote</div></div>
                        <div className="bg-white bg-opacity-5 rounded-xl p-4"><div className="text-4xl font-title font-bold text-primary">3 min</div><div className="text-xs text-gray-400 mt-1">Économisées par facture portail</div></div>
                        <div className="bg-white bg-opacity-5 rounded-xl p-4"><div className="text-4xl font-title font-bold text-primary">100%</div><div className="text-xs text-gray-400 mt-1">Du portefeuille couvert</div></div>
                        <div className="bg-white bg-opacity-5 rounded-xl p-4"><div className="text-4xl font-title font-bold text-primary">1 Mois</div><div className="text-xs text-gray-400 mt-1">ROI positif dès le premier mois</div></div>
                    </div>
                </section>

                {/* PROMISE — white */}
                <div id="promise" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-14">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">La promesse</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">Un seul outil. Tous vos clients. Toutes les factures.</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Invoice Collector centralise et automatise la collecte de tous les flux qui restent hors du circuit e-facture — ceux que vous devez quand même obtenir et archiver pour produire.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 rounded-2xl p-8 text-center">
                                <div className="text-4xl mb-4">🌍</div>
                                <div className="font-semibold font-title text-secondary mb-2">Fournisseurs étrangers</div>
                                <div className="text-sm text-gray-500">SaaS, cloud, marketplaces, publicité digitale — les éditeurs internationaux qui ne transitent jamais par le flux e-facture. Notion, Google Workspace, OpenAI, Adobe, AWS…</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-8 text-center">
                                <div className="text-4xl mb-4">📄</div>
                                <div className="font-semibold font-title text-secondary mb-2">Flux hors e-facture</div>
                                <div className="text-sm text-gray-500">Factures B2C, associations, TPE non assujetties, professions libérales de santé — tout flux exclu du périmètre obligatoire de la réforme 2026.</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-8 text-center">
                                <div className="text-4xl mb-4">🔄</div>
                                <div className="font-semibold font-title text-secondary mb-2">Le "reste à collecter"</div>
                                <div className="text-sm text-gray-500">Un volume récurrent, mensuel, qui grossit avec votre portefeuille et que le cabinet devra toujours traiter manuellement sans automatisation.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROBLEM — beige */}
                <div id="problem" className="bg-section-odd">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-10">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Le problème</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">Le coût caché des portails fournisseurs</h2>
                            <p className="text-gray-500 max-w-2xl">Sans automatisation, chaque facture "hors e-facture" impose un parcours manuel qui se répète pour chaque client, chaque mois.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">01</div>
                                <div className="text-2xl mb-2">🔐</div>
                                <div className="font-semibold text-secondary text-sm">Connexion</div>
                                <div className="text-xs text-gray-400 mt-1">Portail via identifiants &amp; MFA</div>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">02</div>
                                <div className="text-2xl mb-2">🔍</div>
                                <div className="font-semibold text-secondary text-sm">Navigation</div>
                                <div className="text-xs text-gray-400 mt-1">Rechercher la période cible</div>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">03</div>
                                <div className="text-2xl mb-2">⬇️</div>
                                <div className="font-semibold text-secondary text-sm">Téléchargement</div>
                                <div className="text-xs text-gray-400 mt-1">Enregistrer le PDF facture</div>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">04</div>
                                <div className="text-2xl mb-2">🏷️</div>
                                <div className="font-semibold text-secondary text-sm">Renommage</div>
                                <div className="text-xs text-gray-400 mt-1">Respecter conventions cabinet</div>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">05</div>
                                <div className="text-2xl mb-2">📁</div>
                                <div className="font-semibold text-secondary text-sm">Dépôt GED</div>
                                <div className="text-xs text-gray-400 mt-1">Intégration dans vos outils</div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="text-3xl font-title font-extrabold text-primary mb-2">3 min</div>
                                <div className="text-sm text-gray-600"><strong>Par facture portail en moyenne</strong><br/>Connexion + téléchargement + renommage + GED. 100 factures/mois ≈ 5h de temps non facturable.</div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="text-3xl font-title font-extrabold text-primary mb-2">35€/h</div>
                                <div className="text-sm text-gray-600"><strong>Valeur du temps collaborateur chargé</strong><br/>Sur 300 clients × 3–5 fournisseurs hors e-facture : 900 à 1 500 factures/mois à traiter.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SOLUTION — white */}
                <div id="solution" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-10">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">La solution</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">Invoice Collector automatise l'intégralité du parcours</h2>
                            <p className="text-gray-500 max-w-2xl">Notre promesse : on ne vend pas un outil. On vend du temps collaborateur récupérable et de la qualité de production.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                <div className="text-3xl flex-shrink-0">⚡</div>
                                <div><div className="font-semibold text-secondary mb-1">Collecte planifiée</div><div className="text-sm text-gray-500">Mensuelle ou hebdomadaire — les factures sont récupérées automatiquement sur tous les portails connectés, sans intervention manuelle.</div></div>
                            </div>
                            <div className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                <div className="text-3xl flex-shrink-0">🗂️</div>
                                <div><div className="font-semibold text-secondary mb-1">Classement automatique</div><div className="text-sm text-gray-500">Par client, période et fournisseur — selon vos conventions de nommage, prêt à intégrer dans votre GED ou vos outils de production.</div></div>
                            </div>
                            <div className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                <div className="text-3xl flex-shrink-0">🔍</div>
                                <div><div className="font-semibold text-secondary mb-1">Traçabilité complète</div><div className="text-sm text-gray-500">Quoi, quand, pour qui — chaque collecte est horodatée et auditable. Fini les doutes sur la complétude d'un dossier client.</div></div>
                            </div>
                            <div className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                <div className="text-3xl flex-shrink-0">🌐</div>
                                <div><div className="font-semibold text-secondary mb-1">100% du portefeuille</div><div className="text-sm text-gray-500">Un process unique, standardisé, applicable à l'ensemble de vos clients — scalable sans surcoût, pas seulement aux plus volumineux.</div></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROI — beige */}
                <div id="roi" className="bg-section-odd">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-14">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Calculateur ROI</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">Le calcul du ROI en 30 secondes</h2>
                            <p className="text-gray-500 max-w-2xl">Le point mort est très bas : quelques dizaines à quelques centaines de factures automatisées par mois suffisent à amortir l'abonnement.</p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* ROI Examples */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <div className="font-bold text-secondary mb-4">📊 Cabinet 250 clients</div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Clients actifs (N)</span><span className="font-medium">250 dossiers</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Factures portail / client / mois</span><span className="font-medium">4</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Temps économisé / facture</span><span className="font-medium">3 min</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Coût horaire chargé</span><span className="font-medium">35€/h</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">250 × 4 × (3/60) × 35</span><span className="font-bold text-primary">= 1 750€/mois</span></div>
                                    <div className="mt-4 text-primary font-title font-bold text-center py-2 text-xl">ROI × 13,5 vs plan 129€</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <div className="font-bold text-secondary mb-4">📊 Cabinet 500 clients</div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Clients actifs (N)</span><span className="font-medium">500 dossiers</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Factures portail / client / mois</span><span className="font-medium">4</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Temps économisé / facture</span><span className="font-medium">3 min</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Coût horaire chargé</span><span className="font-medium">35€/h</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">500 × 4 × (3/60) × 35</span><span className="font-bold text-primary">= 3 500€/mois</span></div>
                                    <div className="mt-4 text-primary font-title font-bold text-center py-2 text-xl">ROI × 17,5 vs plan 199€</div>
                                </div>
                                <div className="bg-primary-light rounded-2xl p-5">
                                    <div className="font-semibold text-secondary mb-1">💡 Hypothèses conservatrices</div>
                                    <div className="text-sm text-secondary-light">Ces calculs utilisent seulement 3 min par facture et 4 fournisseurs hors e-facture par client. La plupart des cabinets dépassent largement ces volumes.</div>
                                </div>
                            </div>
                            {/* ROI Calculator */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="font-title font-bold text-lg text-secondary mb-6">🧮 Votre ROI personnalisé</div>
                                <div className="mb-5">
                                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Clients actifs (N)</span><span className="font-semibold text-primary">{clients}</span></div>
                                    <input type="range" min="20" max="1000" value={clients} onChange={e => setClients(Number(e.target.value))} className="w-full" />
                                </div>
                                <div className="mb-5">
                                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Factures portail / client / mois</span><span className="font-semibold text-primary">{invoicesPerClient}</span></div>
                                    <input type="range" min="1" max="15" value={invoicesPerClient} onChange={e => setInvoicesPerClient(Number(e.target.value))} className="w-full" />
                                </div>
                                <div className="mb-5">
                                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Minutes économisées / facture</span><span className="font-semibold text-primary">{minutesSaved} min</span></div>
                                    <input type="range" min="2" max="8" value={minutesSaved} onChange={e => setMinutesSaved(Number(e.target.value))} className="w-full" />
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Coût horaire collaborateur</span><span className="font-semibold text-primary">{hourlyCost}€</span></div>
                                    <input type="range" min="25" max="65" value={hourlyCost} onChange={e => setHourlyCost(Number(e.target.value))} className="w-full" />
                                </div>
                                <div className="bg-primary-light rounded-xl p-6 text-center mb-4">
                                    <div className="text-3xl font-title font-extrabold text-primary">{formatCurrency(Math.round(monthlySavings))}</div>
                                    <div className="text-sm text-secondary-light mt-1">gains mensuels estimés</div>
                                    <div className="text-xs text-primary mt-2">soit × {roiMultiple} le plan {planPrice}€ {planName}</div>
                                </div>
                                <div className="text-sm text-gray-500 text-center mb-5">Point mort : <strong>{breakEvenInvoices} factures/mois</strong> — soit <strong>~{breakEvenClients} clients</strong> pour amortir l'abonnement</div>
                                <Link to="#contact" className="block text-center bg-primary hover-bg-primary-dark text-white hover:text-white font-semibold py-3 rounded-xl transition no-underline text-sm">Cadrer mon pilote →</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRICING — white */}
                <div id="pricing" className="bg-white">
                    <div className="max-w-6xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Tarification</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">Simple, lisible, prévisible</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Conçue pour accompagner la croissance du cabinet. 1 client actif = 1 client inscrit avec au moins un portail actif.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {/* Plan Starter */}
                            <div className="bg-gray-50 border border-secondary-light rounded-2xl p-6 flex flex-col">
                                <div className="font-semibold text-secondary mb-1">Starter</div>
                                <div className="text-4xl font-title font-extrabold text-secondary mb-0">129€</div>
                                <div className="text-sm text-gray-400">HT / mois</div>
                                <div className="text-xs text-gray-500 mt-1 mb-4">Jusqu'à 250 clients actifs</div>
                                <ul className="list-none p-0 space-y-2 text-sm text-gray-600 flex-1">
                                    <li><span className="text-primary mr-2">✓</span>Portails fournisseurs illimités</li>
                                    <li><span className="text-primary mr-2">✓</span>Collecte automatique planifiée</li>
                                    <li><span className="text-primary mr-2">✓</span>Classement client + période</li>
                                    <li><span className="text-primary mr-2">✓</span>Traçabilité complète</li>
                                    <li><span className="text-primary mr-2">✓</span>1h onboarding incluse</li>
                                </ul>
                                <Link to="#contact" className="mt-6 block hover:bg-gray-100 text-center border-2 border-gray-300 hover-border-primary text-secondary-light hover-text-secondary font-semibold py-2.5 rounded-xl transition no-underline text-sm">Démarrer</Link>
                            </div>
                            {/* Plan Standard */}
                            <div className="relative bg-secondary rounded-2xl p-6 flex flex-col text-white shadow-lg">
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Le plus populaire</div>
                                <div className="font-semibold mb-1">Standard</div>
                                <div className="text-4xl font-title font-extrabold mb-0">199€</div>
                                <div className="text-sm text-primary-lighter">HT / mois</div>
                                <div className="text-xs text-primary-lighter mt-1 mb-4">Jusqu'à 500 clients actifs</div>
                                <ul className="list-none p-0 space-y-2 text-sm text-primary-lighter flex-1">
                                    <li><span className="text-primary mr-2">✓</span>Tout le plan Starter</li>
                                    <li><span className="text-primary mr-2">✓</span>Support prioritaire</li>
                                    <li><span className="text-primary mr-2">✓</span>Intégrations GED avancées</li>
                                    <li><span className="text-primary mr-2">✓</span>Reporting cabinet complet</li>
                                    <li><span className="text-primary mr-2">✓</span>1h onboarding incluse</li>
                                </ul>
                                <Link to="#contact" className="mt-6 block text-center bg-primary hover-bg-primary-dark text-white hover:text-white font-semibold py-2.5 rounded-xl transition no-underline text-sm">Démarrer →</Link>
                            </div>
                            {/* Plan Enterprise */}
                            <div className="bg-gray-50 border border-secondary-light rounded-2xl p-6 flex flex-col">
                                <div className="font-semibold text-secondary mb-1">Enterprise</div>
                                <div className="text-4xl font-title font-extrabold text-secondary mb-0">299€</div>
                                <div className="text-sm text-gray-400">HT / mois</div>
                                <div className="text-xs text-gray-500 mt-1 mb-4">Jusqu'à 1 000 clients actifs</div>
                                <ul className="list-none p-0 space-y-2 text-sm text-gray-600 flex-1">
                                    <li><span className="text-primary mr-2">✓</span>Tout le plan Standard</li>
                                    <li><span className="text-primary mr-2">✓</span>SLA garanti</li>
                                    <li><span className="text-primary mr-2">✓</span>Account manager dédié</li>
                                    <li><span className="text-primary mr-2">✓</span>Connecteurs sur mesure</li>
                                    <li><span className="text-primary mr-2">✓</span>1h onboarding incluse</li>
                                </ul>
                                <Link to="#contact" className="mt-6 block hover:bg-gray-100 text-center border-2 border-gray-300 hover-border-primary text-secondary-light hover-text-secondary font-semibold py-2.5 rounded-xl transition no-underline text-sm">Démarrer</Link>
                            </div>
                            {/* Plan Custom */}
                            <div className="bg-gray-50 border border-secondary-light rounded-2xl p-6 flex flex-col">
                                <div className="font-semibold text-secondary mb-1">Custom</div>
                                <div className="text-2xl font-title font-extrabold text-secondary pt-1 leading-snug">Sur devis</div>
                                <div className="text-sm text-gray-400 mt-1">groupes &amp; réseaux</div>
                                <div className="text-xs text-gray-500 mt-1 mb-4">Clients illimités + SLA dédié</div>
                                <ul className="list-none p-0 space-y-2 text-sm text-gray-600 flex-1">
                                    <li><span className="text-primary mr-2">✓</span>Tout le plan Enterprise</li>
                                    <li><span className="text-primary mr-2">✓</span>Multi-entités / groupes</li>
                                    <li><span className="text-primary mr-2">✓</span>Accompagnement sur mesure</li>
                                    <li><span className="text-primary mr-2">✓</span>Intégrations propriétaires</li>
                                    <li><span className="text-primary mr-2">✓</span>SLA premium</li>
                                </ul>
                                <Link to="#contact" className="mt-6 block hover:bg-gray-100 text-center border-2 border-gray-300 hover-border-primary text-secondary-light hover-text-secondary font-semibold py-2.5 rounded-xl transition no-underline text-sm">Nous contacter</Link>
                            </div>
                        </div>
                        {/* Setup box */}
                        <div className="flex flex-col md:flex-row items-center gap-6 bg-primary-light rounded-2xl p-8">
                            <div className="flex items-start gap-4 flex-1">
                                <div className="text-4xl flex-shrink-0">🚀</div>
                                <div>
                                    <div className="font-bold text-secondary mb-1">Setup one-shot — démarrez vite et bien</div>
                                    <div className="text-sm text-gray-600">Déploiement structuré pour éviter le bricolage et mesurer le ROI rapidement. Inclut import du portefeuille, paramétrage des conventions, intégration GED et configuration des modalités d'injection par dossier client.</div>
                                </div>
                            </div>
                            <div className="text-center flex-shrink-0">
                                <div className="text-3xl font-extrabold font-title text-primary-dark">1 500€</div>
                                <div className="text-sm text-gray-500">HT · one-shot</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* REFORM — beige */}
                <div id="reform" className="bg-section-odd">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                            <div className="mb-8">
                                <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Réforme e-facture 2026</span>
                                <h2 className="text-2xl md:text-3xl font-bold font-title text-secondary mb-4">L'e-facture ne supprime pas la collecte</h2>
                                <p className="text-gray-500">La facturation électronique va automatiser une partie significative des flux B2B domestiques. Mais elle laisse un volume important de factures "hors circuit" que le cabinet devra toujours récupérer manuellement ou automatiser. Ce "reste à collecter" est récurrent, mensuel, et grossit mécaniquement avec votre portefeuille.</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="flex gap-3">
                                    <div className="text-2xl flex-shrink-0">🌍</div>
                                    <div><div className="font-semibold text-secondary mb-1 text-sm">Fournisseurs étrangers toujours exclus</div><div className="text-xs text-gray-500">Notion, Google, Meta Ads, AWS, Adobe — aucun de ces éditeurs ne transitera par le circuit e-facture français.</div></div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="text-2xl flex-shrink-0">🏥</div>
                                    <div><div className="font-semibold text-secondary mb-1 text-sm">Nombreuses structures hors périmètre</div><div className="text-xs text-gray-500">Professions libérales de santé, associations, micro-entreprises non assujetties à la TVA restent hors réforme.</div></div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="text-2xl flex-shrink-0">🔄</div>
                                    <div><div className="font-semibold text-secondary mb-1 text-sm">Couverture 100% avec Invoice Collector</div><div className="text-xs text-gray-500">E-factures françaises via PDP + Invoice Collector pour tout le reste = chaîne comptable complète sans angle mort.</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DEPLOYMENT — white */}
                <div id="deployment" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Déploiement</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">Un démarrage rapide et mesurable en 30 jours</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Un pilote structuré en 3 phases pour prouver le ROI sur votre portefeuille avant de généraliser à l'ensemble de vos clients.</p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Phases */}
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div><div className="font-semibold text-secondary mb-1">Phase 1 — Pilote</div><div className="text-sm text-gray-500">10 à 20 clients représentatifs, quelques fournisseurs internationaux clés. 1h d'onboarding incluse avec notre équipe pour prise en main et cadrage du process.</div></div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div><div className="font-semibold text-secondary mb-1">Phase 2 — Mesure</div><div className="text-sm text-gray-500">Sur 30 jours : volume collecté, temps économisé, impact sur la complétude des dossiers. Données réelles pour calculer votre ROI exact avant de généraliser.</div></div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div><div className="font-semibold text-secondary mb-1">Phase 3 — Déploiement</div><div className="text-sm text-gray-500">Extension progressive à l'ensemble du portefeuille, avec un process standardisé et documenté. Adoption sans friction côté clients.</div></div>
                                </div>
                            </div>
                            {/* Onboarding card */}
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <div className="font-bold font-title text-secondary text-lg mb-2">L'onboarding inclus (1h)</div>
                                <div className="text-sm text-gray-500 mb-6">Une session dédiée avec notre équipe pour lancer votre pilote sans friction.</div>
                                <div className="space-y-5">
                                    <div className="flex gap-3 items-start">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                        <div><div className="font-semibold text-secondary text-sm">Prise en main produit côté cabinet</div><div className="text-xs text-gray-500">Configuration de votre espace, imports clients, paramétrage initial.</div></div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                        <div><div className="font-semibold text-secondary text-sm">Identifier les bons usages</div><div className="text-xs text-gray-500">Pilotage, contrôle qualité, intégration dans votre process de production.</div></div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                        <div><div className="font-semibold text-secondary text-sm">Cadrer l'adoption côté clients</div><div className="text-xs text-gray-500">Modalités de connexion portails, communication clients, démarrage sans friction.</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA — dark */}
                <section id="contact" className="bg-gray-900 text-white text-center py-20 px-6">
                    <span className="inline-block bg-white bg-opacity-10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">Prochaine étape</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-title max-w-2xl mx-auto mb-5">Démo + cadrage pilote — 30 jours pour prouver le ROI</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">Prouvez sur votre portefeuille réel qu'Invoice Collector s'amortit dès le premier mois — puis standardisez la collecte hors e-facture au niveau cabinet.</p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Link href="mailto:contact@invoice-collector.com" className="inline-block bg-primary hover-bg-primary-dark text-white hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline">Demander une démo personnalisée →</Link>
                        <Link href="https://app.invoice-collector.com/signup" className="inline-block border border-white border-opacity-20 hover:border-opacity-50 text-gray-300 font-semibold px-8 py-3 rounded-xl transition no-underline">Accès sandbox direct</Link>
                    </div>
                    <div className="text-xs text-gray-500 mb-12">Sans engagement · Onboarding 1h inclus · Setup en moins d'une semaine · ROI mesurable dès le 1er cycle</div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white bg-opacity-5 rounded-2xl p-6">
                            <div className="text-2xl mb-3">🎯</div>
                            <div className="font-semibold mb-1">Démo personnalisée</div>
                            <div className="text-sm text-gray-400">Présentation adaptée à votre organisation et à votre portefeuille clients.</div>
                        </div>
                        <div className="bg-white bg-opacity-5 rounded-2xl p-6">
                            <div className="text-2xl mb-3">⚙️</div>
                            <div className="font-semibold mb-1">Cadrage pilote</div>
                            <div className="text-sm text-gray-400">Sélection des premiers clients, portails prioritaires, définition des KPIs de ROI.</div>
                        </div>
                        <div className="bg-white bg-opacity-5 rounded-2xl p-6">
                            <div className="text-2xl mb-3">🚀</div>
                            <div className="font-semibold mb-1">Mise en production</div>
                            <div className="text-sm text-gray-400">Setup + onboarding en moins d'une semaine. Résultats mesurables dès le premier cycle.</div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

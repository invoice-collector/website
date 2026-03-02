import { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function LandingPageEn() {
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

    const formatCurrency = (v) => v >= 1000 ? `€${v.toLocaleString('en-US')}` : `€${v}`;

    return (
        <Layout
        title="The open source invoice collector API, powered by AI"
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

                    /* RANGE INPUTS */

                    .roi-slider {
                        accent-color: #d1d5db;
                        height: 2px;
                        border: none;
                        outline: none;
                        background-color: #faf8f4;
                    }
                    .roi-slider::-webkit-slider-runnable-track { background-color: #faf8f4; border: none; height: 4px; }
                    .roi-slider::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 14px;
                        height: 14px;
                        border-radius: 9999px;
                        background-color: #239e65;
                        border: 2px solid #ffffff;
                        box-shadow: none;
                        margin-top: -5px; /* center thumb on 4px track */
                        cursor: pointer;
                    }
                    .roi-slider::-moz-range-track { background-color: #faf8f4; border: none; height: 4px; }
                    .roi-slider::-moz-range-progress { background-color: #faf8f4; border: none; height: 4px; }
                    .roi-slider::-moz-range-thumb {
                        width: 14px;
                        height: 14px;
                        border-radius: 9999px;
                        background-color: #239e65;
                        border: 2px solid #ffffff;
                        box-shadow: none;
                        cursor: pointer;
                    }
                `}</style>

                {/* HERO */}
                <section className="relative bg-section-odd text-white text-center py-24 px-6">
                    <div className="inline-flex items-center gap-2 bg-primary-light text-primary border-primary backdrop-blur rounded-full px-4 py-1.5 text-sm font-medium mb-8">
                        <span className="w-2 h-2 rounded-full animate-pulse bg-primary"></span>
                        Must-have for accounting firms 2026
                    </div>
                    <h1 className="text-4xl md:text-5xl text-secondary font-extrabold font-title leading-tight max-w-3xl mx-auto mb-6">
                        Automate invoice collection <em className="text-primary not-italic">beyond e-invoicing</em>
                    </h1>
                    <p className="text-lg md:text-xl text-secondary-light max-w-2xl mx-auto mb-10">
                        One tool. All your clients. Every invoice outside e-invoicing collected automatically from a single place.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-14">
                        <Link to="#contact" className="inline-block bg-primary hover-bg-primary-dark text-white hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline">Request a free demo →</Link>
                        <Link to="#roi" className="inline-block border border-secondary-light border-opacity-30 hover:border-opacity-60 text-secondary-light px-8 py-3 rounded-xl transition no-underline">Calculate my ROI</Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white bg-opacity-5 rounded-xl p-4"><div className="text-4xl font-title font-bold text-primary">30d</div><div className="text-xs text-gray-400 mt-1">To measure pilot ROI</div></div>
                        <div className="bg-white bg-opacity-5 rounded-xl p-4"><div className="text-4xl font-title font-bold text-primary">3 min</div><div className="text-xs text-gray-400 mt-1">Saved per portal invoice</div></div>
                        <div className="bg-white bg-opacity-5 rounded-xl p-4"><div className="text-4xl font-title font-bold text-primary">100%</div><div className="text-xs text-gray-400 mt-1">Portfolio coverage</div></div>
                        <div className="bg-white bg-opacity-5 rounded-xl p-4"><div className="text-4xl font-title font-bold text-primary">1 Month</div><div className="text-xs text-gray-400 mt-1">Positive ROI from month one</div></div>
                    </div>
                </section>

                {/* PROMISE — white */}
                <div id="promise" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-14">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">The promise</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">One tool. All your clients. Every invoice.</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Invoice Collector centralizes and automates the collection of all invoices that remain outside the e-invoicing circuit — those you still need to obtain and archive for production.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 rounded-2xl p-8 text-center">
                                <div className="text-4xl mb-4">🌍</div>
                                <div className="font-semibold font-title text-secondary mb-2">Foreign suppliers</div>
                                <div className="text-sm text-gray-500">SaaS, cloud, marketplaces, digital advertising — international vendors that never go through the e-invoicing flow. Notion, Google Workspace, OpenAI, Adobe, AWS…</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-8 text-center">
                                <div className="text-4xl mb-4">📄</div>
                                <div className="font-semibold font-title text-secondary mb-2">Non e-invoice flows</div>
                                <div className="text-sm text-gray-500">B2C invoices, nonprofits, small businesses not VAT-registered, healthcare professionals — all flows excluded from the mandatory 2026 reform scope.</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-8 text-center">
                                <div className="text-4xl mb-4">🔄</div>
                                <div className="font-semibold font-title text-secondary mb-2">The "remaining to collect"</div>
                                <div className="text-sm text-gray-500">A recurring, monthly volume that grows with your portfolio and that your firm will always have to process manually without automation.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROBLEM — beige */}
                <div id="problem" className="bg-section-odd">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-10">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">The problem</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">The hidden cost of supplier portals</h2>
                            <p className="text-gray-500 max-w-2xl">Without automation, each invoice outside e-invoicing requires a manual process that repeats for every client, every month.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">01</div>
                                <div className="text-2xl mb-2">🔐</div>
                                <div className="font-semibold text-secondary text-sm">Login</div>
                                <div className="text-xs text-gray-400 mt-1">Portal via credentials &amp; MFA</div>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">02</div>
                                <div className="text-2xl mb-2">🔍</div>
                                <div className="font-semibold text-secondary text-sm">Navigation</div>
                                <div className="text-xs text-gray-400 mt-1">Find the target period</div>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">03</div>
                                <div className="text-2xl mb-2">⬇️</div>
                                <div className="font-semibold text-secondary text-sm">Download</div>
                                <div className="text-xs text-gray-400 mt-1">Save the invoice PDF</div>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">04</div>
                                <div className="text-2xl mb-2">🏷️</div>
                                <div className="font-semibold text-secondary text-sm">Renaming</div>
                                <div className="text-xs text-gray-400 mt-1">Follow firm naming conventions</div>
                            </div>
                            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                                <div className="text-xs font-bold text-primary mb-2">05</div>
                                <div className="text-2xl mb-2">📁</div>
                                <div className="font-semibold text-secondary text-sm">DMS Upload</div>
                                <div className="text-xs text-gray-400 mt-1">Integration into your tools</div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="text-3xl font-title font-extrabold text-primary mb-2">3 min</div>
                                <div className="text-sm text-gray-600"><strong>Per portal invoice on average</strong><br/>Login + download + renaming + DMS. 100 invoices/month ≈ 5h of non-billable time.</div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="text-3xl font-title font-extrabold text-primary mb-2">35€/h</div>
                                <div className="text-sm text-gray-600"><strong>Loaded cost of staff time</strong><br/>Across 300 clients × 3–5 non e-invoice suppliers: 900 to 1,500 invoices/month to process.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SOLUTION — white */}
                <div id="solution" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-10">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">The solution</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">Invoice Collector automates the entire process</h2>
                            <p className="text-gray-500 max-w-2xl">Our promise: we don't sell a tool. We sell recoverable staff time and production quality.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                <div className="text-3xl flex-shrink-0">⚡</div>
                                <div><div className="font-semibold text-secondary mb-1">Scheduled collection</div><div className="text-sm text-gray-500">Monthly or weekly — invoices are automatically retrieved from all connected portals, with no manual intervention.</div></div>
                            </div>
                            <div className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                <div className="text-3xl flex-shrink-0">🗂️</div>
                                <div><div className="font-semibold text-secondary mb-1">Automatic filing</div><div className="text-sm text-gray-500">By client, period and supplier — following your naming conventions, ready to integrate into your DMS or production tools.</div></div>
                            </div>
                            <div className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                <div className="text-3xl flex-shrink-0">🔍</div>
                                <div><div className="font-semibold text-secondary mb-1">Full traceability</div><div className="text-sm text-gray-500">What, when, for whom — every collection is timestamped and auditable. No more doubts about the completeness of a client file.</div></div>
                            </div>
                            <div className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                <div className="text-3xl flex-shrink-0">🌐</div>
                                <div><div className="font-semibold text-secondary mb-1">100% of your portfolio</div><div className="text-sm text-gray-500">A single, standardized process applicable to all your clients — scalable at no extra cost, not just for the largest ones.</div></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROI — beige */}
                <div id="roi" className="bg-section-odd">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-14">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">ROI Calculator</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">Calculate your ROI in 30 seconds</h2>
                            <p className="text-gray-500 max-w-2xl">The break-even point is very low: just a few dozen to a few hundred automated invoices per month are enough to cover the subscription.</p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* ROI Examples */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <div className="font-bold text-secondary mb-4">📊 Firm with 250 clients</div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Active clients (N)</span><span className="font-medium">250 accounts</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Portal invoices / client / month</span><span className="font-medium">4</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Time saved / invoice</span><span className="font-medium">3 min</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Loaded hourly cost</span><span className="font-medium">35€/h</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">250 × 4 × (3/60) × 35</span><span className="font-bold text-primary">= €1,750/month</span></div>
                                    <div className="mt-4 text-primary font-title font-bold text-center py-2 text-xl">ROI × 13.5 vs €129 plan</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <div className="font-bold text-secondary mb-4">📊 Firm with 500 clients</div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Active clients (N)</span><span className="font-medium">500 accounts</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Portal invoices / client / month</span><span className="font-medium">4</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Time saved / invoice</span><span className="font-medium">3 min</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">Loaded hourly cost</span><span className="font-medium">35€/h</span></div>
                                    <div className="flex justify-between py-2 border-b border-gray-100 text-sm"><span className="text-gray-500">500 × 4 × (3/60) × 35</span><span className="font-bold text-primary">= €3,500/month</span></div>
                                    <div className="mt-4 text-primary font-title font-bold text-center py-2 text-xl">ROI × 17.5 vs €199 plan</div>
                                </div>
                                <div className="bg-primary-light rounded-2xl p-5">
                                    <div className="font-semibold text-secondary mb-1">💡 Conservative assumptions</div>
                                    <div className="text-sm text-secondary-light">These calculations use only 3 min per invoice and 4 non e-invoice suppliers per client. Most firms far exceed these volumes.</div>
                                </div>
                            </div>
                            {/* ROI Calculator */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="font-title font-bold text-lg text-secondary mb-6">🧮 Your custom ROI</div>
                                <div className="mb-5">
                                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Active clients (N)</span><span className="font-semibold text-primary">{clients}</span></div>
                                    <input type="range" min="20" max="1000" value={clients} onChange={e => setClients(Number(e.target.value))} className="w-full roi-slider" />
                                </div>
                                <div className="mb-5">
                                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Portal invoices / client / month</span><span className="font-semibold text-primary">{invoicesPerClient}</span></div>
                                    <input type="range" min="1" max="15" value={invoicesPerClient} onChange={e => setInvoicesPerClient(Number(e.target.value))} className="w-full roi-slider" />
                                </div>
                                <div className="mb-5">
                                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Minutes saved / invoice</span><span className="font-semibold text-primary">{minutesSaved} min</span></div>
                                    <input type="range" min="2" max="8" value={minutesSaved} onChange={e => setMinutesSaved(Number(e.target.value))} className="w-full roi-slider" />
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Staff hourly cost</span><span className="font-semibold text-primary">{hourlyCost}€</span></div>
                                    <input type="range" min="25" max="65" value={hourlyCost} onChange={e => setHourlyCost(Number(e.target.value))} className="w-full roi-slider" />
                                </div>
                                <div className="bg-primary-light rounded-xl p-6 text-center mb-4">
                                    <div className="text-3xl font-title font-extrabold text-primary">{formatCurrency(Math.round(monthlySavings))}</div>
                                    <div className="text-sm text-secondary-light mt-1">estimated monthly savings</div>
                                    <div className="text-xs text-primary mt-2">i.e. × {roiMultiple} the €{planPrice} {planName} plan</div>
                                </div>
                                <div className="text-sm text-gray-500 text-center mb-5">Break-even: <strong>{breakEvenInvoices} invoices/month</strong> — i.e. <strong>~{breakEvenClients} clients</strong> to cover the subscription</div>
                                <Link to="#contact" className="block text-center bg-primary hover-bg-primary-dark text-white hover:text-white font-semibold py-3 rounded-xl transition no-underline text-sm">Plan my pilot →</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRICING — white */}
                <div id="pricing" className="bg-white">
                    <div className="max-w-6xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Pricing</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">Simple, transparent, predictable</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Designed to scale with your firm. 1 active client = 1 registered client with at least one active portal.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {/* Plan Starter */}
                            <div className="bg-gray-50 border border-secondary-light rounded-2xl p-6 flex flex-col">
                                <div className="font-semibold text-secondary mb-1">Starter</div>
                                <div className="text-4xl font-title font-extrabold text-secondary mb-0">129€</div>
                                <div className="text-sm text-gray-400">excl. VAT / month</div>
                                <div className="text-xs text-gray-500 mt-1 mb-4">Up to 250 active clients</div>
                                <ul className="list-none p-0 space-y-2 text-sm text-gray-600 flex-1">
                                    <li><span className="text-primary mr-2">✓</span>Unlimited supplier portals</li>
                                    <li><span className="text-primary mr-2">✓</span>Scheduled automatic collection</li>
                                    <li><span className="text-primary mr-2">✓</span>Client + period filing</li>
                                    <li><span className="text-primary mr-2">✓</span>Full traceability</li>
                                    <li><span className="text-primary mr-2">✓</span>1h onboarding included</li>
                                </ul>
                                <Link to="#contact" className="mt-6 block hover:bg-gray-100 text-center border-2 border-gray-300 hover-border-primary text-secondary-light hover-text-secondary font-semibold py-2.5 rounded-xl transition no-underline text-sm">Get started</Link>
                            </div>
                            {/* Plan Standard */}
                            <div className="relative bg-secondary rounded-2xl p-6 flex flex-col text-white shadow-lg">
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Most popular</div>
                                <div className="font-semibold mb-1">Standard</div>
                                <div className="text-4xl font-title font-extrabold mb-0">199€</div>
                                <div className="text-sm text-primary-lighter">excl. VAT / month</div>
                                <div className="text-xs text-primary-lighter mt-1 mb-4">Up to 500 active clients</div>
                                <ul className="list-none p-0 space-y-2 text-sm text-primary-lighter flex-1">
                                    <li><span className="text-primary mr-2">✓</span>Everything in plan Starter</li>
                                    <li><span className="text-primary mr-2">✓</span>Priority support</li>
                                    <li><span className="text-primary mr-2">✓</span>Advanced DMS integrations</li>
                                    <li><span className="text-primary mr-2">✓</span>Full firm reporting</li>
                                    <li><span className="text-primary mr-2">✓</span>1h onboarding included</li>
                                </ul>
                                <Link to="#contact" className="mt-6 block text-center bg-primary hover-bg-primary-dark text-white hover:text-white font-semibold py-2.5 rounded-xl transition no-underline text-sm">Get started →</Link>
                            </div>
                            {/* Plan Enterprise */}
                            <div className="bg-gray-50 border border-secondary-light rounded-2xl p-6 flex flex-col">
                                <div className="font-semibold text-secondary mb-1">Enterprise</div>
                                <div className="text-4xl font-title font-extrabold text-secondary mb-0">299€</div>
                                <div className="text-sm text-gray-400">excl. VAT / month</div>
                                <div className="text-xs text-gray-500 mt-1 mb-4">Up to 1,000 active clients</div>
                                <ul className="list-none p-0 space-y-2 text-sm text-gray-600 flex-1">
                                    <li><span className="text-primary mr-2">✓</span>Everything in plan Standard</li>
                                    <li><span className="text-primary mr-2">✓</span>Guaranteed SLA</li>
                                    <li><span className="text-primary mr-2">✓</span>Dedicated account manager</li>
                                    <li><span className="text-primary mr-2">✓</span>Custom connectors</li>
                                    <li><span className="text-primary mr-2">✓</span>1h onboarding included</li>
                                </ul>
                                <Link to="#contact" className="mt-6 block hover:bg-gray-100 text-center border-2 border-gray-300 hover-border-primary text-secondary-light hover-text-secondary font-semibold py-2.5 rounded-xl transition no-underline text-sm">Get started</Link>
                            </div>
                            {/* Plan Custom */}
                            <div className="bg-gray-50 border border-secondary-light rounded-2xl p-6 flex flex-col">
                                <div className="font-semibold text-secondary mb-1">Custom</div>
                                <div className="text-2xl font-title font-extrabold text-secondary pt-1 leading-snug">Custom quote</div>
                                <div className="text-sm text-gray-400 mt-1">groups &amp; networks</div>
                                <div className="text-xs text-gray-500 mt-1 mb-4">Unlimited clients + dedicated SLA</div>
                                <ul className="list-none p-0 space-y-2 text-sm text-gray-600 flex-1">
                                    <li><span className="text-primary mr-2">✓</span>Everything in plan Enterprise</li>
                                    <li><span className="text-primary mr-2">✓</span>Multi-entity / groups</li>
                                    <li><span className="text-primary mr-2">✓</span>Tailored support</li>
                                    <li><span className="text-primary mr-2">✓</span>Proprietary integrations</li>
                                    <li><span className="text-primary mr-2">✓</span>Premium SLA</li>
                                </ul>
                                <Link to="#contact" className="mt-6 block hover:bg-gray-100 text-center border-2 border-gray-300 hover-border-primary text-secondary-light hover-text-secondary font-semibold py-2.5 rounded-xl transition no-underline text-sm">Contact us</Link>
                            </div>
                        </div>
                        {/* Setup box */}
                        <div className="flex flex-col md:flex-row items-center gap-6 bg-primary-light rounded-2xl p-8">
                            <div className="flex items-start gap-4 flex-1">
                                <div className="text-4xl flex-shrink-0">🚀</div>
                                <div>
                                    <div className="font-bold text-secondary mb-1">One-time setup — get started right</div>
                                    <div className="text-sm text-gray-600">Structured deployment to avoid patchwork and measure ROI quickly. Includes portfolio import, naming convention setup, DMS integration, and per-client injection configuration.</div>
                                </div>
                            </div>
                            <div className="text-center flex-shrink-0">
                                <div className="text-3xl font-extrabold font-title text-primary-dark">€1,500</div>
                                <div className="text-sm text-gray-500">excl. VAT · one-time</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* REFORM — beige */}
                <div id="reform" className="bg-section-odd">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                            <div className="mb-8">
                                <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">E-invoicing reform 2026</span>
                                <h2 className="text-2xl md:text-3xl font-bold font-title text-secondary mb-4">E-invoicing doesn't eliminate collection</h2>
                                <p className="text-gray-500">Electronic invoicing will automate a significant portion of domestic B2B flows. But it leaves a substantial volume of "off-circuit" invoices that your firm will still need to retrieve manually or automate. This "remaining to collect" is recurring, monthly, and grows mechanically with your portfolio.</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="flex gap-3">
                                    <div className="text-2xl flex-shrink-0">🌍</div>
                                    <div><div className="font-semibold text-secondary mb-1 text-sm">Foreign suppliers still excluded</div><div className="text-xs text-gray-500">Notion, Google, Meta Ads, AWS, Adobe — none of these vendors will go through the French e-invoicing circuit.</div></div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="text-2xl flex-shrink-0">🏥</div>
                                    <div><div className="font-semibold text-secondary mb-1 text-sm">Many entities outside scope</div><div className="text-xs text-gray-500">Healthcare professionals, nonprofits, micro-businesses not VAT-registered remain outside the reform scope.</div></div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="text-2xl flex-shrink-0">🔄</div>
                                    <div><div className="font-semibold text-secondary mb-1 text-sm">100% coverage with Invoice Collector</div><div className="text-xs text-gray-500">French e-invoices via PDP + Invoice Collector for everything else = complete accounting chain with no blind spots.</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DEPLOYMENT — white */}
                <div id="deployment" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Deployment</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-title text-secondary mb-4">A fast, measurable start in 30 days</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">A structured pilot in 3 phases to prove ROI on your portfolio before rolling out to all your clients.</p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Phases */}
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div><div className="font-semibold text-secondary mb-1">Phase 1 — Pilot</div><div className="text-sm text-gray-500">10 to 20 representative clients, a few key international suppliers. 1h onboarding included with our team for hands-on setup and process framing.</div></div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div><div className="font-semibold text-secondary mb-1">Phase 2 — Measurement</div><div className="text-sm text-gray-500">Over 30 days: volume collected, time saved, impact on file completeness. Real data to calculate your exact ROI before scaling.</div></div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div><div className="font-semibold text-secondary mb-1">Phase 3 — Rollout</div><div className="text-sm text-gray-500">Progressive extension to your entire portfolio, with a standardized and documented process. Frictionless adoption on the client side.</div></div>
                                </div>
                            </div>
                            {/* Onboarding card */}
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <div className="font-bold font-title text-secondary text-lg mb-2">Onboarding included (1h)</div>
                                <div className="text-sm text-gray-500 mb-6">A dedicated session with our team to launch your pilot without friction.</div>
                                <div className="space-y-5">
                                    <div className="flex gap-3 items-start">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                        <div><div className="font-semibold text-secondary text-sm">Hands-on product walkthrough</div><div className="text-xs text-gray-500">Workspace setup, client imports, initial configuration.</div></div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                        <div><div className="font-semibold text-secondary text-sm">Identify the right use cases</div><div className="text-xs text-gray-500">Monitoring, quality control, integration into your production workflow.</div></div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                        <div><div className="font-semibold text-secondary text-sm">Frame client-side adoption</div><div className="text-xs text-gray-500">Portal connection methods, client communication, frictionless onboarding.</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA — dark */}
                <section id="contact" className="bg-gray-900 text-white text-center py-20 px-6">
                    <span className="inline-block bg-white bg-opacity-10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">Next step</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-title max-w-2xl mx-auto mb-5">Demo + pilot setup — 30 days to prove the ROI</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">Prove on your real portfolio that Invoice Collector pays for itself from the first month — then standardize non e-invoice collection firm-wide.</p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Link href="mailto:contact@invoice-collector.com" className="inline-block bg-primary hover-bg-primary-dark text-white hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline">Request a personalized demo →</Link>
                        <Link href="https://app.invoice-collector.com/signup" className="inline-block border border-white border-opacity-20 hover:border-opacity-50 text-gray-300 font-semibold px-8 py-3 rounded-xl transition no-underline">Direct sandbox access</Link>
                    </div>
                    <div className="text-xs text-gray-500 mb-12">No commitment · 1h onboarding included · Setup in less than a week · Measurable ROI from the 1st cycle</div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white bg-opacity-5 rounded-2xl p-6">
                            <div className="text-2xl mb-3">🎯</div>
                            <div className="font-semibold mb-1">Personalized demo</div>
                            <div className="text-sm text-gray-400">Presentation tailored to your organization and client portfolio.</div>
                        </div>
                        <div className="bg-white bg-opacity-5 rounded-2xl p-6">
                            <div className="text-2xl mb-3">⚙️</div>
                            <div className="font-semibold mb-1">Pilot setup</div>
                            <div className="text-sm text-gray-400">Selection of first clients, priority portals, ROI KPI definition.</div>
                        </div>
                        <div className="bg-white bg-opacity-5 rounded-2xl p-6">
                            <div className="text-2xl mb-3">🚀</div>
                            <div className="font-semibold mb-1">Go live</div>
                            <div className="text-sm text-gray-400">Setup + onboarding in less than a week. Measurable results from the first cycle.</div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

import { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';
import PricingCard from './PricingCard';

export default function LandingPage() {
    const {siteConfig, i18n: {currentLocale}} = useDocusaurusContext();

    // ROI Calculator state
    const [clients, setClients] = useState(200);
    const [invoicesPerClient, setInvoicesPerClient] = useState(4);
    const [minutesSaved, setMinutesSaved] = useState(3);
    const [hourlyCost, setHourlyCost] = useState(35);
    const [pricingAudience, setPricingAudience] = useState('company');

    // Determine plan price based on client count
    const getPlanPrice = (n) => {
        if (n <= 250) return 130;
        if (n <= 500) return 200;
        if (n <= 1000) return 300;
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

    const formatCurrency = (v) => currentLocale === 'fr' ? `${v.toLocaleString('fr-FR')}€` : `${v.toLocaleString('en-US')}€`;

    return (
        <Layout
        title={translate({id: 'accountant.page.title', message: 'The open source invoice collector API, powered by AI'})}
        description={siteConfig.tagline}>
            <div id="landingpage" className={clsx(styles.text_secondary, "font-sans")}>
                {/* HERO */}
                <section className={clsx(styles.bg_section_odd, "relative text-white text-center py-24 px-6")}>
                    <div className={clsx(styles.bg_primary_light, styles.text_primary, styles.border_primary, "inline-flex items-center gap-2 backdrop-blur rounded-full px-4 py-1.5 text-sm font-medium mb-8")}>
                        <span className={clsx(styles.bg_primary, "w-2 h-2 rounded-full animate-pulse")}></span>
                        <Translate id="accountant.hero.badge">Must-have for accounting firms 2026</Translate>
                    </div>
                    <h1 className={clsx(styles.font_title, styles.text_secondary, "text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto mb-6")}>
                        <Translate id="accountant.hero.title">Automate invoice collection </Translate><em className={clsx(styles.text_primary, "not-italic")}><Translate id="accountant.hero.title.highlight">beyond e-invoicing</Translate></em>
                    </h1>
                    <p className={clsx(styles.text_secondary_light, "text-lg md:text-xl max-w-2xl mx-auto mb-10")}>
                        <Translate id="accountant.hero.subtitle">One tool. All your clients. Every invoice outside e-invoicing collected automatically from a single place.</Translate>
                    </p>
                    <div className={clsx("flex flex-wrap justify-center gap-4 mb-14")}>
                        <Link to="#contact" className={clsx(styles.bg_primary, styles.hover_bg_primary_dark, "inline-block text-white hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline hover:no-underline")}><Translate id="accountant.hero.cta.demo">Request a free demo →</Translate></Link>
                        <Link to="#roi" className={clsx(styles.border_secondary_light, styles.hover_border_primary_dark, styles.text_secondary_light, styles.hover_text_primary_dark, "inline-block border border-opacity-30 hover:border-opacity-60 px-8 py-3 rounded-xl transition no-underline hover:no-underline")}><Translate id="accountant.hero.cta.roi">Calculate my ROI</Translate></Link>
                    </div>
                    <div className={clsx("grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto")}>
                        <div className={clsx("bg-white bg-opacity-5 rounded-xl p-4")}>
                            <div className={clsx(styles.font_title, styles.text_primary, "text-4xl font-bold")}><Translate id="accountant.hero.stat1.value">30d</Translate></div>
                            <div className={clsx("text-xs text-gray-400 mt-1")}><Translate id="accountant.hero.stat1.label">To measure trial ROI</Translate></div>
                        </div>
                        <div className={clsx("bg-white bg-opacity-5 rounded-xl p-4")}>
                            <div className={clsx(styles.font_title, styles.text_primary, "text-4xl font-bold")}>3 min</div>
                            <div className={clsx("text-xs text-gray-400 mt-1")}><Translate id="accountant.hero.stat2.label">Saved per invoice</Translate></div>
                        </div>
                        <div className={clsx("bg-white bg-opacity-5 rounded-xl p-4")}>
                            <div className={clsx(styles.font_title, styles.text_primary, "text-4xl font-bold")}>100%</div>
                            <div className={clsx("text-xs text-gray-400 mt-1")}><Translate id="accountant.hero.stat3.label">Portfolio coverage</Translate></div>
                        </div>
                        <div className={clsx("bg-white bg-opacity-5 rounded-xl p-4")}>
                            <div className={clsx(styles.font_title, styles.text_primary, "text-4xl font-bold")}><Translate id="accountant.hero.stat4.value">1 Month</Translate></div>
                            <div className={clsx("text-xs text-gray-400 mt-1")}><Translate id="accountant.hero.stat4.label">Positive ROI from month one</Translate></div>
                        </div>
                    </div>
                </section>

                {/* PROMISE — white */}
                <div id="promise" className={clsx("bg-white")}>
                    <div className={clsx("max-w-5xl mx-auto px-6 py-20")}>
                        <div className={clsx("text-center mb-14")}>
                            <span className={clsx(styles.bg_primary_light, styles.text_primary, "inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4")}><Translate id="accountant.promise.badge">The promise</Translate></span>
                            <h2 className={clsx(styles.font_title, styles.text_secondary, "text-3xl md:text-4xl font-bold mb-4")}><Translate id="accountant.promise.title">One tool. All your clients. Every invoice.</Translate></h2>
                            <p className={clsx("text-gray-500 max-w-2xl mx-auto")}><Translate id="accountant.promise.desc">Invoice Collector centralizes and automates the collection of all invoices that remain outside the e-invoicing circuit — those you still need to obtain and archive for production.</Translate></p>
                        </div>
                        <div className={clsx("grid md:grid-cols-3 gap-8")}>
                            <div className={clsx("bg-gray-50 rounded-2xl p-8 text-center")}>
                                <div className={clsx("text-4xl mb-4")}>🌍</div>
                                <div className={clsx(styles.font_title, styles.text_secondary, "font-semibold mb-2")}><Translate id="accountant.promise.card1.title">Foreign suppliers</Translate></div>
                                <div className={clsx("text-sm text-gray-500")}><Translate id="accountant.promise.card1.desc">SaaS, cloud, marketplaces, digital advertising — international vendors that never go through the e-invoicing flow. Notion, Google Workspace, OpenAI, Adobe, AWS…</Translate></div>
                            </div>
                            <div className={clsx("bg-gray-50 rounded-2xl p-8 text-center")}>
                                <div className={clsx("text-4xl mb-4")}>📄</div>
                                <div className={clsx(styles.font_title, styles.text_secondary, "font-semibold mb-2")}><Translate id="accountant.promise.card2.title">Non e-invoice flows</Translate></div>
                                <div className={clsx("text-sm text-gray-500")}><Translate id="accountant.promise.card2.desc">B2C invoices, nonprofits, small businesses not VAT-registered, healthcare professionals — all flows excluded from the mandatory 2026 reform scope.</Translate></div>
                            </div>
                            <div className={clsx("bg-gray-50 rounded-2xl p-8 text-center")}>
                                <div className={clsx("text-4xl mb-4")}>🔄</div>
                                <div className={clsx(styles.font_title, styles.text_secondary, "font-semibold mb-2")}><Translate id="accountant.promise.card3.title">The "remaining to collect"</Translate></div>
                                <div className={clsx("text-sm text-gray-500")}><Translate id="accountant.promise.card3.desc">A recurring, monthly volume that grows with your portfolio and that your firm will always have to process manually without automation.</Translate></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROBLEM — beige */}
                <div id="problem" className={clsx(styles.bg_section_odd)}>
                    <div className={clsx("max-w-5xl mx-auto px-6 py-20")}>
                        <div className={clsx("mb-10")}>
                            <span className={clsx(styles.bg_primary_light, styles.text_primary, "inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4")}><Translate id="accountant.problem.badge">The problem</Translate></span>
                            <h2 className={clsx(styles.font_title, styles.text_secondary, "text-3xl md:text-4xl font-bold mb-4")}><Translate id="accountant.problem.title">The hidden cost of supplier portals</Translate></h2>
                            <p className={clsx("text-gray-500 max-w-2xl")}><Translate id="accountant.problem.desc">Without automation, each invoice outside e-invoicing requires a manual process that repeats for every client, every month.</Translate></p>
                        </div>
                        <div className={clsx("grid grid-cols-2 md:grid-cols-5 gap-4 mb-10")}>
                            <div className={clsx("bg-white rounded-xl p-5 text-center shadow-sm")}>
                                <div className={clsx(styles.text_primary, "text-xs font-bold mb-2")}>01</div>
                                <div className={clsx("text-2xl mb-2")}>🔐</div>
                                <div className={clsx(styles.text_secondary, "font-semibold text-sm")}><Translate id="accountant.problem.step1.title">Login</Translate></div>
                                <div className={clsx("text-xs text-gray-400 mt-1")}><Translate id="accountant.problem.step1.desc">Portal via credentials &amp; MFA</Translate></div>
                            </div>
                            <div className={clsx("bg-white rounded-xl p-5 text-center shadow-sm")}>
                                <div className={clsx(styles.text_primary, "text-xs font-bold mb-2")}>02</div>
                                <div className={clsx("text-2xl mb-2")}>🔍</div>
                                <div className={clsx(styles.text_secondary, "font-semibold text-sm")}><Translate id="accountant.problem.step2.title">Navigation</Translate></div>
                                <div className={clsx("text-xs text-gray-400 mt-1")}><Translate id="accountant.problem.step2.desc">Find the target period</Translate></div>
                            </div>
                            <div className={clsx("bg-white rounded-xl p-5 text-center shadow-sm")}>
                                <div className={clsx(styles.text_primary, "text-xs font-bold mb-2")}>03</div>
                                <div className={clsx("text-2xl mb-2")}>⬇️</div>
                                <div className={clsx(styles.text_secondary, "font-semibold text-sm")}><Translate id="accountant.problem.step3.title">Download</Translate></div>
                                <div className={clsx("text-xs text-gray-400 mt-1")}><Translate id="accountant.problem.step3.desc">Save the invoice PDF</Translate></div>
                            </div>
                            <div className={clsx("bg-white rounded-xl p-5 text-center shadow-sm")}>
                                <div className={clsx(styles.text_primary, "text-xs font-bold mb-2")}>04</div>
                                <div className={clsx("text-2xl mb-2")}>🏷️</div>
                                <div className={clsx(styles.text_secondary, "font-semibold text-sm")}><Translate id="accountant.problem.step4.title">Renaming</Translate></div>
                                <div className={clsx("text-xs text-gray-400 mt-1")}><Translate id="accountant.problem.step4.desc">Follow firm naming conventions</Translate></div>
                            </div>
                            <div className={clsx("bg-white rounded-xl p-5 text-center shadow-sm")}>
                                <div className={clsx(styles.text_primary, "text-xs font-bold mb-2")}>05</div>
                                <div className={clsx("text-2xl mb-2")}>📁</div>
                                <div className={clsx(styles.text_secondary, "font-semibold text-sm")}><Translate id="accountant.problem.step5.title">DMS Upload</Translate></div>
                                <div className={clsx("text-xs text-gray-400 mt-1")}><Translate id="accountant.problem.step5.desc">Integration into your tools</Translate></div>
                            </div>
                        </div>
                        <div className={clsx("grid md:grid-cols-2 gap-6")}>
                            <div className={clsx("bg-white rounded-2xl p-8 shadow-sm")}>
                                <div className={clsx(styles.font_title, styles.text_primary, "text-3xl font-extrabold mb-2")}>3 min</div>
                                <div className={clsx("text-sm text-gray-600")}><strong><Translate id="accountant.problem.stat1.title">Per invoice on average</Translate></strong><br/><Translate id="accountant.problem.stat1.desc">Login + download + renaming + DMS. 100 invoices/month ≈ 5h of non-billable time.</Translate></div>
                            </div>
                            <div className={clsx("bg-white rounded-2xl p-8 shadow-sm")}>
                                <div className={clsx(styles.font_title, styles.text_primary, "text-3xl font-extrabold mb-2")}>35€/h</div>
                                <div className={clsx("text-sm text-gray-600")}><strong><Translate id="accountant.problem.stat2.title">Loaded cost of staff time</Translate></strong><br/><Translate id="accountant.problem.stat2.desc">Across 300 clients × 3–5 non e-invoice suppliers: 900 to 1,500 invoices/month to process.</Translate></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SOLUTION — white */}
                <div id="solution" className={clsx("bg-white")}>
                    <div className={clsx("max-w-5xl mx-auto px-6 py-20")}>
                        <div className={clsx("mb-10")}>
                            <span className={clsx( styles.bg_primary_light, styles.text_primary, "inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4")}><Translate id="accountant.solution.badge">The solution</Translate></span>
                            <h2 className={clsx(styles.font_title, styles.text_secondary, "text-3xl md:text-4xl font-bold mb-4")}><Translate id="accountant.solution.title">Invoice Collector automates the entire process</Translate></h2>
                            <p className={clsx("text-gray-500 max-w-2xl")}><Translate id="accountant.solution.desc">Our promise: we don't sell a tool. We sell recoverable staff time and production quality.</Translate></p>
                        </div>
                        <div className={clsx("grid md:grid-cols-2 gap-6")}>
                            <div className={clsx("flex gap-4 bg-gray-50 rounded-2xl p-6")}>
                                <div className={clsx("text-3xl flex-shrink-0")}>⚡</div>
                                <div><div className={clsx(styles.text_secondary, "font-semibold mb-1")}><Translate id="accountant.solution.card1.title">Scheduled collection</Translate></div><div className={clsx("text-sm text-gray-500")}><Translate id="accountant.solution.card1.desc">Monthly or weekly — invoices are automatically retrieved from all connected portals, with no manual intervention.</Translate></div></div>
                            </div>
                            <div className={clsx("flex gap-4 bg-gray-50 rounded-2xl p-6")}>
                                <div className={clsx("text-3xl flex-shrink-0")}>🗂️</div>
                                <div><div className={clsx(styles.text_secondary, "font-semibold mb-1")}><Translate id="accountant.solution.card2.title">Automatic filing</Translate></div><div className={clsx("text-sm text-gray-500")}><Translate id="accountant.solution.card2.desc">By client, period and supplier — following your naming conventions, ready to integrate into your DMS or production tools.</Translate></div></div>
                            </div>
                            <div className={clsx("flex gap-4 bg-gray-50 rounded-2xl p-6")}>
                                <div className={clsx("text-3xl flex-shrink-0")}>🔍</div>
                                <div><div className={clsx(styles.text_secondary, "font-semibold mb-1")}><Translate id="accountant.solution.card3.title">Full traceability</Translate></div><div className={clsx("text-sm text-gray-500")}><Translate id="accountant.solution.card3.desc">What, when, for whom — every collection is timestamped and auditable. No more doubts about the completeness of a client file.</Translate></div></div>
                            </div>
                            <div className={clsx("flex gap-4 bg-gray-50 rounded-2xl p-6")}>
                                <div className={clsx("text-3xl flex-shrink-0")}>🌐</div>
                                <div><div className={clsx(styles.text_secondary, "font-semibold mb-1")}><Translate id="accountant.solution.card4.title">100% of your portfolio</Translate></div><div className={clsx("text-sm text-gray-500")}><Translate id="accountant.solution.card4.desc">A single, standardized process applicable to all your clients — scalable at no extra cost, not just for the largest ones.</Translate></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROI — beige */}
                <div id="roi" className={clsx(styles.bg_section_odd)}>
                    <div className={clsx("max-w-5xl mx-auto px-6 py-20")}>
                        <div className={clsx("mb-14")}>
                            <span className={clsx(styles.bg_primary_light, styles.text_primary, "inline-block  text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4")}><Translate id="accountant.roi.badge">ROI Calculator</Translate></span>
                            <h2 className={clsx(styles.font_title, styles.text_secondary, "text-3xl md:text-4xl font-bold  mb-4")}><Translate id="accountant.roi.title">Calculate your ROI in 30 seconds</Translate></h2>
                            <p className={clsx("text-gray-500 max-w-2xl")}><Translate id="accountant.roi.desc">The break-even point is very low: just a few dozen to a few hundred automated invoices per month are enough to cover the subscription.</Translate></p>
                        </div>
                        <div className={clsx("grid lg:grid-cols-2 gap-8")}>
                            {/* ROI Examples */}
                            <div className={clsx("space-y-6")}>
                                <div className={clsx("bg-white rounded-2xl p-6 shadow-sm")}>
                                    <div className={clsx(styles.text_secondary, "font-bold  mb-4")}><Translate id="accountant.roi.example1.header">📊 Firm with 250 clients</Translate></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}><Translate id="accountant.roi.activeClients">Active clients (N)</Translate></span><span className={clsx("font-medium")}><Translate id="accountant.roi.example1.accounts">250 accounts</Translate></span></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}><Translate id="accountant.roi.portalInvoicesLabel">Invoices / client / month</Translate></span><span className={clsx("font-medium")}>4</span></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}><Translate id="accountant.roi.timeSavedLabel">Time saved / invoice</Translate></span><span className={clsx("font-medium")}>3 min</span></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}><Translate id="accountant.roi.hourlyCostLabel">Loaded hourly cost</Translate></span><span className={clsx("font-medium")}>35€/h</span></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}>250 × 4 × (3/60) × 35</span><span className={clsx(styles.text_primary, "font-bold")}><Translate id="accountant.roi.example1.result">= 1,750€/month</Translate></span></div>
                                    <div className={clsx(styles.font_title, styles.text_primary, "mt-4 font-bold text-center py-2 text-xl")}><Translate id="accountant.roi.example1.roiText">ROI × 13.5 vs €130 plan</Translate></div>
                                </div>
                                <div className={clsx("bg-white rounded-2xl p-6 shadow-sm")}>
                                    <div className={clsx(styles.text_secondary, "font-bold mb-4")}><Translate id="accountant.roi.example2.header">📊 Firm with 500 clients</Translate></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}><Translate id="accountant.roi.activeClients2">Active clients (N)</Translate></span><span className={clsx("font-medium")}><Translate id="accountant.roi.example2.accounts">500 accounts</Translate></span></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}><Translate id="accountant.roi.portalInvoicesLabel2">Invoices / client / month</Translate></span><span className={clsx("font-medium")}>4</span></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}><Translate id="accountant.roi.timeSavedLabel2">Time saved / invoice</Translate></span><span className={clsx("font-medium")}>3 min</span></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}><Translate id="accountant.roi.hourlyCostLabel2">Loaded hourly cost</Translate></span><span className={clsx("font-medium")}>35€/h</span></div>
                                    <div className={clsx("flex justify-between py-2 border-b border-gray-100 text-sm")}><span className={clsx("text-gray-500")}>500 × 4 × (3/60) × 35</span><span className={clsx(styles.text_primary, "font-bold")}><Translate id="accountant.roi.example2.result">= 3,500€/month</Translate></span></div>
                                    <div className={clsx(styles.font_title, styles.text_primary, "mt-4 font-bold text-center py-2 text-xl")}><Translate id="accountant.roi.example2.roiText">ROI × 17.5 vs €200 plan</Translate></div>
                                </div>
                                <div className={clsx(styles.bg_primary_light, "rounded-2xl p-5")}>
                                    <div className={clsx(styles.text_secondary, "font-semibold mb-1")}><Translate id="accountant.roi.conservative.title">💡 Conservative assumptions</Translate></div>
                                    <div className={clsx(styles.text_secondary_light, "text-sm")}><Translate id="accountant.roi.conservative.desc">These calculations use only 3 min per invoice and 4 non e-invoice suppliers per client. Most firms far exceed these volumes.</Translate></div>
                                </div>
                            </div>
                            {/* ROI Calculator */}
                            <div className={clsx("bg-white rounded-2xl p-8 shadow-sm")}>
                                <div className={clsx(styles.font_title, styles.text_secondary, "font-bold text-lg mb-6")}><Translate id="accountant.roi.custom.title">🧮 Your custom ROI</Translate></div>
                                <div className={clsx("mb-5")}>
                                    <div className={clsx("flex justify-between text-sm mb-1")}><span className={clsx("text-gray-600")}><Translate id="accountant.roi.slider.clients">Active clients (N)</Translate></span><span className={clsx(styles.text_primary, "font-semibold")}>{clients}</span></div>
                                    <input type="range" min="20" max="1000" value={clients} onChange={e => setClients(Number(e.target.value))} className={clsx(styles.roi_slider, "w-full")} />
                                </div>
                                <div className={clsx("mb-5")}>
                                    <div className={clsx("flex justify-between text-sm mb-1")}><span className={clsx("text-gray-600")}><Translate id="accountant.roi.slider.invoices">Invoices / client / month</Translate></span><span className={clsx(styles.text_primary, "font-semibold")}>{invoicesPerClient}</span></div>
                                    <input type="range" min="1" max="15" value={invoicesPerClient} onChange={e => setInvoicesPerClient(Number(e.target.value))} className={clsx(styles.roi_slider, "w-full")} />
                                </div>
                                <div className={clsx("mb-5")}>
                                    <div className={clsx("flex justify-between text-sm mb-1")}><span className={clsx("text-gray-600")}><Translate id="accountant.roi.slider.minutes">Minutes saved / invoice</Translate></span><span className={clsx(styles.text_primary, "font-semibold")}>{minutesSaved} min</span></div>
                                    <input type="range" min="2" max="8" value={minutesSaved} onChange={e => setMinutesSaved(Number(e.target.value))} className={clsx(styles.roi_slider, "w-full")} />
                                </div>
                                <div className={clsx("mb-6")}>
                                    <div className={clsx("flex justify-between text-sm mb-1")}><span className={clsx("text-gray-600")}><Translate id="accountant.roi.slider.cost">Staff hourly cost</Translate></span><span className={clsx(styles.text_primary, "font-semibold")}>{hourlyCost}€</span></div>
                                    <input type="range" min="25" max="65" value={hourlyCost} onChange={e => setHourlyCost(Number(e.target.value))} className={clsx(styles.roi_slider, "w-full")} />
                                </div>
                                <div className={clsx(styles.bg_primary_light, "rounded-xl p-6 text-center mb-4")}>
                                    <div className={clsx(styles.font_title, styles.text_primary, "text-3xl font-extrabold")}>{formatCurrency(Math.round(monthlySavings))}</div>
                                    <div className={clsx(styles.text_secondary_light, "text-sm mt-1")}><Translate id="accountant.roi.result.label">estimated monthly savings</Translate></div>
                                    <div className={clsx(styles.text_primary, "text-xs mt-2")}>
                                        <Translate id="accountant.roi.result.ratio" values={{roiMultiple, planPrice, planName}}>
                                            {'i.e. × {roiMultiple} the {planPrice}€ {planName} plan'}
                                        </Translate>
                                    </div>
                                </div>
                                <div className={clsx("text-sm text-gray-500 text-center mb-5")}>
                                    <Translate
                                        id="accountant.roi.breakeven"
                                        values={{
                                            invoiceCount: <strong>{breakEvenInvoices} {translate({id: 'accountant.roi.breakeven.invoiceUnit', message: 'invoices/month'})}</strong>,
                                            clientCount: <strong>~{breakEvenClients} {translate({id: 'accountant.roi.breakeven.clientUnit', message: 'clients'})}</strong>
                                        }}>
                                        {'Break-even: {invoiceCount} — i.e. {clientCount} to cover the subscription'}
                                    </Translate>
                                </div>
                                <Link to="#contact" className={clsx(styles.bg_primary, styles.hover_bg_primary_dark, "block text-center text-white hover:text-white font-semibold py-3 rounded-xl transition text-sm no-underline hover:no-underline")}><Translate id="accountant.roi.cta">Start my trial →</Translate></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRICING — white */}
                <div id="pricing" className={clsx("bg-white")}>
                    <div className={clsx("max-w-6xl mx-auto px-6 py-20")}>
                        <div className={clsx("text-center mb-12")}>
                            <span className={clsx(styles.bg_primary_light, styles.text_primary, "inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4")}><Translate id="accountant.pricing.badge">Pricing</Translate></span>
                            <h2 className={clsx(styles.font_title, styles.text_secondary, "text-3xl md:text-4xl font-bold mb-4")}><Translate id="accountant.pricing.title">Simple, transparent, predictable</Translate></h2>
                        </div>
                        <div className={clsx("flex flex-wrap justify-center gap-3 mb-10")} role="tablist" aria-label="Pricing audience">
                            {[
                                ['company', <Translate id="accountant.pricing.audience.company" message="Company" />],
                                ['accountant', <Translate id="accountant.pricing.audience.accountant" message="Accounting firm" />],
                                ['software', <Translate id="accountant.pricing.audience.software" message="Software publisher" />],
                            ].map(([audience, label]) => (
                                <button
                                    key={audience}
                                    type="button"
                                    role="tab"
                                    aria-selected={pricingAudience === audience}
                                    onClick={() => setPricingAudience(audience)}
                                    className={clsx(
                                        "px-5 py-3 rounded-xl font-semibold transition",
                                        pricingAudience === audience
                                            ? [styles.bg_primary, "text-white"]
                                            : ["bg-gray-100", styles.text_secondary, "hover:bg-gray-200"]
                                    )}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        {pricingAudience === 'accountant' && (
                            <div className={clsx("grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10")}>
                                <PricingCard
                                    name={<Translate id="accountant.pricing.starter.name">Starter</Translate>}
                                    price="130€"
                                    priceNote={<Translate id="accountant.pricing.exclVat">excl. VAT / month</Translate>}
                                    limit={<Translate id="accountant.pricing.starter.limit">Up to 250 active clients</Translate>}
                                    features={[
                                        <Translate id="accountant.pricing.starter.feature1">Unlimited supplier portals</Translate>,
                                        <Translate id="accountant.pricing.starter.feature2">Scheduled automatic collection</Translate>,
                                        <Translate id="accountant.pricing.starter.feature3">Client + period filing</Translate>,
                                        <Translate id="accountant.pricing.starter.feature4">Full traceability</Translate>,
                                        <Translate id="accountant.pricing.starter.feature5">1h onboarding included</Translate>,
                                    ]}
                                />
                                <PricingCard
                                    name={<Translate id="accountant.pricing.standard.name">Standard</Translate>}
                                    price="200€"
                                    priceNote={<Translate id="accountant.pricing.exclVat2">excl. VAT / month</Translate>}
                                    limit={<Translate id="accountant.pricing.standard.limit">Up to 500 active clients</Translate>}
                                    popular
                                    features={[
                                        <Translate id="accountant.pricing.standard.feature1">Everything in plan Starter</Translate>,
                                        <Translate id="accountant.pricing.standard.feature2">Priority support</Translate>,
                                        <Translate id="accountant.pricing.standard.feature3">Advanced DMS integrations</Translate>,
                                        <Translate id="accountant.pricing.standard.feature4">Full firm reporting</Translate>,
                                        <Translate id="accountant.pricing.standard.feature5">1h onboarding included</Translate>,
                                    ]}
                                    cta={<Translate id="accountant.pricing.standard.cta">Get started →</Translate>}
                                />
                                <PricingCard
                                    name={<Translate id="accountant.pricing.enterprise.name">Enterprise</Translate>}
                                    price="300€"
                                    priceNote={<Translate id="accountant.pricing.exclVat3">excl. VAT / month</Translate>}
                                    limit={<Translate id="accountant.pricing.enterprise.limit">Up to 1,000 active clients</Translate>}
                                    features={[
                                        <Translate id="accountant.pricing.enterprise.feature1">Everything in plan Standard</Translate>,
                                        <Translate id="accountant.pricing.enterprise.feature2">Guaranteed SLA</Translate>,
                                        <Translate id="accountant.pricing.enterprise.feature3">Dedicated account manager</Translate>,
                                        <Translate id="accountant.pricing.enterprise.feature4">Custom connectors</Translate>,
                                        <Translate id="accountant.pricing.enterprise.feature5">1h onboarding included</Translate>,
                                    ]}
                                />
                                <PricingCard
                                    name={<Translate id="accountant.pricing.custom.name">Custom</Translate>}
                                    price={<Translate id="accountant.pricing.custom.title">Custom quote</Translate>}
                                    priceNote={<Translate id="accountant.pricing.custom.subtitle">groups &amp; networks</Translate>}
                                    limit={<Translate id="accountant.pricing.custom.limit">Unlimited clients + dedicated SLA</Translate>}
                                    features={[
                                        <Translate id="accountant.pricing.custom.feature1">Everything in plan Enterprise</Translate>,
                                        <Translate id="accountant.pricing.custom.feature2">Multi-entity / groups</Translate>,
                                        <Translate id="accountant.pricing.custom.feature3">Tailored support</Translate>,
                                        <Translate id="accountant.pricing.custom.feature4">Proprietary integrations</Translate>,
                                        <Translate id="accountant.pricing.custom.feature5">Premium SLA</Translate>,
                                    ]}
                                    cta={<Translate id="accountant.pricing.custom.cta">Contact us</Translate>}
                                />
                            </div>
                        )}
                        {pricingAudience === 'company' && (
                            <div className={clsx("grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10")}>
                                <PricingCard
                                    name={<Translate id="company.pricing.starter.name">Starter</Translate>}
                                    price="20€"
                                    priceNote={<Translate id="company.pricing.exclVat">excl. VAT / month</Translate>}
                                    limit={<Translate id="company.pricing.starter.limit">Up to 30 invoices per month</Translate>}
                                    cta={<Translate id="company.pricing.cta">Get started</Translate>}
                                    features={[
                                        <Translate id="company.pricing.feature.collectors">All collectors</Translate>,
                                        <Translate id="company.pricing.feature.automatic">Automatic collection</Translate>,
                                        <Translate id="company.pricing.feature.support">Standard support</Translate>,
                                    ]}
                                />
                                <PricingCard
                                    name={<Translate id="company.pricing.standard.name">Standard</Translate>}
                                    price="50€"
                                    priceNote={<Translate id="company.pricing.exclVat2">excl. VAT / month</Translate>}
                                    limit={<Translate id="company.pricing.standard.limit">Up to 100 invoices per month</Translate>}
                                    popular
                                    cta={<Translate id="company.pricing.cta2">Get started</Translate>}
                                    features={[
                                        <Translate id="company.pricing.feature.collectors2">All collectors</Translate>,
                                        <Translate id="company.pricing.feature.automatic2">Automatic collection</Translate>,
                                        <Translate id="company.pricing.feature.support2">Standard support</Translate>,
                                    ]}
                                />
                                <PricingCard
                                    name={<Translate id="company.pricing.enterprise.name">Enterprise</Translate>}
                                    price="100€"
                                    priceNote={<Translate id="company.pricing.exclVat3">excl. VAT / month</Translate>}
                                    limit={<Translate id="company.pricing.enterprise.limit">Up to 300 invoices per month</Translate>}
                                    cta={<Translate id="company.pricing.cta3">Get started</Translate>}
                                    features={[
                                        <Translate id="company.pricing.feature.collectors3">All collectors</Translate>,
                                        <Translate id="company.pricing.feature.automatic3">Automatic collection</Translate>,
                                        <Translate id="company.pricing.feature.support3">Standard support</Translate>,
                                    ]}
                                />
                                <PricingCard
                                    name={<Translate id="company.pricing.custom.name">Custom</Translate>}
                                    price="Contact us"
                                    limit={<Translate id="company.pricing.custom.limit">More than 300 invoices per month</Translate>}
                                    cta={<Translate id="company.pricing.custom.cta">Contact us</Translate>}
                                    features={[
                                        <Translate id="company.pricing.feature.collectors4">All collectors</Translate>,
                                        <Translate id="company.pricing.feature.automatic4">Automatic collection</Translate>,
                                        <Translate id="company.pricing.feature.support4">Standard support</Translate>,
                                    ]}
                                />
                            </div>
                        )}
                        {pricingAudience === 'software' && (
                            <div className={clsx("max-w-xl mx-auto mb-10")}>
                                <PricingCard
                                    name={<Translate id="software.pricing.name">Software publisher</Translate>}
                                    price={<Translate id="software.pricing.price">Fixed price per user</Translate>}
                                    limit={<Translate id="software.pricing.limit">Pricing tailored to your integration and number of users.</Translate>}
                                    dark
                                    cta={<Translate id="software.pricing.cta">Contact us</Translate>}
                                    features={[
                                        <Translate id="software.pricing.feature.integration">Integration with your software</Translate>,
                                        <Translate id="software.pricing.feature.price">Fixed price per user</Translate>,
                                        <Translate id="software.pricing.feature.support">Dedicated support</Translate>,
                                    ]}
                                />
                            </div>
                        )}
                        {/* Setup box */}
                        <div className={clsx(styles.bg_primary_light, "flex flex-col md:flex-row items-center gap-6 rounded-2xl p-8")}>
                            <div className={clsx("flex items-start gap-4 flex-1")}>
                                <div className={clsx("text-4xl flex-shrink-0")}>🚀</div>
                                <div>
                                    <div className={clsx(styles.text_secondary, "font-bold mb-1")}><Translate id="accountant.pricing.setup.title">One-time setup — get started right</Translate></div>
                                    <div className={clsx("text-sm text-gray-600")}><Translate id="accountant.pricing.setup.desc">Structured deployment to avoid patchwork and measure ROI quickly. Includes portfolio import, naming convention setup, DMS integration, and per-client injection configuration.</Translate></div>
                                </div>
                            </div>
                            <div className={clsx("text-center flex-shrink-0")}>
                                <div className={clsx(styles.font_title, styles.text_primary_dark, "text-3xl font-extrabold")}><Translate id="accountant.pricing.setup.price">1,500€</Translate></div>
                                <div className={clsx("text-sm text-gray-500")}><Translate id="accountant.pricing.setup.priceLabel">excl. VAT · one-time</Translate></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* REFORM — beige */}
                <div id="reform" className={clsx(styles.bg_section_odd)}>
                    <div className={clsx("max-w-5xl mx-auto px-6 py-20")}>
                        <div className={clsx("bg-white rounded-2xl p-8 md:p-12 shadow-sm")}>
                            <div className={clsx("mb-8")}>
                                <span className={clsx(styles.bg_primary_light, styles.text_primary, "inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4")}><Translate id="accountant.reform.badge">E-invoicing reform 2026</Translate></span>
                                <h2 className={clsx(styles.font_title, styles.text_secondary, "text-2xl md:text-3xl font-bold mb-4")}><Translate id="accountant.reform.title">E-invoicing doesn't eliminate collection</Translate></h2>
                                <p className={clsx("text-gray-500")}><Translate id="accountant.reform.desc">Electronic invoicing will automate a significant portion of domestic B2B flows. But it leaves a substantial volume of "off-circuit" invoices that your firm will still need to retrieve manually or automate. This "remaining to collect" is recurring, monthly, and grows mechanically with your portfolio.</Translate></p>
                            </div>
                            <div className={clsx("grid md:grid-cols-3 gap-6")}>
                                <div className={clsx("flex gap-3")}>
                                    <div className={clsx("text-2xl flex-shrink-0")}>🌍</div>
                                    <div><div className={clsx(styles.text_secondary, "font-semibold mb-1 text-sm")}><Translate id="accountant.reform.card1.title">Foreign suppliers still excluded</Translate></div><div className={clsx("text-xs text-gray-500")}><Translate id="accountant.reform.card1.desc">Notion, Google, Meta Ads, AWS, Adobe — none of these vendors will go through the French e-invoicing circuit.</Translate></div></div>
                                </div>
                                <div className={clsx("flex gap-3")}>
                                    <div className={clsx("text-2xl flex-shrink-0")}>🏥</div>
                                    <div><div className={clsx(styles.text_secondary, "font-semibold mb-1 text-sm")}><Translate id="accountant.reform.card2.title">Many entities outside scope</Translate></div><div className={clsx("text-xs text-gray-500")}><Translate id="accountant.reform.card2.desc">Healthcare professionals, nonprofits, micro-businesses not VAT-registered remain outside the reform scope.</Translate></div></div>
                                </div>
                                <div className={clsx("flex gap-3")}>
                                    <div className={clsx("text-2xl flex-shrink-0")}>🔄</div>
                                    <div><div className={clsx(styles.text_secondary, "font-semibold mb-1 text-sm")}><Translate id="accountant.reform.card3.title">100% coverage with Invoice Collector</Translate></div><div className={clsx("text-xs text-gray-500")}><Translate id="accountant.reform.card3.desc">French e-invoices via PDP + Invoice Collector for everything else = complete accounting chain with no blind spots.</Translate></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DEPLOYMENT — white */}
                <div id="deployment" className={clsx("bg-white")}>
                    <div className={clsx("max-w-5xl mx-auto px-6 py-20")}>
                        <div className={clsx("text-center mb-12")}>
                            <span className={clsx(styles.bg_primary_light, styles.text_primary, "inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4")}><Translate id="accountant.deployment.badge">Deployment</Translate></span>
                            <h2 className={clsx(styles.font_title, styles.text_secondary, "text-3xl md:text-4xl font-bold mb-4")}><Translate id="accountant.deployment.title">A fast, measurable start in 30 days</Translate></h2>
                            <p className={clsx("text-gray-500 max-w-2xl mx-auto")}><Translate id="accountant.deployment.desc">A structured trial in 3 phases to prove ROI on your portfolio before rolling out to all your clients.</Translate></p>
                        </div>
                        <div className={clsx("grid lg:grid-cols-2 gap-8")}>
                            {/* Phases */}
                            <div className={clsx("space-y-6")}>
                                <div className={clsx("flex gap-4 items-start")}>
                                    <div className={clsx(styles.bg_primary, "w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0")}>1</div>
                                    <div><div className={clsx(styles.text_secondary, "font-semibold mb-1")}><Translate id="accountant.deployment.phase1.title">Phase 1 — Trial</Translate></div><div className={clsx("text-sm text-gray-500")}><Translate id="accountant.deployment.phase1.desc">10 to 20 representative clients, a few key international suppliers. 1h onboarding included with our team for hands-on setup and process framing.</Translate></div></div>
                                </div>
                                <div className={clsx("flex gap-4 items-start")}>
                                    <div className={clsx(styles.bg_primary, "w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0")}>2</div>
                                    <div><div className={clsx(styles.text_secondary, "font-semibold mb-1")}><Translate id="accountant.deployment.phase2.title">Phase 2 — Measurement</Translate></div><div className={clsx("text-sm text-gray-500")}><Translate id="accountant.deployment.phase2.desc">Over 30 days: volume collected, time saved, impact on file completeness. Real data to calculate your exact ROI before scaling.</Translate></div></div>
                                </div>
                                <div className={clsx("flex gap-4 items-start")}>
                                    <div className={clsx(styles.bg_primary, "w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0")}>3</div>
                                    <div><div className={clsx(styles.text_secondary, "font-semibold mb-1")}><Translate id="accountant.deployment.phase3.title">Phase 3 — Rollout</Translate></div><div className={clsx("text-sm text-gray-500")}><Translate id="accountant.deployment.phase3.desc">Progressive extension to your entire portfolio, with a standardized and documented process. Frictionless adoption on the client side.</Translate></div></div>
                                </div>
                            </div>
                            {/* Onboarding card */}
                            <div className={clsx("bg-gray-50 rounded-2xl p-8")}>
                                <div className={clsx(styles.font_title, styles.text_secondary, "font-bold text-lg mb-2")}><Translate id="accountant.deployment.onboarding.title">Onboarding included (1h)</Translate></div>
                                <div className={clsx("text-sm text-gray-500 mb-6")}><Translate id="accountant.deployment.onboarding.desc">A dedicated session with our team to launch your trial without friction.</Translate></div>
                                <div className={clsx("space-y-5")}>
                                    <div className={clsx("flex gap-3 items-start")}>
                                        <div className={clsx(styles.bg_primary, "w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0")}></div>
                                        <div><div className={clsx(styles.text_secondary, "font-semibold text-sm")}><Translate id="accountant.deployment.onboarding.item1.title">Hands-on product walkthrough</Translate></div><div className={clsx("text-xs text-gray-500")}><Translate id="accountant.deployment.onboarding.item1.desc">Workspace setup, client imports, initial configuration.</Translate></div></div>
                                    </div>
                                    <div className={clsx("flex gap-3 items-start")}>
                                        <div className={clsx(styles.bg_primary, "w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0")}></div>
                                        <div><div className={clsx(styles.text_secondary, "font-semibold text-sm")}><Translate id="accountant.deployment.onboarding.item2.title">Identify the right use cases</Translate></div><div className={clsx("text-xs text-gray-500")}><Translate id="accountant.deployment.onboarding.item2.desc">Monitoring, quality control, integration into your production workflow.</Translate></div></div>
                                    </div>
                                    <div className={clsx("flex gap-3 items-start")}>
                                        <div className={clsx(styles.bg_primary, "w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0")}></div>
                                        <div><div className={clsx(styles.text_secondary, "font-semibold text-sm")}><Translate id="accountant.deployment.onboarding.item3.title">Frame client-side adoption</Translate></div><div className={clsx("text-xs text-gray-500")}><Translate id="accountant.deployment.onboarding.item3.desc">Portal connection methods, client communication, frictionless onboarding.</Translate></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA — dark */}
                <section id="contact" className={clsx("bg-gray-900 text-white text-center py-20 px-6")}>
                    <span className={clsx(styles.text_primary, "inline-block bg-white bg-opacity-10 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6")}><Translate id="accountant.cta.badge">Next step</Translate></span>
                    <h2 className={clsx(styles.font_title, "text-3xl md:text-4xl font-bold max-w-2xl mx-auto mb-5")}><Translate id="accountant.cta.title">Demo + Trial — 30 days to prove the ROI</Translate></h2>
                    <p className={clsx("text-gray-400 max-w-2xl mx-auto mb-10")}><Translate id="accountant.cta.desc">Prove on your real portfolio that Invoice Collector pays for itself from the first month — then standardize non e-invoice collection firm-wide.</Translate></p>
                    <div className={clsx("flex flex-wrap justify-center gap-4 mb-8")}>
                        <Link href="https://calendly.com/lucas-bergeron-invoice-collector/30min" className={clsx(styles.bg_primary, styles.hover_bg_primary_dark, "inline-block text-white hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline hover:no-underline")}><Translate id="accountant.cta.demo">Request a personalized demo →</Translate></Link>
                        <Link href="https://app.invoice-collector.com/signup" className={clsx(styles.hover_border_primary, styles.hover_text_primary, "inline-block border border-white border-opacity-20 hover:border-opacity-50 text-gray-300 hover:text-gray-300 font-semibold px-8 py-3 rounded-xl transition no-underline hover:no-underline")}><Translate id="accountant.cta.sandbox">Direct sandbox access</Translate></Link>
                    </div>
                    <div className={clsx("text-xs text-gray-500 mb-12")}><Translate id="accountant.cta.tagline">No commitment · 1h onboarding included · Setup in less than a week · Measurable ROI from the 1st cycle</Translate></div>
                    <div className={clsx("grid md:grid-cols-3 gap-6 max-w-3xl mx-auto")}>
                        <div className={clsx("bg-white bg-opacity-5 rounded-2xl p-6")}>
                            <div className={clsx("text-2xl mb-3")}>🎯</div>
                            <div className={clsx("font-semibold mb-1")}><Translate id="accountant.cta.card1.title">Personalized demo</Translate></div>
                            <div className={clsx("text-sm text-gray-400")}><Translate id="accountant.cta.card1.desc">Presentation tailored to your organization and client portfolio.</Translate></div>
                        </div>
                        <div className={clsx("bg-white bg-opacity-5 rounded-2xl p-6")}>
                            <div className={clsx("text-2xl mb-3")}>⚙️</div>
                            <div className={clsx("font-semibold mb-1")}><Translate id="accountant.cta.card2.title">Trial setup</Translate></div>
                            <div className={clsx("text-sm text-gray-400")}><Translate id="accountant.cta.card2.desc">Selection of first clients, priority portals, ROI KPI definition.</Translate></div>
                        </div>
                        <div className={clsx("bg-white bg-opacity-5 rounded-2xl p-6")}>
                            <div className={clsx("text-2xl mb-3")}>🚀</div>
                            <div className={clsx("font-semibold mb-1")}><Translate id="accountant.cta.card3.title">Go live</Translate></div>
                            <div className={clsx("text-sm text-gray-400")}><Translate id="accountant.cta.card3.desc">Setup + onboarding in less than a week. Measurable results from the first cycle.</Translate></div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

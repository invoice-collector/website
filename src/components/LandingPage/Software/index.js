import { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { ArrowRight, Blocks, ChartNoAxesCombined, CircleCheck, CodeXml, FileText, Globe, Layers, Plug, Rocket, Settings, ShieldCheck, Webhook } from 'lucide-react';
import styles from '../shared/index.module.css';
import PricingCard from '../shared/PricingCard';

export default function LandingPage() {
    const {i18n: {currentLocale}} = useDocusaurusContext();
    const logoUrl = useBaseUrl('/img/logo/logo_round_square.svg');
    const [pricePerUser, setPricePerUser] = useState(15);

    const revenueSharePerUser = pricePerUser * 0.5;
    const formatCurrency = (value) => new Intl.NumberFormat(currentLocale, {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);

    const primaryButton = clsx(styles.bg_primary, styles.hover_bg_primary_dark, 'inline-block text-white hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline hover:no-underline');
    const secondaryButton = clsx(styles.border_secondary_light, styles.hover_border_primary_dark, styles.text_secondary_light, styles.hover_text_primary_dark, 'inline-block border px-8 py-3 rounded-xl transition no-underline hover:no-underline');
    const badge = clsx(styles.bg_primary_light, styles.text_primary, 'inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4');
    const heading = clsx(styles.font_title, styles.text_secondary, 'text-3xl md:text-4xl font-bold mb-4');

    return (
        <>
                {/* PROMISE — white */}
                <section id="promise" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-14">
                            <span className={badge}><Translate id="software.promise.badge">The promise</Translate></span>
                            <h2 className={heading}><Translate id="software.promise.title">Make your product the place invoices arrive</Translate></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto"><Translate id="software.promise.desc">For ERP, accounting, expense management and finance platforms: bring the documents your users need directly into the workflows they already use.</Translate></p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                [Blocks, <Translate id="software.promise.native.title">A feature, not another tool</Translate>, <Translate id="software.promise.native.desc">Let users connect their suppliers from your application and keep invoice collection close to their daily work.</Translate>],
                                [ChartNoAxesCombined, <Translate id="software.promise.revenue.title">A new reason to upgrade</Translate>, <Translate id="software.promise.revenue.desc">Package collection as a paid add-on or include it in a premium plan. You decide how it creates value for your customers.</Translate>],
                                [CodeXml, <Translate id="software.promise.focus.title">Keep engineering focused</Translate>, <Translate id="software.promise.focus.desc">Build your core product instead of recreating supplier login flows, download logic and collection monitoring.</Translate>],
                            ].map(([Icon, title, description], index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                                    <Icon size={36} className={clsx(styles.text_primary, 'mb-4')} aria-hidden="true" />
                                    <h3 className={clsx(styles.font_title, styles.text_secondary, 'text-lg font-semibold mb-2')}>{title}</h3>
                                    <p className="text-sm text-gray-500 mb-0">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROBLEM — beige */}
                <section id="problem" className={styles.bg_section_odd}>
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-10">
                            <span className={badge}><Translate id="software.problem.badge">The problem</Translate></span>
                            <h2 className={heading}><Translate id="software.problem.title">Your users still do the work between your tools</Translate></h2>
                            <p className="text-gray-500 max-w-2xl"><Translate id="software.problem.desc">A powerful finance platform still depends on incoming documents. When invoices stay scattered across supplier portals and inboxes, users leave your software to collect them by hand.</Translate></p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
                            {[
                                [Globe, <Translate id="software.problem.find">Find the supplier</Translate>],
                                [ShieldCheck, <Translate id="software.problem.login">Log in and authenticate</Translate>],
                                [FileText, <Translate id="software.problem.download">Download the invoice</Translate>],
                                [Layers, <Translate id="software.problem.match">Match the right account</Translate>],
                                [Plug, <Translate id="software.problem.import">Import into your software</Translate>],
                            ].map(([Icon, title], index) => (
                                <div key={index} className="bg-white rounded-xl p-5 text-center shadow-sm">
                                    <div className={clsx(styles.text_primary, 'text-xs font-bold mb-2')}>0{index + 1}</div>
                                    <Icon size={28} className={clsx(styles.text_primary, 'mb-3')} aria-hidden="true" />
                                    <div className={clsx(styles.text_secondary, 'font-semibold text-sm')}>{title}</div>
                                </div>
                            ))}
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'text-xl font-bold mb-2')}><Translate id="software.problem.users.title">Friction for your users</Translate></h3>
                                <p className="text-sm text-gray-500 mb-0"><Translate id="software.problem.users.desc">Repeated downloads, missing documents and manual uploads slow down reconciliation and month-end workflows.</Translate></p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'text-xl font-bold mb-2')}><Translate id="software.problem.team.title">Maintenance for your team</Translate></h3>
                                <p className="text-sm text-gray-500 mb-0"><Translate id="software.problem.team.desc">Every supplier has a different portal. Building collection in-house means maintaining those integrations alongside your own roadmap.</Translate></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOLUTION — white */}
                <section id="solution" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-10">
                            <span className={badge}><Translate id="software.solution.badge">Solution</Translate></span>
                            <h2 className={heading}><Translate id="software.solution.title">You own the experience. We handle collection.</Translate></h2>
                            <p className="text-gray-500 max-w-2xl"><Translate id="software.solution.desc">Invoice Collector retrieves your users' invoices from their suppliers and delivers them to your application through your backend callback. You keep control of the experience; our AI handles collection.</Translate></p>
                        </div>
                        <div className={clsx(styles.bg_primary_light, 'flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl p-8 mb-8 text-center')}>
                            <div>
                                <Globe size={36} className={clsx(styles.text_primary, 'mb-2')} aria-hidden="true" />
                                <div className="font-semibold"><Translate id="software.solution.flow.suppliers">Your users' suppliers</Translate></div>
                            </div>
                            <ArrowRight className="transform rotate-90 md:rotate-0" aria-hidden="true" />
                            <div>
                                <img src={logoUrl} alt="Invoice Collector" width="48" height="48" className="block mx-auto mb-2" loading="lazy" />
                                <div className="font-semibold">Invoice Collector API</div>
                            </div>
                            <ArrowRight className="transform rotate-90 md:rotate-0" aria-hidden="true" />
                            <div>
                                <Blocks size={36} className={clsx(styles.text_primary, 'mb-2')} aria-hidden="true" />
                                <div className="font-semibold"><Translate id="software.solution.flow.product">Your application</Translate></div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                [Plug, <Translate id="software.solution.sources.title">Supplier portals and email</Translate>, <Translate id="software.solution.sources.desc">Use the collector catalog to cover your users' sources, from SaaS subscriptions to telecom providers and email inboxes.</Translate>],
                                [Blocks, <Translate id="software.solution.frontend.title">An embedded user journey</Translate>, <Translate id="software.solution.frontend.desc">Integrate connection management into your frontend: add a source, follow collection progress and reconnect when authentication is needed.</Translate>],
                                [Webhook, <Translate id="software.solution.delivery.title">Invoices delivered to your backend</Translate>, <Translate id="software.solution.delivery.desc">Receive documents through your callback and route them into reconciliation, expense management or accounting workflows.</Translate>],
                                [Layers, <Translate id="software.solution.users.title">Built around your users</Translate>, <Translate id="software.solution.users.desc">Associate each user with your own identifier and manage their connected credentials through the same API.</Translate>],
                            ].map(([Icon, title, description], index) => (
                                <div key={index} className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                    <Icon size={30} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                                    <div>
                                        <h3 className={clsx(styles.text_secondary, 'text-lg font-semibold mb-1')}>{title}</h3>
                                        <p className="text-sm text-gray-500 mb-0">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-6 mt-8 text-sm font-semibold">
                            <Link to="/collectors"><Translate id="software.solution.catalog">Browse the collector catalog</Translate> <ArrowRight size={16} aria-hidden="true" /></Link>
                            <Link to="/docs/embed-in-your-app/frontend-integration/introduction"><Translate id="software.solution.guide">See the frontend integration guide</Translate> <ArrowRight size={16} aria-hidden="true" /></Link>
                        </div>
                    </div>
                </section>

                {/* ROI — beige */}
                <section id="roi" className={styles.bg_section_odd}>
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-14">
                            <span className={badge}><Translate id="software.roi.badge">ROI</Translate></span>
                            <h2 className={heading}><Translate id="software.roi.title">Your business model. A clear return per user.</Translate></h2>
                            <p className="text-gray-500 max-w-2xl"><Translate id="software.roi.desc">Include invoice collection in your software package for a fixed price per user, or sell it as an option and earn revenue with every subscription.</Translate></p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <Blocks size={28} className={clsx(styles.text_primary, 'mb-3')} aria-hidden="true" />
                                    <h3 className={clsx(styles.text_secondary, 'text-lg font-bold mb-3')}><Translate id="software.roi.package.title">Your app is an all-in-one package</Translate></h3>
                                    <p className="text-sm text-gray-500"><Translate id="software.roi.package.desc">Include invoice collection in your existing subscription. You pay Invoice Collector a fixed price per user, agreed with our team.</Translate></p>
                                    <div className={clsx(styles.text_primary, 'font-bold text-xl')}><Translate id="software.roi.package.result">More value in your package. A predictable cost per user.</Translate></div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ChartNoAxesCombined size={28} className={clsx(styles.text_primary, 'mb-3')} aria-hidden="true" />
                                    <h3 className={clsx(styles.text_secondary, 'text-lg font-bold mb-3')}><Translate id="software.roi.option.title">Your app has a core product with options</Translate></h3>
                                    <p className="text-sm text-gray-500"><Translate id="software.roi.option.desc">Sell Invoice Collector as a paid option at the price you choose. We receive 50% of the option price per user, and you keep the other 50%.</Translate></p>
                                    <div className={clsx(styles.text_primary, 'font-bold text-xl')}><Translate id="software.roi.option.result">A useful option for your users. Recurring revenue for you.</Translate></div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'font-bold text-lg mb-6')}><Translate id="software.roi.custom.title">See what you earn per user</Translate></h3>
                                <div className="mb-6">
                                    <div className="flex justify-between gap-4 text-sm mb-1">
                                        <label htmlFor="software-price" className="text-gray-600"><Translate id="software.roi.price">Your monthly option price / user</Translate></label>
                                        <output htmlFor="software-price" className={clsx(styles.text_primary, 'font-semibold whitespace-nowrap')}>{formatCurrency(pricePerUser)}</output>
                                    </div>
                                    <input id="software-price" type="range" min="0" max="100" step="1" value={pricePerUser} onChange={event => setPricePerUser(Number(event.target.value))} className="w-full" style={{accentColor: '#239e65'}} />
                                </div>
                                <div aria-live="polite" aria-atomic="true">
                                    <div className="flex justify-between gap-4 text-sm mb-2"><span className="text-gray-500"><Translate id="software.roi.sellingPrice">Your user pays / month</Translate></span><span className="whitespace-nowrap">{formatCurrency(pricePerUser)}</span></div>
                                    <div className="flex justify-between gap-4 text-sm mb-5"><span className="text-gray-500"><Translate id="software.roi.collectorShare">Invoice Collector's share (50%)</Translate></span><span className="whitespace-nowrap">{formatCurrency(revenueSharePerUser)}</span></div>
                                    <div className={clsx(styles.bg_primary_light, 'rounded-xl p-6 text-center mb-4')}>
                                        <div className={clsx(styles.font_title, styles.text_primary, 'text-3xl font-extrabold')}>{formatCurrency(revenueSharePerUser)}</div>
                                        <div className={clsx(styles.text_secondary_light, 'text-sm mt-1')}><Translate id="software.roi.publisherShare">you keep per user, every month (50%)</Translate></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 text-center mb-5"><Translate id="software.roi.note">This example applies to the paid-option model. Your share is revenue before your own costs and taxes, not net profit. For an all-in-one package, contact us for your fixed per-user price.</Translate></p>
                                <Link to="#contact" className={clsx(primaryButton, 'block text-center text-sm')}><Translate id="software.roi.cta">Discuss my pricing model</Translate></Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING — white */}
                <section id="pricing" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className={badge}><Translate id="software.pricing.badge">Pricing</Translate></span>
                            <h2 className={heading}><Translate id="software.pricing.title">Predictable pricing for your product</Translate></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto"><Translate id="software.pricing.desc">Two models to match the way you sell your software: a fixed per-user cost for an all-in-one package, or a 50/50 revenue split for a paid option.</Translate></p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <PricingCard
                                name={<Translate id="software.pricing.name">All-in-one package</Translate>}
                                price={<Translate id="software.pricing.price">Fixed price per user</Translate>}
                                limit={<Translate id="software.pricing.limit">Contact us for a quote based on your product and expected usage.</Translate>}
                                dark
                                cta={<Translate id="software.pricing.cta">Get an integration quote</Translate>}
                                features={[
                                    <Translate id="software.pricing.feature.api">Collection included in your software package</Translate>,
                                    <Translate id="software.pricing.feature.users">Per-user pricing tailored to your volume</Translate>,
                                    <Translate id="software.pricing.feature.support">Dedicated support</Translate>,
                                ]}
                            />
                            <PricingCard
                                name={<Translate id="software.pricing.option.name">Core product + paid options</Translate>}
                                price={<Translate id="software.pricing.option.price">50% for you. 50% for us.</Translate>}
                                limit={<Translate id="software.pricing.option.limit">Invoice Collector receives half of the option price you charge per user.</Translate>}
                                cta={<Translate id="software.pricing.option.cta">Launch your collection option</Translate>}
                                features={[
                                    <Translate id="software.pricing.option.feature.price">You set the option's selling price</Translate>,
                                    <Translate id="software.pricing.option.feature.revenue">You keep 50% of the revenue per user</Translate>,
                                    <Translate id="software.pricing.option.feature.support">Dedicated support</Translate>,
                                ]}
                            />
                        </div>
                        <div className={clsx(styles.bg_primary_light, 'flex flex-col md:flex-row items-center gap-6 rounded-2xl p-8')}>
                            <Rocket size={40} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                            <div>
                                <h3 className={clsx(styles.text_secondary, 'text-lg font-bold mb-1')}><Translate id="software.pricing.setup.title">Scope the integration before you commit</Translate></h3>
                                <p className="text-sm text-gray-600 mb-0"><Translate id="software.pricing.setup.desc">Review your priority collectors, user journey, callback handling and launch requirements with our team. Agree on rollout scope and any onboarding costs in your quote.</Translate></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* REFORM — beige */}
                <section id="reform" className={styles.bg_section_odd}>
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                            <span className={badge}><Translate id="software.reform.badge">Beyond e-invoicing</Translate></span>
                            <h2 className={heading}><Translate id="software.reform.title">Complement your e-invoicing workflows</Translate></h2>
                            <p className="text-gray-500 mb-8"><Translate id="software.reform.desc">Your users may still receive invoices outside their e-invoicing platform. Add collection from supported portals and inboxes alongside your existing flows, rather than asking users to fill the gaps manually.</Translate></p>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    [Globe, <Translate id="software.reform.international.title">International suppliers</Translate>, <Translate id="software.reform.international.desc">Bring overseas SaaS and service invoices into the same product experience.</Translate>],
                                    [FileText, <Translate id="software.reform.portals.title">Portal-based invoices</Translate>, <Translate id="software.reform.portals.desc">Collect documents that still need to be downloaded from supplier accounts.</Translate>],
                                    [Layers, <Translate id="software.reform.workflows.title">Connected workflows</Translate>, <Translate id="software.reform.workflows.desc">Feed collected documents into your existing processing and reconciliation logic.</Translate>],
                                ].map(([Icon, title, description], index) => (
                                    <div key={index} className="flex gap-3">
                                        <Icon size={26} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                                        <div><h3 className={clsx(styles.text_secondary, 'font-semibold mb-1 text-sm')}>{title}</h3><p className="text-xs text-gray-500 mb-0">{description}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* DEPLOYMENT — white */}
                <section id="deployment" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className={badge}><Translate id="software.deployment.badge">Deployment</Translate></span>
                            <h2 className={heading}><Translate id="software.deployment.title">From first API call to a feature your users love</Translate></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto"><Translate id="software.deployment.desc">Start with a focused pilot, validate the experience with real users and expand at your own pace.</Translate></p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                {[
                                    [<Translate id="software.deployment.phase1.title">Connect your product</Translate>, <Translate id="software.deployment.phase1.desc">Create your account, configure API access on your backend and map your user identifiers. Choose the supplier sources that matter most to your customers.</Translate>],
                                    [<Translate id="software.deployment.phase2.title">Validate the end-to-end journey</Translate>, <Translate id="software.deployment.phase2.desc">Embed connection management, receive invoices through your callback and test collection, reconnection and document routing with a pilot group.</Translate>],
                                    [<Translate id="software.deployment.phase3.title">Launch, measure and expand</Translate>, <Translate id="software.deployment.phase3.desc">Track activation, collected invoices and feature adoption. Refine your packaging, then roll out to more users and supported sources.</Translate>],
                                ].map(([title, description], index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className={clsx(styles.bg_primary, 'w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0')}>{index + 1}</div>
                                        <div><h3 className={clsx(styles.text_secondary, 'text-lg font-semibold mb-1')}>{title}</h3><p className="text-sm text-gray-500 mb-0">{description}</p></div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'font-bold text-lg mb-2')}><Translate id="software.deployment.support.title">Your team, supported from day one</Translate></h3>
                                <p className="text-sm text-gray-500 mb-6"><Translate id="software.deployment.support.desc">Give your developers a clear path from the first API call to launch, with documentation and technical guidance from our team.</Translate></p>
                                <div className="space-y-6">
                                    <div className="flex gap-3 items-start">
                                        <CodeXml size={26} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                                        <div><h4 className={clsx(styles.text_secondary, 'font-semibold text-sm mb-1')}><Translate id="software.deployment.docs.title">Developer-ready documentation</Translate></h4><p className="text-xs text-gray-500 mb-2"><Translate id="software.deployment.docs.desc">Follow practical guides for authentication, user connections and invoice delivery to your application.</Translate></p><Link to="/docs/embed-in-your-app/quick-start" className="text-sm"><Translate id="software.deployment.docs.link">Explore the integration guide</Translate></Link></div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <Settings size={26} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                                        <div><h4 className={clsx(styles.text_secondary, 'font-semibold text-sm mb-1')}><Translate id="software.deployment.guidance.title">Technical guidance for your product</Translate></h4><p className="text-xs text-gray-500 mb-2"><Translate id="software.deployment.guidance.desc">Review your user journey, priority suppliers and callback integration with our team before rolling out to your users.</Translate></p><Link to="#contact" className="text-sm"><Translate id="software.deployment.guidance.link">Talk to our team</Translate></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT — dark */}
                <section id="contact" className="bg-gray-900 text-white text-center py-20 px-6">
                    <span className={clsx(styles.text_primary, 'inline-block bg-white bg-opacity-10 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6')}><Translate id="software.cta.badge">Build with us</Translate></span>
                    <h2 className={clsx(styles.font_title, 'text-3xl md:text-4xl font-bold max-w-2xl mx-auto mb-5')}><Translate id="software.cta.title">Make invoice collection your next product advantage</Translate></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10"><Translate id="software.cta.desc">Bring your use case, your stack and your first target users. We will help you map the integration and build a business case for your product.</Translate></p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Link href="https://calendly.com/lucas-bergeron-invoice-collector/30min" className={primaryButton}><Translate id="software.cta.demo">Book a technical demo</Translate> <ArrowRight size={18} aria-hidden="true" /></Link>
                        <Link href="https://app.invoice-collector.com/signup" className={clsx(styles.hover_border_primary, 'inline-block border border-white border-opacity-20 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline hover:no-underline')}><Translate id="software.cta.account">Create a developer account</Translate></Link>
                    </div>
                    <p className="text-xs text-gray-400 mb-12"><Translate id="software.cta.tagline">Open-source collectors. Documented API. A rollout shaped around your product.</Translate></p>
                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {[
                            [CodeXml, <Translate id="software.cta.demo.title">Technical walkthrough</Translate>, <Translate id="software.cta.demo.desc">Review the API, frontend flows and callback integration with your team.</Translate>],
                            [Settings, <Translate id="software.cta.pilot.title">Focused pilot</Translate>, <Translate id="software.cta.pilot.desc">Choose initial users and sources, then validate the full collection journey.</Translate>],
                            [CircleCheck, <Translate id="software.cta.launch.title">Product launch</Translate>, <Translate id="software.cta.launch.desc">Agree on pricing and deployment, then bring the feature to your users.</Translate>],
                        ].map(([Icon, title, description], index) => (
                            <div key={index} className="bg-white bg-opacity-5 rounded-2xl p-6">
                                <Icon size={28} className={clsx(styles.text_primary, 'mb-3')} aria-hidden="true" />
                                <h3 className="text-base font-semibold mb-1">{title}</h3>
                                <p className="text-sm text-gray-400 mb-0">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </>
    );
}

import { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import { ArrowRight, Blocks, Braces, ChartNoAxesCombined, CircleCheck, Cloud, CodeXml, FileText, Globe, Layers, Plug, Rocket, Settings, ShieldCheck, Webhook } from 'lucide-react';
import styles from '../Accountant/index.module.css';
import PricingCard from '../Accountant/PricingCard';

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
        <Layout
            title={translate({id: 'softwareLanding.page.title', message: 'AI-powered invoice collection for your software'})}
            description={translate({id: 'softwareLanding.page.description', message: "Let AI collect your users' invoices and deliver them straight into your software. Include collection in your package for a fixed price per user, or sell it as an option and keep 50% of the revenue."})}>
            <div id="landingpage" className={clsx(styles.text_secondary, 'font-sans')}>
                <section className={clsx(styles.bg_section_odd, 'relative text-center py-24 px-6')}>
                    <div className={clsx(styles.bg_primary_light, styles.text_primary, 'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8')}>
                        <CodeXml size={18} aria-hidden="true" />
                        <Translate id="softwareLanding.hero.badge">Built for software publishers</Translate>
                    </div>
                    <h1 className={clsx(styles.font_title, styles.text_secondary, 'text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto mb-6')}>
                        <Translate id="softwareLanding.hero.title">Let AI collect your users' invoices. </Translate>
                        <em className={clsx(styles.text_primary, 'not-italic')}><Translate id="softwareLanding.hero.highlight">Straight into your software.</Translate></em>
                    </h1>
                    <p className={clsx(styles.text_secondary_light, 'text-lg md:text-xl max-w-2xl mx-auto mb-10')}>
                        <Translate id="softwareLanding.hero.subtitle">Turn scattered supplier invoices into a seamless product feature. Our AI collects them for your users, so they can stop chasing documents and start getting more from your software.</Translate>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-14">
                        <Link to="#contact" className={primaryButton}><Translate id="softwareLanding.hero.demo">Book a technical demo</Translate> <ArrowRight size={18} aria-hidden="true" /></Link>
                        <Link to="/docs/embed-in-your-app/quick-start" className={secondaryButton}><Translate id="softwareLanding.hero.docs">Explore the API</Translate></Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {[
                            [Braces, <Translate id="softwareLanding.hero.api">REST API</Translate>, <Translate id="softwareLanding.hero.api.desc">One interface for your product</Translate>],
                            [Webhook, <Translate id="softwareLanding.hero.callbacks">Callbacks</Translate>, <Translate id="softwareLanding.hero.callbacks.desc">Invoices delivered to your backend</Translate>],
                            [CodeXml, <Translate id="softwareLanding.hero.open">Open source</Translate>, <Translate id="softwareLanding.hero.open.desc">Inspect and extend the collectors</Translate>],
                            [Cloud, <Translate id="softwareLanding.hero.cloud">Hosted API</Translate>, <Translate id="softwareLanding.hero.cloud.desc">No collection infrastructure to manage</Translate>],
                        ].map(([Icon, title, description], index) => (
                            <div key={index} className="bg-white rounded-xl p-4">
                                <Icon size={28} className={clsx(styles.text_primary, 'mb-3')} aria-hidden="true" />
                                <div className={clsx(styles.text_secondary, 'font-bold')}>{title}</div>
                                <div className={clsx(styles.text_secondary_light, 'text-xs mt-1')}>{description}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="promise" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-14">
                            <span className={badge}><Translate id="softwareLanding.promise.badge">The promise</Translate></span>
                            <h2 className={heading}><Translate id="softwareLanding.promise.title">Make your product the place invoices arrive</Translate></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto"><Translate id="softwareLanding.promise.desc">For ERP, accounting, expense management and finance platforms: bring the documents your users need directly into the workflows they already use.</Translate></p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                [Blocks, <Translate id="softwareLanding.promise.native.title">A feature, not another tool</Translate>, <Translate id="softwareLanding.promise.native.desc">Let users connect their suppliers from your application and keep invoice collection close to their daily work.</Translate>],
                                [ChartNoAxesCombined, <Translate id="softwareLanding.promise.revenue.title">A new reason to upgrade</Translate>, <Translate id="softwareLanding.promise.revenue.desc">Package collection as a paid add-on or include it in a premium plan. You decide how it creates value for your customers.</Translate>],
                                [CodeXml, <Translate id="softwareLanding.promise.focus.title">Keep engineering focused</Translate>, <Translate id="softwareLanding.promise.focus.desc">Build your core product instead of recreating supplier login flows, download logic and collection monitoring.</Translate>],
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

                <section id="problem" className={styles.bg_section_odd}>
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-10">
                            <span className={badge}><Translate id="softwareLanding.problem.badge">The problem</Translate></span>
                            <h2 className={heading}><Translate id="softwareLanding.problem.title">Your users still do the work between your tools</Translate></h2>
                            <p className="text-gray-500 max-w-2xl"><Translate id="softwareLanding.problem.desc">A powerful finance platform still depends on incoming documents. When invoices stay scattered across supplier portals and inboxes, users leave your software to collect them by hand.</Translate></p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
                            {[
                                [Globe, <Translate id="softwareLanding.problem.find">Find the supplier</Translate>],
                                [ShieldCheck, <Translate id="softwareLanding.problem.login">Log in and authenticate</Translate>],
                                [FileText, <Translate id="softwareLanding.problem.download">Download the invoice</Translate>],
                                [Layers, <Translate id="softwareLanding.problem.match">Match the right account</Translate>],
                                [Plug, <Translate id="softwareLanding.problem.import">Import into your software</Translate>],
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
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'text-xl font-bold mb-2')}><Translate id="softwareLanding.problem.users.title">Friction for your users</Translate></h3>
                                <p className="text-sm text-gray-500 mb-0"><Translate id="softwareLanding.problem.users.desc">Repeated downloads, missing documents and manual uploads slow down reconciliation and month-end workflows.</Translate></p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'text-xl font-bold mb-2')}><Translate id="softwareLanding.problem.team.title">Maintenance for your team</Translate></h3>
                                <p className="text-sm text-gray-500 mb-0"><Translate id="softwareLanding.problem.team.desc">Every supplier has a different portal. Building collection in-house means maintaining those integrations alongside your own roadmap.</Translate></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="solution" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-10">
                            <span className={badge}><Translate id="softwareLanding.solution.badge">Solution</Translate></span>
                            <h2 className={heading}><Translate id="softwareLanding.solution.title">You own the experience. We handle collection.</Translate></h2>
                            <p className="text-gray-500 max-w-2xl"><Translate id="softwareLanding.solution.desc">Invoice Collector retrieves your users' invoices from their suppliers and delivers them to your application through your backend callback. You keep control of the experience; our AI handles collection.</Translate></p>
                        </div>
                        <div className={clsx(styles.bg_primary_light, 'flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl p-8 mb-8 text-center')}>
                            <div>
                                <Globe size={36} className={clsx(styles.text_primary, 'mb-2')} aria-hidden="true" />
                                <div className="font-semibold"><Translate id="softwareLanding.solution.flow.suppliers">Your users' suppliers</Translate></div>
                            </div>
                            <ArrowRight className="transform rotate-90 md:rotate-0" aria-hidden="true" />
                            <div>
                                <img src={logoUrl} alt="Invoice Collector" width="48" height="48" className="block mx-auto mb-2" loading="lazy" />
                                <div className="font-semibold">Invoice Collector API</div>
                            </div>
                            <ArrowRight className="transform rotate-90 md:rotate-0" aria-hidden="true" />
                            <div>
                                <Blocks size={36} className={clsx(styles.text_primary, 'mb-2')} aria-hidden="true" />
                                <div className="font-semibold"><Translate id="softwareLanding.solution.flow.product">Your application</Translate></div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                [Plug, <Translate id="softwareLanding.solution.sources.title">Supplier portals and email</Translate>, <Translate id="softwareLanding.solution.sources.desc">Use the collector catalog to cover your users' sources, from SaaS subscriptions to telecom providers and email inboxes.</Translate>],
                                [Blocks, <Translate id="softwareLanding.solution.frontend.title">An embedded user journey</Translate>, <Translate id="softwareLanding.solution.frontend.desc">Integrate connection management into your frontend: add a source, follow collection progress and reconnect when authentication is needed.</Translate>],
                                [Webhook, <Translate id="softwareLanding.solution.delivery.title">Invoices delivered to your backend</Translate>, <Translate id="softwareLanding.solution.delivery.desc">Receive documents through your callback and route them into reconciliation, expense management or accounting workflows.</Translate>],
                                [Layers, <Translate id="softwareLanding.solution.users.title">Built around your users</Translate>, <Translate id="softwareLanding.solution.users.desc">Associate each user with your own identifier and manage their connected credentials through the same API.</Translate>],
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
                            <Link to="/collectors"><Translate id="softwareLanding.solution.catalog">Browse the collector catalog</Translate> <ArrowRight size={16} aria-hidden="true" /></Link>
                            <Link to="/docs/embed-in-your-app/frontend-integration/introduction"><Translate id="softwareLanding.solution.guide">See the frontend integration guide</Translate> <ArrowRight size={16} aria-hidden="true" /></Link>
                        </div>
                    </div>
                </section>

                <section id="roi" className={styles.bg_section_odd}>
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-14">
                            <span className={badge}><Translate id="softwareLanding.roi.badge">ROI</Translate></span>
                            <h2 className={heading}><Translate id="softwareLanding.roi.title">Your business model. A clear return per user.</Translate></h2>
                            <p className="text-gray-500 max-w-2xl"><Translate id="softwareLanding.roi.desc">Include invoice collection in your software package for a fixed price per user, or sell it as an option and earn revenue with every subscription.</Translate></p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <Blocks size={28} className={clsx(styles.text_primary, 'mb-3')} aria-hidden="true" />
                                    <h3 className={clsx(styles.text_secondary, 'text-lg font-bold mb-3')}><Translate id="softwareLanding.roi.package.title">Your app is an all-in-one package</Translate></h3>
                                    <p className="text-sm text-gray-500"><Translate id="softwareLanding.roi.package.desc">Include invoice collection in your existing subscription. You pay Invoice Collector a fixed price per user, agreed with our team.</Translate></p>
                                    <div className={clsx(styles.text_primary, 'font-bold text-xl')}><Translate id="softwareLanding.roi.package.result">More value in your package. A predictable cost per user.</Translate></div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ChartNoAxesCombined size={28} className={clsx(styles.text_primary, 'mb-3')} aria-hidden="true" />
                                    <h3 className={clsx(styles.text_secondary, 'text-lg font-bold mb-3')}><Translate id="softwareLanding.roi.option.title">Your app has a core product with options</Translate></h3>
                                    <p className="text-sm text-gray-500"><Translate id="softwareLanding.roi.option.desc">Sell Invoice Collector as a paid option at the price you choose. We receive 50% of the option price per user, and you keep the other 50%.</Translate></p>
                                    <div className={clsx(styles.text_primary, 'font-bold text-xl')}><Translate id="softwareLanding.roi.option.result">A useful option for your users. Recurring revenue for you.</Translate></div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'font-bold text-lg mb-6')}><Translate id="softwareLanding.roi.custom.title">See what you earn per user</Translate></h3>
                                <div className="mb-6">
                                    <div className="flex justify-between gap-4 text-sm mb-1">
                                        <label htmlFor="software-price" className="text-gray-600"><Translate id="softwareLanding.roi.price">Your monthly option price / user</Translate></label>
                                        <output htmlFor="software-price" className={clsx(styles.text_primary, 'font-semibold whitespace-nowrap')}>{formatCurrency(pricePerUser)}</output>
                                    </div>
                                    <input id="software-price" type="range" min="0" max="100" step="1" value={pricePerUser} onChange={event => setPricePerUser(Number(event.target.value))} className="w-full" style={{accentColor: '#239e65'}} />
                                </div>
                                <div aria-live="polite" aria-atomic="true">
                                    <div className="flex justify-between gap-4 text-sm mb-2"><span className="text-gray-500"><Translate id="softwareLanding.roi.sellingPrice">Your user pays / month</Translate></span><span className="whitespace-nowrap">{formatCurrency(pricePerUser)}</span></div>
                                    <div className="flex justify-between gap-4 text-sm mb-5"><span className="text-gray-500"><Translate id="softwareLanding.roi.collectorShare">Invoice Collector's share (50%)</Translate></span><span className="whitespace-nowrap">{formatCurrency(revenueSharePerUser)}</span></div>
                                    <div className={clsx(styles.bg_primary_light, 'rounded-xl p-6 text-center mb-4')}>
                                        <div className={clsx(styles.font_title, styles.text_primary, 'text-3xl font-extrabold')}>{formatCurrency(revenueSharePerUser)}</div>
                                        <div className={clsx(styles.text_secondary_light, 'text-sm mt-1')}><Translate id="softwareLanding.roi.publisherShare">you keep per user, every month (50%)</Translate></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 text-center mb-5"><Translate id="softwareLanding.roi.note">This example applies to the paid-option model. Your share is revenue before your own costs and taxes, not net profit. For an all-in-one package, contact us for your fixed per-user price.</Translate></p>
                                <Link to="#contact" className={clsx(primaryButton, 'block text-center text-sm')}><Translate id="softwareLanding.roi.cta">Discuss my pricing model</Translate></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className={badge}><Translate id="softwareLanding.pricing.badge">Pricing</Translate></span>
                            <h2 className={heading}><Translate id="softwareLanding.pricing.title">Predictable pricing for your product</Translate></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto"><Translate id="softwareLanding.pricing.desc">Two models to match the way you sell your software: a fixed per-user cost for an all-in-one package, or a 50/50 revenue split for a paid option.</Translate></p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <PricingCard
                                name={<Translate id="softwareLanding.pricing.name">All-in-one package</Translate>}
                                price={<Translate id="softwareLanding.pricing.price">Fixed price per user</Translate>}
                                limit={<Translate id="softwareLanding.pricing.limit">Contact us for a quote based on your product and expected usage.</Translate>}
                                dark
                                cta={<Translate id="softwareLanding.pricing.cta">Get an integration quote</Translate>}
                                features={[
                                    <Translate id="softwareLanding.pricing.feature.api">Collection included in your software package</Translate>,
                                    <Translate id="softwareLanding.pricing.feature.users">Per-user pricing tailored to your volume</Translate>,
                                    <Translate id="softwareLanding.pricing.feature.support">Dedicated support</Translate>,
                                ]}
                            />
                            <PricingCard
                                name={<Translate id="softwareLanding.pricing.option.name">Core product + paid options</Translate>}
                                price={<Translate id="softwareLanding.pricing.option.price">50% for you. 50% for us.</Translate>}
                                limit={<Translate id="softwareLanding.pricing.option.limit">Invoice Collector receives half of the option price you charge per user.</Translate>}
                                cta={<Translate id="softwareLanding.pricing.option.cta">Launch your collection option</Translate>}
                                features={[
                                    <Translate id="softwareLanding.pricing.option.feature.price">You set the option's selling price</Translate>,
                                    <Translate id="softwareLanding.pricing.option.feature.revenue">You keep 50% of the revenue per user</Translate>,
                                    <Translate id="softwareLanding.pricing.option.feature.support">Dedicated support</Translate>,
                                ]}
                            />
                        </div>
                        <div className={clsx(styles.bg_primary_light, 'flex flex-col md:flex-row items-center gap-6 rounded-2xl p-8')}>
                            <Rocket size={40} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                            <div>
                                <h3 className={clsx(styles.text_secondary, 'text-lg font-bold mb-1')}><Translate id="softwareLanding.pricing.setup.title">Scope the integration before you commit</Translate></h3>
                                <p className="text-sm text-gray-600 mb-0"><Translate id="softwareLanding.pricing.setup.desc">Review your priority collectors, user journey, callback handling and launch requirements with our team. Agree on rollout scope and any onboarding costs in your quote.</Translate></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="reform" className={styles.bg_section_odd}>
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                            <span className={badge}><Translate id="softwareLanding.reform.badge">Beyond e-invoicing</Translate></span>
                            <h2 className={heading}><Translate id="softwareLanding.reform.title">Complement your e-invoicing workflows</Translate></h2>
                            <p className="text-gray-500 mb-8"><Translate id="softwareLanding.reform.desc">Your users may still receive invoices outside their e-invoicing platform. Add collection from supported portals and inboxes alongside your existing flows, rather than asking users to fill the gaps manually.</Translate></p>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    [Globe, <Translate id="softwareLanding.reform.international.title">International suppliers</Translate>, <Translate id="softwareLanding.reform.international.desc">Bring overseas SaaS and service invoices into the same product experience.</Translate>],
                                    [FileText, <Translate id="softwareLanding.reform.portals.title">Portal-based invoices</Translate>, <Translate id="softwareLanding.reform.portals.desc">Collect documents that still need to be downloaded from supplier accounts.</Translate>],
                                    [Layers, <Translate id="softwareLanding.reform.workflows.title">Connected workflows</Translate>, <Translate id="softwareLanding.reform.workflows.desc">Feed collected documents into your existing processing and reconciliation logic.</Translate>],
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

                <section id="deployment" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className={badge}><Translate id="softwareLanding.deployment.badge">Deployment</Translate></span>
                            <h2 className={heading}><Translate id="softwareLanding.deployment.title">From first API call to a feature your users love</Translate></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto"><Translate id="softwareLanding.deployment.desc">Start with a focused pilot, validate the experience with real users and expand at your own pace.</Translate></p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                {[
                                    [<Translate id="softwareLanding.deployment.phase1.title">Connect your product</Translate>, <Translate id="softwareLanding.deployment.phase1.desc">Create your account, configure API access on your backend and map your user identifiers. Choose the supplier sources that matter most to your customers.</Translate>],
                                    [<Translate id="softwareLanding.deployment.phase2.title">Validate the end-to-end journey</Translate>, <Translate id="softwareLanding.deployment.phase2.desc">Embed connection management, receive invoices through your callback and test collection, reconnection and document routing with a pilot group.</Translate>],
                                    [<Translate id="softwareLanding.deployment.phase3.title">Launch, measure and expand</Translate>, <Translate id="softwareLanding.deployment.phase3.desc">Track activation, collected invoices and feature adoption. Refine your packaging, then roll out to more users and supported sources.</Translate>],
                                ].map(([title, description], index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className={clsx(styles.bg_primary, 'w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0')}>{index + 1}</div>
                                        <div><h3 className={clsx(styles.text_secondary, 'text-lg font-semibold mb-1')}>{title}</h3><p className="text-sm text-gray-500 mb-0">{description}</p></div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'font-bold text-lg mb-2')}><Translate id="softwareLanding.deployment.support.title">Your team, supported from day one</Translate></h3>
                                <p className="text-sm text-gray-500 mb-6"><Translate id="softwareLanding.deployment.support.desc">Give your developers a clear path from the first API call to launch, with documentation and technical guidance from our team.</Translate></p>
                                <div className="space-y-6">
                                    <div className="flex gap-3 items-start">
                                        <CodeXml size={26} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                                        <div><h4 className={clsx(styles.text_secondary, 'font-semibold text-sm mb-1')}><Translate id="softwareLanding.deployment.docs.title">Developer-ready documentation</Translate></h4><p className="text-xs text-gray-500 mb-2"><Translate id="softwareLanding.deployment.docs.desc">Follow practical guides for authentication, user connections and invoice delivery to your application.</Translate></p><Link to="/docs/embed-in-your-app/quick-start" className="text-sm"><Translate id="softwareLanding.deployment.docs.link">Explore the integration guide</Translate></Link></div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <Settings size={26} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                                        <div><h4 className={clsx(styles.text_secondary, 'font-semibold text-sm mb-1')}><Translate id="softwareLanding.deployment.guidance.title">Technical guidance for your product</Translate></h4><p className="text-xs text-gray-500 mb-2"><Translate id="softwareLanding.deployment.guidance.desc">Review your user journey, priority suppliers and callback integration with our team before rolling out to your users.</Translate></p><Link to="#contact" className="text-sm"><Translate id="softwareLanding.deployment.guidance.link">Talk to our team</Translate></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-gray-900 text-white text-center py-20 px-6">
                    <span className={clsx(styles.text_primary, 'inline-block bg-white bg-opacity-10 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6')}><Translate id="softwareLanding.cta.badge">Build with us</Translate></span>
                    <h2 className={clsx(styles.font_title, 'text-3xl md:text-4xl font-bold max-w-2xl mx-auto mb-5')}><Translate id="softwareLanding.cta.title">Make invoice collection your next product advantage</Translate></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10"><Translate id="softwareLanding.cta.desc">Bring your use case, your stack and your first target users. We will help you map the integration and build a business case for your product.</Translate></p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Link href="https://calendly.com/lucas-bergeron-invoice-collector/30min" className={primaryButton}><Translate id="softwareLanding.cta.demo">Book a technical demo</Translate> <ArrowRight size={18} aria-hidden="true" /></Link>
                        <Link href="https://app.invoice-collector.com/signup" className={clsx(styles.hover_border_primary, 'inline-block border border-white border-opacity-20 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline hover:no-underline')}><Translate id="softwareLanding.cta.account">Create a developer account</Translate></Link>
                    </div>
                    <p className="text-xs text-gray-400 mb-12"><Translate id="softwareLanding.cta.tagline">Open-source collectors. Documented API. A rollout shaped around your product.</Translate></p>
                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {[
                            [CodeXml, <Translate id="softwareLanding.cta.demo.title">Technical walkthrough</Translate>, <Translate id="softwareLanding.cta.demo.desc">Review the API, frontend flows and callback integration with your team.</Translate>],
                            [Settings, <Translate id="softwareLanding.cta.pilot.title">Focused pilot</Translate>, <Translate id="softwareLanding.cta.pilot.desc">Choose initial users and sources, then validate the full collection journey.</Translate>],
                            [CircleCheck, <Translate id="softwareLanding.cta.launch.title">Product launch</Translate>, <Translate id="softwareLanding.cta.launch.desc">Agree on pricing and deployment, then bring the feature to your users.</Translate>],
                        ].map(([Icon, title, description], index) => (
                            <div key={index} className="bg-white bg-opacity-5 rounded-2xl p-6">
                                <Icon size={28} className={clsx(styles.text_primary, 'mb-3')} aria-hidden="true" />
                                <h3 className="text-base font-semibold mb-1">{title}</h3>
                                <p className="text-sm text-gray-400 mb-0">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
}

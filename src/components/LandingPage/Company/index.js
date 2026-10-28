import { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import { ArrowRight, BriefcaseBusiness, Calculator, CircleCheck, Clock, Download, FileText, FolderOpen, Globe, Mail, Plug, RefreshCw, Search, ShieldCheck, Sparkles } from 'lucide-react';
import styles from '../Accountant/index.module.css';
import PricingCard from '../Accountant/PricingCard';

const plans = [
    {name: 'Starter', price: 20, limit: 30},
    {name: 'Standard', price: 50, limit: 100},
    {name: 'Enterprise', price: 100, limit: 300},
];

export default function LandingPage() {
    const {i18n: {currentLocale}} = useDocusaurusContext();
    const logoUrl = useBaseUrl('/img/logo/logo_round_square.svg');
    const [invoices, setInvoices] = useState(100);
    const [minutesPerInvoice, setMinutesPerInvoice] = useState(3);
    const [hourlyCost, setHourlyCost] = useState(35);

    const plan = plans.find(candidate => invoices <= candidate.limit);
    const hoursSaved = invoices * minutesPerInvoice / 60;
    const timeValue = hoursSaved * hourlyCost;
    const netValue = plan ? timeValue - plan.price : null;
    const formatCurrency = (value) => new Intl.NumberFormat(currentLocale, {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 2,
    }).format(value);
    const formatNumber = (value) => new Intl.NumberFormat(currentLocale, {
        maximumFractionDigits: 1,
    }).format(value);

    const primaryButton = clsx(styles.bg_primary, styles.hover_bg_primary_dark, 'inline-block text-white hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline hover:no-underline');
    const secondaryButton = clsx(styles.border_secondary_light, styles.hover_border_primary_dark, styles.text_secondary_light, styles.hover_text_primary_dark, 'inline-block border px-8 py-3 rounded-xl transition no-underline hover:no-underline');
    const badge = clsx(styles.bg_primary_light, styles.text_primary, 'inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4');
    const heading = clsx(styles.font_title, styles.text_secondary, 'text-3xl md:text-4xl font-bold mb-4');
    const pricingFeatures = [
        <Translate id="company.pricing.feature.collectors">All collectors</Translate>,
        <Translate id="company.pricing.feature.automatic">Automatic collection</Translate>,
        <Translate id="company.pricing.feature.support">Standard support</Translate>,
    ];

    return (
        <Layout
            title={translate({id: 'companyLanding.page.title', message: 'Let AI collect your business invoices'})}
            description={translate({id: 'companyLanding.page.description', message: 'Stop chasing supplier invoices. Invoice Collector automatically collects your business invoices from supported supplier portals and inboxes, so you can spend less time on admin.'})}>
            <div id="landingpage" className={clsx(styles.text_secondary, 'font-sans')}>
                <section className={clsx(styles.bg_section_odd, 'relative text-center py-24 px-6')}>
                    <div className={clsx(styles.bg_primary_light, styles.text_primary, 'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8')}>
                        <BriefcaseBusiness size={18} aria-hidden="true" />
                        <Translate id="companyLanding.hero.badge">Built for your business</Translate>
                    </div>
                    <h1 className={clsx(styles.font_title, styles.text_secondary, 'text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto mb-6')}>
                        <Translate id="companyLanding.hero.title">Let AI collect your invoices.</Translate>
                        <em className={clsx(styles.text_primary, 'block not-italic')}><Translate id="companyLanding.hero.highlight">Get back to your business.</Translate></em>
                    </h1>
                    <p className={clsx(styles.text_secondary_light, 'text-lg md:text-xl max-w-2xl mx-auto mb-10')}>
                        <Translate id="companyLanding.hero.subtitle">No more jumping between supplier portals or searching your inbox. Connect your accounts and let Invoice Collector bring your business invoices together automatically.</Translate>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-14">
                        <Link href="https://app.invoice-collector.com/signup" className={primaryButton}><Translate id="companyLanding.hero.start">Start collecting my invoices</Translate> <ArrowRight size={18} aria-hidden="true" /></Link>
                        <Link to="#roi" className={secondaryButton}><Translate id="companyLanding.hero.roi">See how much time I could save</Translate></Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {[
                            [RefreshCw, <Translate id="companyLanding.hero.automatic">Automatic</Translate>, <Translate id="companyLanding.hero.automatic.desc">Collection from connected sources</Translate>],
                            [FolderOpen, <Translate id="companyLanding.hero.centralized">One place</Translate>, <Translate id="companyLanding.hero.centralized.desc">Your business invoices together</Translate>],
                            [Clock, <Translate id="companyLanding.hero.time">Less admin</Translate>, <Translate id="companyLanding.hero.time.desc">More time for your business</Translate>],
                            [CircleCheck, <Translate id="companyLanding.hero.simple">No coding</Translate>, <Translate id="companyLanding.hero.simple.desc">Get started in the online app</Translate>],
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
                            <span className={badge}><Translate id="companyLanding.promise.badge">The promise</Translate></span>
                            <h2 className={heading}>
                                <Translate id="companyLanding.promise.title">Your invoices should come to you.</Translate>
                                <span className={clsx(styles.text_primary, 'block')}><Translate id="companyLanding.promise.highlight">Not the other way around.</Translate></span>
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto"><Translate id="companyLanding.promise.desc">From software subscriptions to everyday business expenses, stop repeating the same collection routine every month.</Translate></p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                [Globe, <Translate id="companyLanding.promise.portals.title">Supplier portals</Translate>, <Translate id="companyLanding.promise.portals.desc">Collect invoices from supported supplier accounts without visiting each website yourself.</Translate>],
                                [Mail, <Translate id="companyLanding.promise.email.title">Email invoices</Translate>, <Translate id="companyLanding.promise.email.desc">Connect a supported inbox to collect invoices that arrive by email, alongside your portal invoices.</Translate>],
                                [BriefcaseBusiness, <Translate id="companyLanding.promise.team.title">Your business, organized</Translate>, <Translate id="companyLanding.promise.team.desc">Spend less time looking for documents when your accountant or finance team needs them.</Translate>],
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
                            <span className={badge}><Translate id="companyLanding.problem.badge">The problem</Translate></span>
                            <h2 className={heading}><Translate id="companyLanding.problem.title">Running a business is enough work already</Translate></h2>
                            <p className="text-gray-500 max-w-2xl"><Translate id="companyLanding.problem.desc">Every invoice can mean another login, another search and another download. Small tasks add up when you repeat them across suppliers, month after month.</Translate></p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                [ShieldCheck, <Translate id="companyLanding.problem.login">Log into the supplier portal</Translate>],
                                [Search, <Translate id="companyLanding.problem.find">Find the right invoice</Translate>],
                                [Download, <Translate id="companyLanding.problem.download">Download the document</Translate>],
                                [FolderOpen, <Translate id="companyLanding.problem.file">File it for your accounts</Translate>],
                            ].map(([Icon, title], index) => (
                                <div key={index} className="bg-white rounded-xl p-5 text-center shadow-sm">
                                    <div className={clsx(styles.text_primary, 'text-xs font-bold mb-2')}>0{index + 1}</div>
                                    <Icon size={28} className={clsx(styles.text_primary, 'mb-3')} aria-hidden="true" />
                                    <div className={clsx(styles.text_secondary, 'font-semibold text-sm')}>{title}</div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h3 className={clsx(styles.font_title, styles.text_secondary, 'text-xl font-bold mb-2')}><Translate id="companyLanding.problem.example.title">100 invoices at 3 minutes each = 5 hours a month</Translate></h3>
                            <p className="text-sm text-gray-500 mb-0"><Translate id="companyLanding.problem.example.desc">An illustrative example of time spent collecting documents instead of serving customers, managing your team or growing your business. Adjust the assumptions below to reflect your own routine.</Translate></p>
                        </div>
                    </div>
                </section>

                <section id="solution" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-10">
                            <span className={badge}><Translate id="companyLanding.solution.badge">Solution</Translate></span>
                            <h2 className={heading}><Translate id="companyLanding.solution.title">Connect your suppliers. Let AI do the collecting.</Translate></h2>
                            <p className="text-gray-500 max-w-2xl"><Translate id="companyLanding.solution.desc">Invoice Collector retrieves invoices from your connected sources and brings them into your account. You focus on your business, not the next download.</Translate></p>
                        </div>
                        <div className={clsx(styles.bg_primary_light, 'flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl p-8 mb-8 text-center')}>
                            <div>
                                <Globe size={36} className={clsx(styles.text_primary, 'mb-2')} aria-hidden="true" />
                                <div className="font-semibold"><Translate id="companyLanding.solution.flow.sources">Your suppliers and inboxes</Translate></div>
                            </div>
                            <ArrowRight className="transform rotate-90 md:rotate-0" aria-hidden="true" />
                            <div>
                                <img src={logoUrl} alt="Invoice Collector" width="48" height="48" className="block mx-auto mb-2" loading="lazy" />
                                <div className="font-semibold">Invoice Collector</div>
                            </div>
                            <ArrowRight className="transform rotate-90 md:rotate-0" aria-hidden="true" />
                            <div>
                                <FolderOpen size={36} className={clsx(styles.text_primary, 'mb-2')} aria-hidden="true" />
                                <div className="font-semibold"><Translate id="companyLanding.solution.flow.destination">Your invoices, in one place</Translate></div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                [RefreshCw, <Translate id="companyLanding.solution.automatic.title">Automatic collection</Translate>, <Translate id="companyLanding.solution.automatic.desc">Keep collecting from connected accounts without repeating the same manual downloads every month.</Translate>],
                                [FileText, <Translate id="companyLanding.solution.documents.title">Documents ready when you need them</Translate>, <Translate id="companyLanding.solution.documents.desc">Bring your collected invoices together so preparing documents for your bookkeeping becomes simpler.</Translate>],
                                [Search, <Translate id="companyLanding.solution.visibility.title">Follow your connections</Translate>, <Translate id="companyLanding.solution.visibility.desc">Check collection progress and reconnect a supplier account when it needs your attention.</Translate>],
                                [CircleCheck, <Translate id="companyLanding.solution.simple.title">No integration project</Translate>, <Translate id="companyLanding.solution.simple.desc">Use the online app to connect your suppliers. You do not need to develop an API integration or manage a server.</Translate>],
                            ].map(([Icon, title, description], index) => (
                                <div key={index} className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                                    <Icon size={30} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                                    <div><h3 className={clsx(styles.text_secondary, 'text-lg font-semibold mb-1')}>{title}</h3><p className="text-sm text-gray-500 mb-0">{description}</p></div>
                                </div>
                            ))}
                        </div>
                        <Link to="/collectors" className="inline-block mt-8 text-sm font-semibold"><Translate id="companyLanding.solution.catalog">Check which suppliers you can connect</Translate> <ArrowRight size={16} aria-hidden="true" /></Link>
                    </div>
                </section>

                <section id="roi" className={styles.bg_section_odd}>
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="mb-14">
                            <span className={badge}><Translate id="companyLanding.roi.badge">ROI</Translate></span>
                            <h2 className={heading}><Translate id="companyLanding.roi.title">What is your invoice collection time worth?</Translate></h2>
                            <p className="text-gray-500 max-w-2xl"><Translate id="companyLanding.roi.desc">Estimate the time you could reclaim each month and compare its value with the subscription that fits your invoice volume.</Translate></p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-8 shadow-sm">
                                    <Clock size={32} className={clsx(styles.text_primary, 'mb-4')} aria-hidden="true" />
                                    <h3 className={clsx(styles.font_title, styles.text_secondary, 'text-xl font-bold mb-3')}><Translate id="companyLanding.roi.example.title">A typical calculation, not a promise</Translate></h3>
                                    <p className="text-sm text-gray-500 mb-0"><Translate id="companyLanding.roi.example.desc">For 100 invoices a month, saving 3 minutes per invoice gives you 5 hours back every month. At an hourly cost of EUR 35, that time is worth EUR 175 per month.</Translate></p>
                                </div>
                                <div className={clsx(styles.bg_primary_light, 'rounded-2xl p-6')}>
                                    <h3 className={clsx(styles.text_secondary, 'text-base font-semibold mb-2')}><Translate id="companyLanding.roi.assumptions.title">Use your own numbers</Translate></h3>
                                    <p className={clsx(styles.text_secondary_light, 'text-sm mb-0')}><Translate id="companyLanding.roi.assumptions.desc">Count invoices from supported sources and the manual time you expect to avoid. Results estimate the value of time, not guaranteed cash savings. Setup time, occasional reconnections and taxes are not included.</Translate></p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'flex items-center gap-2 font-bold text-lg mb-6')}><Calculator size={24} className={styles.text_primary} aria-hidden="true" /><Translate id="companyLanding.roi.calculator.title">Your time-savings estimate</Translate></h3>
                                {[
                                    ['company-invoices', <Translate id="companyLanding.roi.invoices">Invoices collected per month</Translate>, invoices, setInvoices, 1, 1000, invoices],
                                    ['company-minutes', <Translate id="companyLanding.roi.minutes">Minutes saved per invoice</Translate>, minutesPerInvoice, setMinutesPerInvoice, 1, 10, formatNumber(minutesPerInvoice)],
                                    ['company-hourly-cost', <Translate id="companyLanding.roi.hourlyCost">Value of an hour of your time</Translate>, hourlyCost, setHourlyCost, 15, 100, formatCurrency(hourlyCost)],
                                ].map(([id, label, value, setValue, min, max, formattedValue]) => (
                                    <div key={id} className="mb-5">
                                        <div className="flex justify-between gap-4 text-sm mb-1">
                                            <label htmlFor={id} className="text-gray-600">{label}</label>
                                            <output htmlFor={id} className={clsx(styles.text_primary, 'font-semibold whitespace-nowrap')}>{formattedValue}</output>
                                        </div>
                                        <input id={id} type="range" min={min} max={max} step="1" value={value} onChange={event => setValue(Number(event.target.value))} className="w-full" style={{accentColor: '#239e65'}} />
                                    </div>
                                ))}
                                <div aria-live="polite" aria-atomic="true">
                                    <div className="flex justify-between gap-4 text-sm mb-3"><span className="text-gray-500"><Translate id="companyLanding.roi.hours.label">Time saved per month</Translate></span><span className="font-semibold"><Translate id="companyLanding.roi.hours.value" values={{hours: formatNumber(hoursSaved)}}>{'{hours} hours'}</Translate></span></div>
                                    <div className="flex justify-between gap-4 text-sm mb-3"><span className="text-gray-500"><Translate id="companyLanding.roi.value.label">Estimated value of that time</Translate></span><span className="font-semibold">{formatCurrency(timeValue)}</span></div>
                                    <div className="flex justify-between gap-4 text-sm mb-5">
                                        <span className="text-gray-500"><Translate id="companyLanding.roi.plan.label">Monthly subscription, excl. VAT</Translate></span>
                                        <span className="font-semibold text-right">{plan
                                            ? <Translate id="companyLanding.roi.plan.value" values={{name: plan.name, price: formatCurrency(plan.price)}}>{'{name}: {price}'}</Translate>
                                            : <Translate id="companyLanding.roi.plan.custom">Custom quote</Translate>}</span>
                                    </div>
                                    <div className={clsx(styles.bg_primary_light, 'rounded-xl p-6 text-center mb-5')}>
                                        {plan ? (
                                            <>
                                                <div className={clsx(styles.font_title, netValue < 0 ? 'text-red-700' : styles.text_primary, 'text-3xl font-extrabold')}>{formatCurrency(netValue)}</div>
                                                <div className={clsx(styles.text_secondary_light, 'text-sm mt-1')}><Translate id="companyLanding.roi.net.label">estimated monthly time value after subscription</Translate></div>
                                                {netValue < 0 && <p className="text-sm text-red-700 mt-3 mb-0"><Translate id="companyLanding.roi.net.negative">At these assumptions, the estimated time value does not cover the subscription.</Translate></p>}
                                            </>
                                        ) : (
                                            <p className={clsx(styles.text_secondary, 'text-sm mb-0')}><Translate id="companyLanding.roi.custom.desc">Above 300 invoices per month, we will provide a quote before calculating the value after subscription.</Translate></p>
                                        )}
                                    </div>
                                </div>
                                <Link to={plan ? '#pricing' : '#contact'} className={clsx(primaryButton, 'block text-center text-sm')}>{plan
                                    ? <Translate id="companyLanding.roi.cta.plans">See the plans</Translate>
                                    : <Translate id="companyLanding.roi.cta.quote">Get my custom quote</Translate>}</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="bg-white">
                    <div className="max-w-6xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className={badge}><Translate id="companyLanding.pricing.badge">Pricing</Translate></span>
                            <h2 className={heading}><Translate id="companyLanding.pricing.title">A simple plan for your monthly invoices</Translate></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto"><Translate id="companyLanding.pricing.desc">Choose by invoice volume. Every plan includes all collectors, automatic collection and standard support.</Translate></p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {plans.map(({name, price, limit}) => (
                                <PricingCard
                                    key={name}
                                    name={name}
                                    price={formatCurrency(price)}
                                    priceNote={<Translate id="company.pricing.exclVat">excl. VAT / month</Translate>}
                                    limit={<Translate id="companyLanding.pricing.limit" values={{count: limit}}>{'Up to {count} invoices per month'}</Translate>}
                                    popular={name === 'Standard'}
                                    features={pricingFeatures}
                                    cta={<Translate id="company.pricing.cta">Get started</Translate>}
                                    ctaHref="https://app.invoice-collector.com/signup"
                                />
                            ))}
                            <PricingCard
                                name={<Translate id="company.pricing.custom.name">Custom</Translate>}
                                price={<Translate id="companyLanding.pricing.custom.price">Contact us</Translate>}
                                limit={<Translate id="company.pricing.custom.limit">More than 300 invoices per month</Translate>}
                                features={pricingFeatures}
                                cta={<Translate id="company.pricing.custom.cta">Contact us</Translate>}
                            />
                        </div>
                        <div className={clsx(styles.bg_primary_light, 'flex flex-col md:flex-row items-center gap-6 rounded-2xl p-8')}>
                            <Search size={36} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                            <div className="flex-1">
                                <h3 className={clsx(styles.text_secondary, 'text-lg font-bold mb-1')}><Translate id="companyLanding.pricing.sources.title">Start with the suppliers you use most</Translate></h3>
                                <p className="text-sm text-gray-600 mb-0"><Translate id="companyLanding.pricing.sources.desc">Check the collector catalog for your subscriptions, utilities and other business expenses before choosing your plan.</Translate></p>
                            </div>
                            <Link to="/collectors" className={clsx(secondaryButton, 'text-center text-sm')}><Translate id="companyLanding.pricing.sources.cta">Browse collectors</Translate></Link>
                        </div>
                    </div>
                </section>

                <section id="reform" className={styles.bg_section_odd}>
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                            <span className={badge}><Translate id="companyLanding.reform.badge">Beyond e-invoicing</Translate></span>
                            <h2 className={heading}><Translate id="companyLanding.reform.title">For the invoices you still have to chase</Translate></h2>
                            <p className="text-gray-500 mb-0"><Translate id="companyLanding.reform.desc">Not every supplier invoice arrives through your e-invoicing platform. International subscriptions, portal downloads and email invoices can still require manual collection. Invoice Collector complements your existing process by collecting from supported sources.</Translate></p>
                        </div>
                    </div>
                </section>

                <section id="deployment" className="bg-white">
                    <div className="max-w-5xl mx-auto px-6 py-20">
                        <div className="text-center mb-12">
                            <span className={badge}><Translate id="companyLanding.deployment.badge">Deployment</Translate></span>
                            <h2 className={heading}><Translate id="companyLanding.deployment.title">Start collecting, without a technical project</Translate></h2>
                            <p className="text-gray-500 max-w-2xl mx-auto"><Translate id="companyLanding.deployment.desc">Begin with a few regular suppliers, check your first collected invoices and add more accounts as you go.</Translate></p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                {[
                                    [<Translate id="companyLanding.deployment.step1.title">Create your account</Translate>, <Translate id="companyLanding.deployment.step1.desc">Sign up in the online app and choose the suppliers you want to collect invoices from.</Translate>],
                                    [<Translate id="companyLanding.deployment.step2.title">Connect your sources</Translate>, <Translate id="companyLanding.deployment.step2.desc">Follow the connection steps for your supplier accounts or inbox. Complete any authentication requested by your provider.</Translate>],
                                    [<Translate id="companyLanding.deployment.step3.title">Let collection run</Translate>, <Translate id="companyLanding.deployment.step3.desc">Review your first invoices, follow collection progress and reconnect an account if it needs your attention.</Translate>],
                                ].map(([title, description], index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className={clsx(styles.bg_primary, 'w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0')}>{index + 1}</div>
                                        <div><h3 className={clsx(styles.text_secondary, 'text-lg font-semibold mb-1')}>{title}</h3><p className="text-sm text-gray-500 mb-0">{description}</p></div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className={clsx(styles.font_title, styles.text_secondary, 'font-bold text-lg mb-2')}><Translate id="companyLanding.deployment.help.title">A little preparation. Less admin every month.</Translate></h3>
                                <p className="text-sm text-gray-500 mb-6"><Translate id="companyLanding.deployment.help.desc">Have your regular suppliers and account access ready. Start with the invoices that take the most effort to retrieve.</Translate></p>
                                <div className="space-y-5">
                                    <div className="flex gap-3 items-start">
                                        <Plug size={26} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                                        <div><h4 className={clsx(styles.text_secondary, 'font-semibold text-sm mb-1')}><Translate id="companyLanding.deployment.sources.title">Find your suppliers</Translate></h4><p className="text-xs text-gray-500 mb-2"><Translate id="companyLanding.deployment.sources.desc">Check supported accounts in the catalog before connecting them.</Translate></p><Link to="/collectors" className="text-sm"><Translate id="companyLanding.deployment.sources.link">Explore the collector catalog</Translate></Link></div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <BriefcaseBusiness size={26} className={clsx(styles.text_primary, 'flex-shrink-0')} aria-hidden="true" />
                                        <div><h4 className={clsx(styles.text_secondary, 'font-semibold text-sm mb-1')}><Translate id="companyLanding.deployment.support.title">Need a hand getting started?</Translate></h4><p className="text-xs text-gray-500 mb-2"><Translate id="companyLanding.deployment.support.desc">Tell us about your suppliers and monthly invoice volume. We can help you choose where to begin.</Translate></p><Link to="#contact" className="text-sm"><Translate id="companyLanding.deployment.support.link">Talk to our team</Translate></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-gray-900 text-white text-center py-20 px-6">
                    <span className={clsx(styles.text_primary, 'inline-block bg-white bg-opacity-10 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6')}><Translate id="companyLanding.cta.badge">Your next step</Translate></span>
                    <h2 className={clsx(styles.font_title, 'text-3xl md:text-4xl font-bold max-w-2xl mx-auto mb-5')}><Translate id="companyLanding.cta.title">Your next month-end could involve fewer downloads</Translate></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10"><Translate id="companyLanding.cta.desc">Connect your first suppliers and let AI take invoice collection off your to-do list. Need guidance or a custom quote? Our team can help.</Translate></p>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Link href="https://app.invoice-collector.com/signup" className={primaryButton}><Translate id="companyLanding.cta.start">Start collecting my invoices</Translate> <ArrowRight size={18} aria-hidden="true" /></Link>
                        <Link href="https://calendly.com/lucas-bergeron-invoice-collector/30min" className={clsx(styles.hover_border_primary, 'inline-block border border-white border-opacity-20 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline hover:no-underline')}><Translate id="companyLanding.cta.demo">Book a personalized demo</Translate></Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {[
                            [Plug, <Translate id="companyLanding.cta.connect.title">Connect your accounts</Translate>, <Translate id="companyLanding.cta.connect.desc">Start with the suppliers you use every month.</Translate>],
                            [Sparkles, <Translate id="companyLanding.cta.collect.title">Let AI collect</Translate>, <Translate id="companyLanding.cta.collect.desc">Bring invoices from connected sources into one place.</Translate>],
                            [Clock, <Translate id="companyLanding.cta.time.title">Take back your time</Translate>, <Translate id="companyLanding.cta.time.desc">Focus on your business instead of chasing documents.</Translate>],
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

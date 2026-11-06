import { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import { ArrowRight } from 'lucide-react';
import SoftwareLandingPage from './Software';
import CompanyLandingPage from './Company';
import AccountantLandingPage from './Accountant';
import InvoiceFlow from './InvoiceFlow';
import styles from './shared/index.module.css';

export default function CommonLandingPage() {
    const [customerType, setCustomerType] = useState('software');
    const primaryButton = clsx(styles.bg_primary, styles.hover_bg_primary_dark, 'inline-block text-white hover:text-white font-semibold px-8 py-3 rounded-xl transition no-underline hover:no-underline');
    const secondaryButton = clsx(styles.border_secondary_light, styles.hover_border_primary_dark, styles.text_secondary_light, styles.hover_text_primary_dark, 'inline-block border px-8 py-3 rounded-xl transition no-underline hover:no-underline');
    
    return (
        <Layout
            title={translate({id: 'commonLanding.page.title', message: 'Invoice Collector - AI-powered invoice collection'})}
            description={translate({id: 'commonLanding.page.description', message: 'Automatically collect invoices for your business, your clients or your software users from supplier portals and inboxes.'})}>
            <main id="landingpage" className={clsx(styles.text_secondary, 'font-sans')}>

                {/* HERO */}
                <section className={clsx(styles.bg_section_odd, 'relative text-center py-24 px-6')}>
                    <h1 className={clsx(styles.font_title, styles.text_secondary, 'text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto mb-6')}>
                        <Translate id="commonLanding.hero.title">Let AI collect the invoices.</Translate><br />
                        <em className={clsx(styles.text_primary, 'not-italic')}><Translate id="commonLanding.hero.highlight">Straight into your software.</Translate></em>
                    </h1>
                    <p className={clsx(styles.text_secondary_light, 'text-lg md:text-xl max-w-2xl mx-auto mb-10')}>
                        <Translate id="commonLanding.hero.desc">The invoices you need, without the chase. Let AI handle the collection and keep work moving, with over 9,000 collectors referenced in our catalog.</Translate>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-14">
                        <Link to="#contact" className={primaryButton}><Translate id="softwareLanding.hero.demo">Book a technical demo</Translate> <ArrowRight size={18} aria-hidden="true" /></Link>
                        <Link to="/docs/embed-in-your-app/quick-start" className={secondaryButton}><Translate id="softwareLanding.hero.docs">Explore the API</Translate></Link>
                    </div>
                </section>

                {/* Flow animation */}
                <InvoiceFlow />

                {/* Customer type selection */}
                <section id="customer-type" className="bg-white px-6 py-12">
                    <fieldset className="max-w-5xl mx-auto border-0 p-0 min-w-0">
                        <legend className={clsx(styles.font_title, styles.text_secondary, 'text-2xl font-bold text-center w-full mb-8')}>
                            <Translate id="commonLanding.customerType.title">Who are you collecting invoices for?</Translate>
                        </legend>
                        <div className="grid md:grid-cols-3 gap-4">
                            <label className={clsx('border rounded-lg p-5 cursor-pointer', customerType === 'software' && styles.bg_primary_light)}>
                                <input type="radio" name="customer-type" value="software" checked={customerType === 'software'} onChange={() => setCustomerType('software')} aria-controls="customer-content" />
                                <span className="font-semibold ml-2"><Translate id="commonLanding.customerType.software">Software publisher</Translate></span>
                                <span className="block text-sm mt-2"><Translate id="commonLanding.customerType.software.desc">I want to collect my users' invoices</Translate></span>
                            </label>
                            <label className={clsx('border rounded-lg p-5 cursor-pointer', customerType === 'company' && styles.bg_primary_light)}>
                                <input type="radio" name="customer-type" value="company" checked={customerType === 'company'} onChange={() => setCustomerType('company')} aria-controls="customer-content" />
                                <span className="font-semibold ml-2"><Translate id="commonLanding.customerType.company">A company</Translate></span>
                                <span className="block text-sm mt-2"><Translate id="commonLanding.customerType.company.desc">I want to collect my invoices</Translate></span>
                            </label>
                            <label className={clsx('border rounded-lg p-5 cursor-pointer', customerType === 'accountant' && styles.bg_primary_light)}>
                                <input type="radio" name="customer-type" value="accountant" checked={customerType === 'accountant'} onChange={() => setCustomerType('accountant')} aria-controls="customer-content" />
                                <span className="font-semibold ml-2"><Translate id="commonLanding.customerType.accountant">An accountant</Translate></span>
                                <span className="block text-sm mt-2"><Translate id="commonLanding.customerType.accountant.desc">I want to collect my clients' invoices</Translate></span>
                            </label>
                        </div>
                    </fieldset>
                </section>
                <div id="customer-content">
                    {customerType === 'software' && <SoftwareLandingPage />}
                    {customerType === 'company' && <CompanyLandingPage />}
                    {customerType === 'accountant' && <AccountantLandingPage />}
                </div>
            </main>
        </Layout>
    );
}
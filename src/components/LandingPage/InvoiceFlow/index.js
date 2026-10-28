import { useEffect, useId, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import { FileText, FolderOpen, HardDrive, Mail, Pause, Play, Sparkles, Webhook } from 'lucide-react';
import styles from './index.module.css';

const suppliers = [
    {name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg', x: 14, y: 22},
    {name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg', x: 52, y: 12},
    {name: 'Orange', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg', x: 86, y: 30},
    {name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', x: 38, y: 44},
    {name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/OpenAI_logo_2025_(symbol).svg', x: 12, y: 70},
    {name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg', x: 74, y: 60},
    {name: 'OVH', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Logo_OVH.svg', x: 42, y: 82},
    {name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg', x: 85, y: 87},
];

function connectionPath(from, to, vertical) {
    if (vertical) {
        const middle = (from.y + to.y) / 2;
        return `M ${from.x} ${from.y} C ${from.x} ${middle}, ${to.x} ${middle}, ${to.x} ${to.y}`;
    }
    const middle = (from.x + to.x) / 2;
    return `M ${from.x} ${from.y} C ${middle} ${from.y}, ${middle} ${to.y}, ${to.x} ${to.y}`;
}

export default function InvoiceFlow() {
    const headingId = useId();
    const sceneRef = useRef(null);
    const supplierRefs = useRef([]);
    const hubRef = useRef(null);
    const destinationRefs = useRef([]);
    const nextInvoiceId = useRef(0);
    const [geometry, setGeometry] = useState(null);
    const [visible, setVisible] = useState(false);
    const [pageVisible, setPageVisible] = useState(true);
    const [reducedMotion, setReducedMotion] = useState(false);
    const [paused, setPaused] = useState(false);
    const [invoices, setInvoices] = useState([]);
    const [failedLogos, setFailedLogos] = useState([]);
    const logoUrl = useBaseUrl('/img/logo/logo_round_square.svg');
    const running = Boolean(geometry) && visible && pageVisible && !reducedMotion && !paused;
    const destinations = [
        {id: 'webhook', Icon: Webhook, label: 'Webhook'},
        {id: 'email', Icon: Mail, label: <Translate id="invoiceFlow.destination.email">Email</Translate>},
        {id: 'dms', Icon: FolderOpen, label: <Translate id="invoiceFlow.destination.dms">DMS</Translate>},
        {id: 'drive', Icon: HardDrive, label: 'Google Drive'},
    ];

    useEffect(() => {
        const scene = sceneRef.current;
        const measure = () => {
            // A queued resize can run after React has detached the nodes.
            if (!scene.isConnected || !hubRef.current ||
                supplierRefs.current.some(element => !element) ||
                destinationRefs.current.some(element => !element)) {
                return;
            }
            const bounds = scene.getBoundingClientRect();
            if (bounds.width === 0 || bounds.height === 0) {
                return;
            }
            const centerOf = (element) => {
                const rect = element.getBoundingClientRect();
                return {
                    x: rect.left - bounds.left + rect.width / 2,
                    y: rect.top - bounds.top + rect.height / 2,
                };
            };
            const hub = centerOf(hubRef.current);
            const vertical = window.matchMedia('(max-width: 700px)').matches;
            setGeometry({
                width: bounds.width,
                height: bounds.height,
                incoming: supplierRefs.current.map(element => connectionPath(centerOf(element), hub, vertical)),
                outgoing: destinationRefs.current.map(element => connectionPath(hub, centerOf(element), vertical)),
            });
        };
        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(scene);
        measure();

        const visibilityObserver = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            {threshold: 0.1},
        );
        visibilityObserver.observe(scene);

        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateMotion = () => setReducedMotion(motionPreference.matches);
        const updateVisibility = () => setPageVisible(document.visibilityState === 'visible');
        updateMotion();
        updateVisibility();
        motionPreference.addEventListener('change', updateMotion);
        document.addEventListener('visibilitychange', updateVisibility);

        return () => {
            resizeObserver.disconnect();
            visibilityObserver.disconnect();
            motionPreference.removeEventListener('change', updateMotion);
            document.removeEventListener('visibilitychange', updateVisibility);
        };
    }, []);

    useEffect(() => {
        if (!running) {
            setInvoices([]);
            return undefined;
        }

        let timer;
        let remainingSuppliers = [];
        const schedule = () => {
            timer = window.setTimeout(() => {
                if (remainingSuppliers.length === 0) {
                    remainingSuppliers = suppliers.map((_, index) => index);
                }
                const randomIndex = Math.floor(Math.random() * remainingSuppliers.length);
                const [supplier] = remainingSuppliers.splice(randomIndex, 1);
                const createdAt = Date.now();
                const invoice = {
                    id: nextInvoiceId.current++,
                    supplier,
                    destination: Math.floor(Math.random() * destinations.length),
                    createdAt,
                };
                setInvoices(current => [
                    ...current.filter(item => createdAt - item.createdAt < 6000),
                    invoice,
                ]);
                schedule();
            }, 650 + Math.random() * 850);
        };
        schedule();
        return () => window.clearTimeout(timer);
    }, [running, destinations.length]);

    const removeInvoice = (id) => {
        setInvoices(current => current.filter(invoice => invoice.id !== id));
    };

    return (
        <section className={styles.section} aria-labelledby={headingId}>
            <figure className={styles.figure}>
                <div ref={sceneRef} className={styles.scene} data-running={running} aria-hidden="true">
                    {geometry && (
                        <svg className={styles.connections} viewBox={`0 0 ${geometry.width} ${geometry.height}`} fill="none">
                            {geometry.incoming.map((path, index) => <path key={`in-${index}`} d={path} className={styles.incomingPath} />)}
                            {geometry.outgoing.map((path, index) => <path key={`out-${index}`} d={path} className={styles.outgoingPath} />)}
                        </svg>
                    )}
                    <div className={styles.supplierGroup}>
                        <div className={styles.stageLabel}><span>01</span><Translate id="invoiceFlow.suppliers">Your suppliers</Translate></div>
                        <div className={styles.cloud}>
                            {suppliers.map((supplier, index) => (
                                <div
                                    key={supplier.name}
                                    ref={element => { supplierRefs.current[index] = element; }}
                                    className={styles.supplier}
                                    style={{left: `${supplier.x}%`, top: `${supplier.y}%`}}
                                    title={supplier.name}
                                >
                                    {failedLogos.includes(supplier.name) ? (
                                        <span className={styles.logoFallback}>{supplier.name}</span>
                                    ) : (
                                        <img
                                            src={supplier.logo}
                                            alt=""
                                            width="44"
                                            height="44"
                                            loading="lazy"
                                            onError={() => {
                                                console.warn(`InvoiceFlow: could not load the ${supplier.name} logo.`);
                                                setFailedLogos(current => [...current, supplier.name]);
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.hubGroup}>
                        <div className={styles.hubHalo}>
                            <div ref={hubRef} className={styles.hub}>
                                <img src={logoUrl} alt="" width="76" height="76" loading="lazy" />
                            </div>
                        </div>
                        <div className={styles.hubName}>Invoice Collector</div>
                        <div className={styles.hubCaption}><Translate id="invoiceFlow.processing">Collected. Sorted. Delivered.</Translate></div>
                    </div>
                    <div className={styles.destinationGroup}>
                        <div className={styles.stageLabel}><span>02</span><Translate id="invoiceFlow.exports">Your destinations</Translate></div>
                        <div className={styles.destinations}>
                            {destinations.map(({id, Icon, label}, index) => (
                                <div
                                    key={id}
                                    ref={element => { destinationRefs.current[index] = element; }}
                                    className={styles.destination}
                                >
                                    <span className={styles.destinationIcon}><Icon size={23} /></span>
                                    <span>{label}</span>
                                    <span className={styles.destinationDot} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {running && invoices.map(invoice => (
                        <div key={invoice.id} className={styles.journey}>
                            <span
                                className={styles.invoice}
                                style={{offsetPath: `path("${geometry.incoming[invoice.supplier]}")`}}
                            >
                                <FileText size={23} />
                            </span>
                            <span
                                className={`${styles.invoice} ${styles.outbound}`}
                                style={{offsetPath: `path("${geometry.outgoing[invoice.destination]}")`}}
                                onAnimationEnd={() => removeInvoice(invoice.id)}
                            >
                                <FileText size={23} />
                            </span>
                        </div>
                    ))}
                </div>
                <figcaption className={styles.footer}>
                    <span className={styles.caption}><Translate id="invoiceFlow.caption">Supplier invoices flow through Invoice Collector to your webhook, email, DMS or Google Drive.</Translate></span>
                    <button
                        type="button"
                        className={styles.motionButton}
                        onClick={() => setPaused(current => !current)}
                        aria-pressed={paused}
                        disabled={reducedMotion}
                    >
                        {paused || reducedMotion ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
                        {reducedMotion
                            ? <Translate id="invoiceFlow.reducedMotion">Reduced motion</Translate>
                            : paused
                                ? <Translate id="invoiceFlow.play">Play animation</Translate>
                                : <Translate id="invoiceFlow.pause">Pause animation</Translate>}
                    </button>
                </figcaption>
            </figure>
        </section>
    );
}

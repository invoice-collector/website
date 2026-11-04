import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function PricingCard({
    name,
    price,
    priceNote,
    limit,
    features,
    cta = 'Get started',
    ctaHref = '#contact',
    popular = false,
    dark = false,
}) {
    const isHighlighted = popular || dark;

    return (
        <div className={clsx(
            'relative border rounded-2xl p-6 flex flex-col',
            isHighlighted ? [styles.bg_secondary, 'text-white shadow-lg'] : ['bg-gray-50', styles.border_secondary_light]
        )}>
            {popular && (
                <div className={clsx('absolute -top-3 left-1/2 transform -translate-x-1/2', styles.bg_primary, 'text-white text-xs font-bold px-3 py-1 rounded-full')}>
                    Most popular
                </div>
            )}
            <div className={clsx(isHighlighted ? 'font-semibold mb-1' : [styles.text_secondary, 'font-semibold mb-1'])}>{name}</div>
            <div className={clsx(styles.font_title, isHighlighted ? 'text-white' : styles.text_secondary, 'text-3xl font-extrabold mb-1')}>{price}</div>
            {priceNote && <div className={clsx(isHighlighted ? styles.text_primary_lighter : 'text-gray-400', 'text-xs italic mb-1')}>{priceNote}</div>}
            <div className={clsx(isHighlighted ? styles.text_primary_lighter : 'text-sm text-gray-500', 'mb-5')}>{limit}</div>
            <ul className={clsx(isHighlighted ? styles.text_primary_lighter : 'text-gray-600', 'list-none p-0 space-y-2 text-sm flex-1')}>
                {features.map((feature, index) => (
                    <li key={index}>
                        <span className={clsx(styles.text_primary, 'mr-2')}>✓</span>{feature}
                    </li>
                ))}
            </ul>
            <Link
                to={ctaHref}
                className={clsx(
                    isHighlighted
                        ? [styles.bg_primary, styles.hover_bg_primary_dark, 'text-white hover:text-white']
                        : [styles.hover_border_primary, styles.text_secondary_light, styles.hover_text_primary, 'hover:bg-gray-100 border-2 border-gray-300'],
                    'mt-6 block text-center font-semibold py-2.5 rounded-xl transition text-sm no-underline hover:no-underline'
                )}
            >
                {cta}
            </Link>
        </div>
    );
}

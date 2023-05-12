import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import styles from './useful.module.scss';

export const UsefulLink: FC = ({ links }: { links: UsefulLinksItemType[] }) => {
    const { t } = useTranslation('footer');

    return (
        <div className={styles['useful-link']}>
            <h3 className={styles['useful-link__title']}>
                { t('useful-links.title') }
            </h3>

            {links.map((item) => (
                <a
                    href={item.link}
                    key={item.id}
                    target="_blank"
                    className={styles['useful-link__link-to']}
                >
                    { item.title }
                </a>
            ))}
        </div>
    )
};

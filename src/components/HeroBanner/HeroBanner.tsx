import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { contacts } from '@/constants/contacts';

import HeroBannerImg from '@/assets/images/layout-banner.jpeg';

import styles from './heroBanner.module.scss';

export const HeroBanner: FC = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles['hero-banner']}>
            <div  className={styles['hero-banner__img']}>
                <Image
                    src={HeroBannerImg}
                    alt={t('layouts.default.banner.title')}
                    fill={true}
                    priority={true}
                />
            </div>

            <div className={styles['hero-banner__content']}>
                <div className="container">
                    <h2
                        className={styles['hero-banner__title']}
                        dangerouslySetInnerHTML={{ __html: t('layouts.default.banner.title') }}
                    />

                    <p className={styles['hero-banner__desc']}>
                        { t('layouts.default.banner.description') }
                    </p>

                    <a
                        href={contacts.EMAIL_LINK}
                        className={styles['hero-banner__to-write']}
                        target="_blank"
                    >
                        { t('button.to-write') }
                    </a>
                </div>
            </div>
        </div>
    );
};

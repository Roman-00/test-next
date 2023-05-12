import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { contacts } from '@/constants/contacts';

import GeoIcon from '@/assets/svg/geo.svg';
import EmailIcon from '@/assets/svg/mail.svg';
import PhoneIcon from '@/assets/svg/phone.svg';

import styles from './contacts.module.scss';

export const Contacts: FC = () => {
    const { t } = useTranslation('footer');

    return (
        <div className={styles.contacts}>
            <h3 className={styles['contacts__title']}>
                { t('contacts.title') }
            </h3>

            <p className={styles['contacts__address']}>
                { t('contacts.address') }
            </p>

            <p className={styles['contacts__office-map']}>
                <GeoIcon />

                { t('contacts.office-map') }
            </p>

            <a
                href={contacts.EMAIL_LINK}
                className={styles['contacts__link']}
                target="_blank"
            >
                <EmailIcon />

                { contacts.EMAIL }
            </a>

            <a
                href={contacts.PHONE_LINK}
                className={styles['contacts__link']}
                target="_blank"
            >
                <PhoneIcon />

                { contacts.PHONE }
            </a>
        </div>
    );
};

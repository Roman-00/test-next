import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { Contacts } from '@/components/Contacts/Contacts';
import { UsefulLink } from '@/components/UsefulLink/UsefulLink';
import { Social } from '@/components/Social/Social';

import styles from './footer.module.scss';

const Footer: FC = ({ useful, social }: { useful: UsefulLinksItemType[], social: SocialItemType[] }) => {
    const { t } = useTranslation('footer');

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles['footer-wrap']}>
                    <Contacts />

                    <UsefulLink
                        links={useful}
                    />

                    <Social
                        social={social}
                    />
                </div>

                <p className={styles['footer__right-reserved']}>
                    { t('right-reserved.text') }
                </p>
            </div>
        </footer>
    )
};

export default Footer;

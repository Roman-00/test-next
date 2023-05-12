import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import FacebookIcon from '@/assets/svg/facebook.svg';
import YoutubeIcon from '@/assets/svg/youtube.svg';
import LinkedinIcon from '@/assets/svg/linkedin.svg';
import InstagramIcon from '@/assets/svg/instagram.svg';

import styles from './social.module.scss';

export const Social: FC = ({ social }: { social: SocialItemType[] }) => {
    const { t } = useTranslation('footer');

    return (
        <div className={styles.social}>
            <h3 className={styles['social__title']}>
                { t('follow-us.title') }
            </h3>

            <div className={styles['social__list']}>
                {social.map((item) => (
                    <a
                        href={item.link}
                        key={item.id}
                        className={styles['social__list-link']}
                        target="_blank"
                    >
                        {item.id === 'facebook' ?  <FacebookIcon /> : <></> }
                        {item.id === 'youtube' ?  <YoutubeIcon /> : <></> }
                        {item.id === 'linkedin' ?  <LinkedinIcon /> : <></> }
                        {item.id === 'instagram' ?   <InstagramIcon /> : <></> }
                    </a>
                ))}
            </div>
        </div>
    )
};

import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { UpcomingSlider } from './UpcomingSlider';

import styles from './upcoming.module.scss';

export const Upcoming: FC = ({ data }: { data: EventsResponseType }) => {
    const { t } = useTranslation('common');

    const { confList } = data;

    return (
        <div className={styles.upcoming}>
            <div className="container">
                <h3
                    className={styles['upcoming__title']}
                    dangerouslySetInnerHTML={{ __html: t('upcoming.title') }}
                />

                <UpcomingSlider
                    slides={confList}
                />
            </div>
        </div>
    );
};

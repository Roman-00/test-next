import { FC } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { getImages } from '@/helpers/images';

import 'dayjs/locale/ru';
import 'dayjs/locale/en';

import DateIcon from '@/assets/svg/date.svg';
import LocationIcon from '@/assets/svg/location.svg';

import styles from './cardEvents.module.scss';

export const CardEvents: FC = ({ event }: { event: EventsItemType }) => {
    const { t } = useTranslation('common');
    const { bw, hover } = getImages(event.projectID);

    dayjs().locale('ru');

    /**
     * Форматируем дату в нужный формат
     *
     * @param {string} bebinTime - начало выставки
     * @param {string} endTime - конец выставки
     *
     * @return string
     */
    const formateDate = (bebinTime, endTime) => {
        const begin = dayjs(bebinTime).format('D MMMM');
        const end = dayjs(endTime).format('D MMMM YYYY');

        return `${begin} - ${end}`;
    }

    return (
        <div className={styles['card-events']}>
            <div className={styles['card-events__images']}>
                <Image
                    src={bw}
                    alt={event.title}
                    fill={true}
                />

                <Image
                    src={hover}
                    alt={event.title}
                    fill={true}
                />
            </div>

            <div className={styles['card-events-wrap']}>
                <h3 className={styles['card-events__title']}>
                    { event.title }
                </h3>

                <p className={styles['card-events__event-date']}>
                    <DateIcon />
                    {formateDate(event.beginDate, event.endDate)}
                </p>

                <p className={styles['card-events__event-address']}>
                    <LocationIcon />
                    { event.address }
                </p>

                <p className={styles['card-events__desc']}>
                    { event.description }
                </p>

                <a
                    href={event.programme}
                    className={styles['card-events__btn-more']}
                    target="_blank"
                >
                    { t('button.more') }
                </a>
            </div>
        </div>
    );
};

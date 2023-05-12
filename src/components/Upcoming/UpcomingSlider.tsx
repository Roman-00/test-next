import { FC } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { CardEvents } from '@/components/Ui/CardEvents/CardEvents';

import styles from './upcomingSlider.module.scss';

export const UpcomingSlider: FC = ({ slides }: EventsItemType[]) => {
    const options = {
        type:       'loop',
        perPage:    3,
        perMove:    1,
        gap:        '1rem',
        pagination: false,
    };

    return (
        <Splide
            options={options}
            aria-label="upcoming-slider"
            className={styles['upcoming-slider']}
        >
            {slides.map(item => (
                <SplideSlide
                    key={item.projectID}
                    className={styles['upcoming-slider__item']}
                >
                    <CardEvents
                        event={item}
                    />
                </SplideSlide>
            ))}
        </Splide>
    )
};

import React, { FC } from 'react';
import CountUp from 'react-countup';

import styles from './resultsList.module.scss';

export const ResultsList: FC = ({ list }: { list: ResultsItemType[] }) => {
    const [numbers, setNumbers] = React.useState<ResultsItemType[]>(list);

    React.useEffect(() => {
        const updateNumbers = () => {
            setNumbers(numbers => numbers.map(item => {
                if (item.currentNumber < item.maxNumber) {
                    return {
                        ...item,
                        currentNumber: item.currentNumber + 1 // Увеличиваем значение на 1
                    };
                }
                return item;
            }));
        };

        // Запускаем обновление значений каждую секунду
        const intervalId = setInterval(updateNumbers, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <ul className={styles['results-list']}>
            {numbers.map(item => (
                <li
                    key={item.id}
                    className={styles['results-list__item']}
                >
                    <h3
                        className={styles['results-list__item-title']}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                    />

                    <CountUp
                        end={item.maxNumber}
                        separator=" "
                    />
                </li>
            ))}
        </ul>
    );
};

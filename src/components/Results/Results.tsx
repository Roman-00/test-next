import { FC } from 'react';
import { ResultsList } from '@/components/Results/ResultsList';

import styles from './results.module.scss';

export const Results: FC = ({ data }: { data: ResultsItemType[] }) => {
    return (
        <div className={styles.results}>
            <div className="container">
                <ResultsList
                    list={data}
                />
            </div>
        </div>
    )
};

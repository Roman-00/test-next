import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import getTitle from '@/helpers/title';

const Meta: FC<PropsWithChildren<MetaType>> = ({ title, description, children }) => {
    return <>
        <Head>
            <title>{getTitle(title)}</title>
            <meta name="description" content={description} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:description" content={description} />
        </Head>
        { children }
    </>
}

export default Meta;

import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DefaultLayout from '@/layouts/default';
import { Results } from '@/components/Results/Results';
import { Upcoming } from '@/components/Upcoming/Upcoming';

const Index: FC = (
    { resultsData, upcomingData, usefulData, socialData }: {
        resultsData: ResultsItemType[], upcomingData: EventsResponseType
    }) => {
    const { t } = useTranslation('meta');

    return <>
        <DefaultLayout
            title={t('title')}
            description={t('description')}
            useful={usefulData}
            social={socialData}
        >
            <div className="index-views">
                <Results
                    data={resultsData}
                />

                <Upcoming
                    data={upcomingData}
                />
            </div>
        </DefaultLayout>
    </>
}

export default Index;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const [results, useful, social, upcoming] = await Promise.all([
        fetch(`${process.env.API_PATH}results/${locale}`),
        fetch(`${process.env.API_PATH}useful/${locale}`),
        fetch(`${process.env.API_PATH}social/${locale}`),
        fetch(`${process.env.API_URL}`, {
            method: 'POST',
            body:   JSON.stringify({
                apiKey:    '4b4277bd1523915d0655ecc44992f2db',
                lang:      locale,
                projectID: 0,
                recCount:  5,
                lastMonth: 0
            }),
        })
    ]);

    const resultsData = await results.json();
    const usefulData = await useful.json();
    const socialData = await social.json();
    const upcomingData = await upcoming.json();

    return {
        props: {
            resultsData,
            usefulData,
            upcomingData,
            socialData,
            ...(await serverSideTranslations(locale, [
                'common',
                'footer',
                'meta'
            ]))
        },
    }
};



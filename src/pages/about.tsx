import FC from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DefaultLayout from '@/layouts/default';
import { LangSwitcher } from '@/components/LangSwitcher';

const API_URL = 'https://onsite.iteca.kz/exh-json/';

const About: FC = ({ data }) => {
    const { t } = useTranslation('common');
    const { confList } = data;

    console.log('confList', confList);

    return (
        <DefaultLayout>
            <div className="about-views">
                <LangSwitcher />

                <h2 className="about-views__title">
                    { t('about') }
                </h2>

                <ul className="about-list">
                    {confList.map(item => (
                        <li
                            key={item.projectID}
                            className="about-list__item"
                        >
                            {item.title}

                            { item.description }
                        </li>
                    ))}
                </ul>
            </div>
        </DefaultLayout>
    )
}

export default About;


export const getServerSideProps = async ({ locale }: { locale: string }) => {
    const res = await fetch(API_URL, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            apiKey:    '4b4277bd1523915d0655ecc44992f2db',
            lang:      locale,
            projectID: 0,
            recCount:  5,
            lastMonth: 0
        }),
    });

    const data = await res.json();

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale, ['common'])),
        }
    }
}

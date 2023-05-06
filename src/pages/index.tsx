import FC from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LangSwitcher } from '@/components/LangSwitcher';

const Index: FC = () => {
    const { t } = useTranslation('common');

    return (
        <div className="index-views">
            <LangSwitcher />

            <h2 className="index-views__title">
                { t('title') }
            </h2>
        </div>
    )
}

export default Index;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
};


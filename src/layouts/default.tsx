import React, { FC, PropsWithChildren } from 'react';
import Meta from '@/components/Meta';
import Footer from '@/components/Footer/AppFooter';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';

const DefaultLayout: FC<PropsWithChildren<MetaType>> = (
    { title, description, children, useful, social }
) => {
    return <>
        <Meta
            title={title}
            description={description}
        >
            <HeroBanner />

            <main>
                { children }
            </main>

            <Footer
                useful={useful}
                social={social}
            />
        </Meta>
    </>
};

export default DefaultLayout;

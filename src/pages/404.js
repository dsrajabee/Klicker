import Head from 'next/head';
import PropTypes from 'prop-types';
import Error404 from '../components/error-404';
import Breadcrumb from '../components/breadcrumb';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';
import Footer from '../components/layout/footer';

function Error404Page({ newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Error 404 - Kilcker Innovations</title>
                <meta
                    name="description"
                    content=" Kilcker Innovations is a digital agency that specializes in web design, web development, and digital marketing."
                />
            </Head>
            <Error404 />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            newsletterItems,
            footerItems,
        },
    };
}

Error404Page.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Error404Page;

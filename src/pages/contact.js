import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Contact - Kilcker Innovations</title>
                <meta
                    name="description"
                    content="Kilcker Innovations is a digital agency that specializes in web design, web development, and digital marketing."
                />
            </Head>
            <Breadcrumb
                subTitle="Contact us"
                title="Get in Touch"
                desc="Contact us to experience customized IT services that elevate performance, streamline processes, and accelerate business growth"
                imageClass="page_banner__bg page_banner__bg_4"
            />
            <Contact contactItems={contactItems} />
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            contactItems,
            newsletterItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;

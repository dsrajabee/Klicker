import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerTwo from '../../components/banner/index-2';
import Breadcrumb from '../../components/breadcrumb';
import BannerFour from '../../components/banner/index-4';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import TestimonialTwo from '../../components/testimonial/index-2';
import { getAllItems } from '../../lib/items-util';

function OurClients({
    bannerFourItems,
    bannerSection,
    bannerTwoItems,
    testimonialItems,
    testimonialSectionItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Our Working Process - Kilcker Innovations</title>
                <meta
                    name="description"
                    content="Kilcker Innovations is a digital agency that specializes in web design, web development, and digital marketing."
                />
            </Head>
            <Breadcrumb
                subTitle="What we do"
                title="Our working Process"
                desc="Customized IT solutions designed with accuracy, creativity, and teamwork to empower client success."
            />
            <BannerFour
                bannerFourItems={bannerFourItems}
                bannerSection={bannerSection}
            />
            ;{/* <BannerTwo bannerTwoItems={bannerTwoItems} /> */}
            {/* <TestimonialTwo
                testimonialItems={testimonialItems}
                testimonialSectionItems={testimonialSectionItems}
            /> */}
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const bannerFourItems = getAllItems('banner-4');
    const bannerSection = getAllItems('banner-section');
    const bannerTwoItems = getAllItems('banner-2');
    const testimonialItems = getAllItems('testimonial');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            bannerFourItems,
            bannerSection,
            bannerTwoItems,
            testimonialItems,
            testimonialSectionItems,
            newsletterItems,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    bannerFourItems: PropTypes.instanceOf(Object).isRequired,
    bannerSection: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;

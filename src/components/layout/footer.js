import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link';
import { Fragment } from 'react';
import classes from './footer.module.scss';
import { IoAddSharp } from 'react-icons/io5';
function Footer({ footerItems }) {
    return (
        <footer>
            {footerItems?.map((footerItem) => (
                <Fragment key={footerItem.id}>
                    <div className={`${classes.bg}`}>
                        <Container>
                            <Row>
                                <Col lg={{ span: 3 }}>
                                    <div className={classes.widget__item}>
                                        <Link href="/" className={classes.logo}>
                                            <img
                                                src={footerItem?.footerLogo}
                                                alt={footerItem?.footerLogoAlt}
                                            />
                                        </Link>
                                        <div className={classes.widget__item}>
                                            <h2
                                                className={
                                                    classes.widget__title
                                                }
                                            >
                                                {footerItem?.contactInfoTitle}
                                            </h2>
                                            <div
                                                className={`pb-25 ${classes.widget__info}`}
                                            >
                                                <p
                                                    className={
                                                        classes.widget_address
                                                    }
                                                    dangerouslySetInnerHTML={{
                                                        __html: footerItem?.widgetAddress,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className={classes.inquary}>
                                            {/* <h2
                                                className={classes.inquary_info}
                                            >
                                                {footerItem?.inquary}
                                            </h2> */}
                                            <div>
                                                <Link
                                                    href={`tel://${footerItem?.inquaryNumber}`}
                                                    className={
                                                        classes.inquary_number
                                                    }
                                                >
                                                    {/* <FaIcons.FaPhone
                                                        className={
                                                            classes.inquary_phoneicon
                                                        }
                                                    /> */}
                                                    {footerItem?.inquaryNumber}
                                                </Link>
                                            </div>
                                            <div>
                                                <Link
                                                    href="mailto://akashvarmaviruman@gmail.com"
                                                    className={
                                                        classes.inquary_number
                                                    }
                                                >
                                                    {/* <FaIcons.FaEnvelope /> */}
                                                    akashvarmaviruman@gmail.com
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    xl={{ span: 3 }}
                                    lg={{ span: 2 }}
                                    sm={{ span: 6 }}
                                    className="ps-xl-80 pt-40 pt-lg-0"
                                >
                                    <div className={classes.widget__item}>
                                        <h2 className={classes.widget__title}>
                                            {footerItem?.informationTitle}
                                        </h2>
                                        <ul className={classes.widget__list}>
                                            {footerItem?.informationList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        <Link
                                                            href={`/${item.path}`}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </Col>
                                <Col
                                    lg={{ span: 6 }}
                                    className="ps-lg-50 pt-40 pt-lg-0"
                                >
                                    <div>
                                        <img
                                            src={footerItem?.footerMap}
                                            alt={footerItem?.footerMapAlt}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={classes.bottom}>
                        <Container>
                            <Row>
                                <Col md={{ span: 6 }} sm={{ span: 4 }}>
                                    <ul className={classes.social}>
                                        {footerItem?.socialList?.map((item) => {
                                            const Social =
                                                FaIcons[item.socialIcon];
                                            return (
                                                <li key={item.id}>
                                                    <Link href={`${item.path}`}>
                                                        <Social />
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Col>
                                <Col md={{ span: 6 }} sm={{ span: 8 }}>
                                    <div className={classes.copyright}>
                                        <span className={classes.text}>
                                            © {new Date().getFullYear()} Klicker
                                            Innovations. All Rights Reserved.
                                            {/* <span className={classes.icon}>
                                                <FaIcons.FaHeart />
                                            </span> */}
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Fragment>
            ))}
        </footer>
    );
}

Footer.propTypes = {
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Footer;

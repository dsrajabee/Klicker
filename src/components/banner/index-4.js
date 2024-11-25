import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './banner-4.module.scss';
import ModalComponent from '../layout/ModalComponent';

function BannerFour({ bannerFourItems, bannerSection }) {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const insertBreaks = (text, maxLength) => {
        let result = '';
        let count = 0;

        text.split(' ').forEach((word) => {
            if (count + word.length + 1 > maxLength) {
                result += '<br>';
                count = 0;
            }
            result += word + ' ';
            count += word.length + 1;
        });

        return result.trim();
    };

    const handleShowModal = (item) => {
        setModalContent(item);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div className={`${classes.py__140}`}>
            <Container>
                {bannerSection?.map((items) => (
                    <div className={classes.section} key={items.id}>
                        <div className={classes.section__wrap}>
                            <div className={classes.section__title}>
                                <span>{items?.sectionSubtitle}</span>
                                <h2>{items?.sectionTitle}</h2>
                            </div>
                            <p
                                className={classes.section__desc}
                                dangerouslySetInnerHTML={{
                                    __html: items.sectionDesc,
                                }}
                            />
                        </div>
                    </div>
                ))}
                <Row className="g-30">
                    {bannerFourItems?.map((bannerFourItem) => (
                        <Col
                            xl={{ span: 3 }}
                            lg={{ span: 4 }}
                            md={{ span: 6 }}
                            key={bannerFourItem.id}
                        >
                            <div
                                className={bannerFourItem.dynamicClassName
                                    .split(' ')
                                    .map((item) => classes[item])
                                    .join(' ')}
                            >
                                <div
                                    className={classes.content}
                                    data-count={`${bannerFourItem?.dataCount}`}
                                >
                                    {/* <h2
                                        className={classes.title}
                                        dangerouslySetInnerHTML={{
                                            __html: bannerFourItem?.title,
                                        }}
                                    /> */}
                                    <h2
                                        className={classes.title}
                                        dangerouslySetInnerHTML={{
                                            __html: insertBreaks(
                                                bannerFourItem?.title || '',
                                                16
                                            ),
                                        }}
                                    />
                                    <p className={classes.desc}>
                                        {bannerFourItem?.excerpt?.length > 80
                                            ? `${bannerFourItem.excerpt.substring(
                                                  0,
                                                  80
                                              )}...`
                                            : bannerFourItem.excerpt}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleShowModal(bannerFourItem);
                                        }}
                                    >
                                        View More
                                    </button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <ModalComponent
                show={showModal}
                handleClose={handleCloseModal}
                content={modalContent}
            />
        </div>
    );
}

BannerFour.propTypes = {
    bannerFourItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            dynamicClassName: PropTypes.string,
            dataCount: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
            title: PropTypes.string,
            excerpt: PropTypes.string,
            sectionTitle: PropTypes.string,
            sectionSubtitle: PropTypes.string,
            sectionDesc: PropTypes.string,
        })
    ).isRequired,
    bannerSection: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            sectionSubtitle: PropTypes.string,
            sectionTitle: PropTypes.string,
            sectionDesc: PropTypes.string,
        })
    ).isRequired,
};

export default BannerFour;

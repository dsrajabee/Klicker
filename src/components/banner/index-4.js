import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './banner-4.module.scss';
import ModalComponent from '../layout/ModalComponent';
// import ModalComponent from './ModalComponent';

function BannerFour({ bannerFourItems, bannerSection }) {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

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
                                    <h2
                                        className={classes.title}
                                        dangerouslySetInnerHTML={{
                                            __html: bannerFourItem?.title,
                                        }}
                                    />
                                    <p className={classes.desc}>
                                        {bannerFourItem?.excerpt}
                                    </p>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleShowModal(bannerFourItem);
                                        }}
                                    >
                                        View More
                                    </a>
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
    bannerFourItems: PropTypes.array.isRequired,
    bannerSection: PropTypes.array.isRequired,
};

export default BannerFour;

import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import classes from './index.module.scss';

function ServiceContent({ service, richTexts, ourServices }) {
    const imagePath = `/images/services/${service?.slug}/${service?.largeImage}`;

    return (
        <Col lg={{ span: 9 }} className="pe-lg-45">
            <div className="banner">
                <img
                    className="img-full"
                    src={imagePath}
                    alt={service?.title}
                />
            </div>
            <div className={classes.content}>
                <h2 className={classes.title}>{service?.title}</h2>
                <h3 className={classes.subtitle}>{service?.detailSubTitle}</h3>
                <p className={classes.desc}>{service?.detailDesc}</p>
            </div>

            <div className={classes.contentdetails}>
                <h2 className={classes.title}>
                    {service?.projectContentTitle}
                </h2>
                <ul className={classes.list}>
                    {service?.listItem?.map((singleItem) => {
                        const CheckIcon = FaIcons[singleItem.checkIcon];
                        return (
                            <li key={singleItem.id}>
                                <div className={classes.list_icon}>
                                    <CheckIcon />
                                </div>
                                <div className={classes.list_text}>
                                    <span>{singleItem.text}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Col>
    );
}

ServiceContent.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    ourServices: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceContent;

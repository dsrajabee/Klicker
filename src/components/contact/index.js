import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import { useState } from 'react';
function Contact({ contactItems }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Email sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('An error occurred. Please try again later.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <main>
            {contactItems?.map((contactItem) => (
                <Container key={contactItem.id}>
                    <div className={classes.area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.img_wrap}>
                                    <div className={classes.img}>
                                        <img
                                            className="img-full"
                                            src={contactItem?.image}
                                            alt={contactItem?.imageAlt}
                                        />
                                    </div>
                                    <div className={classes.pattern}>
                                        <img
                                            src={contactItem?.pattern}
                                            alt={contactItem?.patternAlt}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-50">
                                <div className={classes.content}>
                                    <span className={classes.subtitle}>
                                        {contactItem?.subTitle}
                                    </span>
                                    <h2 className={classes.title}>
                                        {contactItem?.title}
                                    </h2>
                                    <p className={classes.desc}>
                                        {contactItem?.desc}
                                    </p>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.addressTitle}
                                        </h3>
                                        <p className={classes.info_desc}>
                                            {contactItem?.addressDesc}
                                        </p>
                                    </div>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.infoTitle}
                                        </h3>
                                        <ul className={classes.info_list}>
                                            {contactItem?.infoList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        {item.listText}
                                                        <Link href={item.path}>
                                                            {item.listValue}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={classes.form_area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <h2 className={classes.form_title}>
                                    {contactItem?.formTitle}
                                </h2>
                                <p className={`${classes.form_desc} mb-0`}>
                                    {contactItem?.formDesc}
                                </p>
                                {status && <p className={classes.status_message}>{status}</p>}
                                <form onSubmit={handleSubmit} className={classes.form}>
                                <div className={classes.form_group__input}>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name*"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`${classes.form_input__field} me-30`}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email*"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={
                                                classes.form_input__field
                                            }
                                        />
                                    </div>
                                    <textarea
                                        type="text"
                                        name="message"
                                        id="message"
                                        placeholder="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`${classes.form_textarea__field} mt-30`}
                                    />
                                    <div className={classes.form_btn__wrap}>
                                        <button
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__primary}`}
                                            type="submit"
                                        >
                                          {contactItem?.btnText || 'Send Message'}
                                        </button>
                                    </div>
                                  
                                </form>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-lg-50">
                                <div className="map_with__pattern">
                                    <iframe
                                        title="Klicker Innovations location"
                                        className="map_size"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.786570972901!2d78.11127777530458!3d9.919819276384194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf42595e7d71%3A0x6a53cf71c3d3158f!2sPeriyar%20Bus%20Stand%2C%20Madurai%2C%20Tamil%20Nadu%20625001%2C%20India!5e0!3m2!1sen!2sus!4v1696941284620!5m2!1sen!2sus"
                                        // width="600"
                                        // height="450"
                                        // style="border:0;"
                                        // allowfullscreen=""
                                        // loading="lazy"
                                        // referrerpolicy="no-referrer-when-downgrade"
                                    />
                                    <div className="map_pattern">
                                        <img
                                            src={contactItem?.mapPattern}
                                            alt={contactItem?.mapPatternAlt}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            ))}
        </main>
    );
}

Contact.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default Contact;

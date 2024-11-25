import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function Breadcrumb({ subTitle, title, desc, imageClass }) {
    return (
        <div className={imageClass}>
            <Container>
                <div className="page_content">
                    <span
                        className="page_subtitle"
                        style={{ color: '#ff5e13' }}
                    >
                        {subTitle}
                    </span>
                    <h1 className="page_title" style={{ color: 'white' }}>
                        {title}
                    </h1>
                    <p className="page_desc" style={{ color: 'white' }}>
                        {desc}
                    </p>
                </div>
            </Container>
        </div>
    );
}

Breadcrumb.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default Breadcrumb;

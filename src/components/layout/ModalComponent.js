import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalComponent.module.scss';

function ModalComponent({ show, handleClose, content }) {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    {/* <div>{JSON.stringify(content)}</div> */}
                    {/* <h2>{content.title || 'Expanded View'}</h2> */}
                    <h2
                        dangerouslySetInnerHTML={{
                            __html: content.title,
                        }}
                    />
                    <button
                        type="button"
                        onClick={handleClose}
                        className={styles.closeButton}
                    >
                        &times;
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: content.excerpt,
                        }}
                    />
                </div>
                {/* <div className={styles.modalFooter}>
                    <button
                        type="button"
                        onClick={handleClose}
                        className={styles.closeButton}
                    >
                        Close
                    </button>
                </div> */}
            </div>
        </div>
    );
}

ModalComponent.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    content: PropTypes.shape({
        title: PropTypes.string,
        excerpt: PropTypes.string,
    }).isRequired,
};

export default ModalComponent;

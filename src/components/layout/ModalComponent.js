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
                    <h2>{content.sectionTitle || 'Expanded View'}</h2>
                    <button
                        onClick={handleClose}
                        className={styles.closeButton}
                    >
                        &times;
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <h2>{content.sectionTitle}</h2>
                    <p>{content.sectionSubtitle}</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: content.sectionDesc,
                        }}
                    />
                </div>
                <div className={styles.modalFooter}>
                    <button
                        onClick={handleClose}
                        className={styles.closeButton}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

ModalComponent.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    content: PropTypes.object.isRequired,
};

export default ModalComponent;

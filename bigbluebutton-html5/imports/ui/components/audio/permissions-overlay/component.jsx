import React from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import Modal from '/imports/ui/components/modal/simple/component';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
  intl: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const intlMessages = defineMessages({
  title: {
    id: 'app.audio.permissionsOverlay.title',
    description: 'Title for the overlay',
  },
  hint: {
    id: 'app.audio.permissionsOverlay.hint',
    description: 'Hint for the overlay',
  },
});

const PermissionsOverlay = ({ intl, closeModal }) => (
  <Modal
    overlayClassName={styles.overlay}
    className={styles.hint}
    onRequestClose={closeModal}
    hideBorder
  >
    <div className={styles.content}>
      { intl.formatMessage(intlMessages.title) }
      <small>
        { intl.formatMessage(intlMessages.hint) }
      </small>
    </div>
  </Modal>
);

PermissionsOverlay.propTypes = propTypes;

export default injectIntl(PermissionsOverlay);

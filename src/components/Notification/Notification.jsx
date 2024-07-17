import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div className={css.divNotification}>
        {message}
        </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
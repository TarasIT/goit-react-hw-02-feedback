import PropTypes from 'prop-types';
import { NoFeedback } from './Notification.styled';

export const NoFeedbackMessage = ({ message }) => {
  return <NoFeedback>{message}</NoFeedback>;
};

NoFeedbackMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

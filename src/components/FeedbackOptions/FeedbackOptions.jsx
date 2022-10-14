import PropTypes from 'prop-types';
import { FeedbackButtons, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  goodFeedbacksCounter,
  neutralFeedbacksCounter,
  badFeedbacksCounter,
}) => {
  return (
    <FeedbackButtons>
      <Button onClick={goodFeedbacksCounter} type="button">
        Good
      </Button>
      <Button onClick={neutralFeedbacksCounter} type="button">
        Neutral
      </Button>
      <Button onClick={badFeedbacksCounter} type="button">
        Bad
      </Button>
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  goodFeedbacksCounter: PropTypes.func.isRequired,
  neutralFeedbacksCounter: PropTypes.func.isRequired,
  badFeedbacksCounter: PropTypes.func.isRequired,
};

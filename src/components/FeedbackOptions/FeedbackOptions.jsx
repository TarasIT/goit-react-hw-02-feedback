import PropTypes from 'prop-types';
import { FeedbackButtons, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  const selectedFeedback = e => {
    const feedback = option.find(feedback => e.target.name === feedback);
    if (feedback === undefined) {
      return alert('Whoops, something wrong with feedback(');
    }
    onLeaveFeedback(feedback);
  };

  return (
    <FeedbackButtons>
      <Button onClick={selectedFeedback} name="good" type="button">
        Good
      </Button>
      <Button onClick={selectedFeedback} name="neutral" type="button">
        Neutral
      </Button>
      <Button onClick={selectedFeedback} name="bad" type="button">
        Bad
      </Button>
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

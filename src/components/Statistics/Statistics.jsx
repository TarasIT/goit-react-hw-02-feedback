import PropTypes from 'prop-types';
import {
  Stats,
  StatsConteiner,
  StatInfo,
  TotalFeedbacks,
  GoodFeedbackPercentage,
} from './Statistics.styled';
import { NoFeedbackMessage } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Stats>Statistics</Stats>
      {total() !== 0 ? (
        <StatsConteiner>
          <StatInfo>Good: {good}</StatInfo>
          <StatInfo>Neutral: {neutral}</StatInfo>
          <StatInfo>Bad: {bad}</StatInfo>
          <TotalFeedbacks>Total: {total()}</TotalFeedbacks>
          <GoodFeedbackPercentage>
            Positive feedback: {total() > 0 ? positivePercentage() : 0}%
          </GoodFeedbackPercentage>
        </StatsConteiner>
      ) : (
        <NoFeedbackMessage message={'There is no feedback('} />
      )}
    </>
  );
};

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { FeedbackSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

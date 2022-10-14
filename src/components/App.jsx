import React from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeedbacks = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  countNeutralFeedbacks = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countBadFeedbacks = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const feedbacksArray = Object.values(this.state);
    const totalFeedbacks = feedbacksArray.reduce((prev, currentValue) => {
      return prev + currentValue;
    }, 0);
    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const goodFeedbacksPercent =
      (this.state.good * 100) / this.countTotalFeedback();
    return Math.ceil(goodFeedbacksPercent);
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          goodFeedbacksCounter={this.countGoodFeedbacks}
          neutralFeedbacksCounter={this.countNeutralFeedbacks}
          badFeedbacksCounter={this.countBadFeedbacks}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}

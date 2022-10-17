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

  makeOption = () => Object.keys(this.state);

  addFeedback = option => {
    this.setState(prev => {
      return {
        [option]: prev[option] + 1,
      };
    });
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
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          option={this.makeOption()}
          onLeaveFeedback={this.addFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}

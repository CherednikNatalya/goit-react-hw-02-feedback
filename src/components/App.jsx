import React, { Component } from 'react';

import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'

import {Statistics} from './Statistics/Statistics'

import {Section} from './Section/Section'

import {Notification} from './Notification/Notification'


const buttons = [
	{ id: "good", title: "Good" },
	{ id: "neutral", title: "Neutral" },
	{ id: "bad", title: "Bad" }
];
  
  
export class App extends Component {
 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  handlClickFeedback = e => {
    const {name} = e.target
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  }; 

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback ()
    ? Math.round((this.state.good/this.countTotalFeedback()) *100) : 0;
  }

 
render() {
const { good, neutral, bad } = this.state;
const totalFeedback = this.countTotalFeedback();

  return (
    <div>
    <Section
    title={"Please leave feedback"}>
   <FeedbackOptions
     options={buttons} 
     onLeaveFeedback={this.handlClickFeedback}/>
    </Section>

  
     <Section title={"Statistics"}>

     {totalFeedback > 0 ? (
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={this.countTotalFeedback()} 
      positivePercentage={this.countPositiveFeedbackPercentage()}
      />
      ) : (
      <Notification message={"There is no feedback"}/>
      )}
</Section>

  </div>
  );
  };
}
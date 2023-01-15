import React, { Component } from 'react';

import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'

// import {Statistics} from './Statistics/Statistics'

import {Section} from './Section/Section'


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
    const name = e.target
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
    ? Math.round((this.state.good/this.countTotalFeedback) *100) : 0;
  }

 
render() {

  return (
    <>
    <Section
    title={"Please leave feedback"}>
   <FeedbackOptions
     options={buttons} 
     onLeaveFeedback={buttons.title}/>
    </Section>
 
 {/* <Section title={"Statistics"} >
     <Statistics 
     good={this.good} 
     neutral={this.neutral} 
     bad={this.bad} 
     total={this.countTotalFeedback} 
     positivePercentage={this.countPositiveFeedbackPercentage}/>
    </Section> */}
    </>
    
  ) 
}
  }


import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Statistics} from './Statistics/Statistics'
import React, { Component } from 'react';
import feedbackName from '../feedback.json'


export class Feedback extends Component {
  state = {
    initialFeedback: feedbackName,
    }


render() {
 

  return (
    <Feedback/>
    <Statistics title="Statistics"good={} neutral={} bad={} total={} positivePercentage={}></Statistics>
    <FeedbackOptions options={} onLeaveFeedback={} 
  )
}
}




// <h2>Statistics</h2>
// <ul>
//   <li>Good: {} </li>
// </ul>
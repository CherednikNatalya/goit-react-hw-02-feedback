
// import css from './Feedback.module.css'
import PropTypes from 'prop-types';

export const FeedbackOptions =({initialFeedback}) => {
  return (
    <div>
    <h1>Please leave feedback</h1>
   <ul>
    {initialFeedback.map(({label})=>(
      <li key={label}>
       <button
       type="button"
     //   className="Dropdown__toggle"
     //   onClick={this.toggle}
     >{label}</button>
      </li>
    )
    )}
   </ul>
</div>
  )
}

FeedbackOptions.propTypes ={
  label : PropTypes.string.isRequired
}






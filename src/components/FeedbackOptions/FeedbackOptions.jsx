import { List, Button} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

export const FeedbackOptions =({options, onLeaveFeedback}) => {
  return (
   <List>
    {options.map(({id, title})=>(
      <li key={id}>
       <Button
       type="button"
       name={id}
      onClick={onLeaveFeedback}
     >{title}</Button>
      </li>
    )
    )}
   </List>
  )
}

FeedbackOptions.propTypes ={
  options : PropTypes.array.isRequired,
  onLeaveFeedback : PropTypes.func.isRequired
}






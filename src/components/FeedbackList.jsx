import FeedbackItem from './Feedbackitem'

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0){
    return <p>No Feedback Yet, Bozo</p>
  }
    return (
    <div className='feedback-list'> 
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default FeedbackList

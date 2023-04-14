import { useState } from "react"

function FeedbackItem(item) {
    const [rating, setRaing] = useState(7)
    const [text, setText] = useState('This is a Feedback comment test')
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      
    </div>
  )
}

export default FeedbackItem

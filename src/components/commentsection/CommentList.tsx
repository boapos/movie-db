import React from 'react'
import Comment from './Comment'
import { CommentForm } from './CommentForm'

interface Props {
  comments: any;
  setComments: (s: string) => void;
}

const CommentList = ({comments, setComments}: Props) => {
  return (
    <div className="comments">
      <hr/>
      <h2>Comments</h2>
        {comments.map((comment: any) => (
          <Comment key={comment._id} id={comment._id} name={comment.name} text={comment.text} date={comment.date} />
        ))}
      <CommentForm comments={comments} setComments={setComments} />  
    </div>
  )
}

export default CommentList

import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  comments: any;
  setComments: (arg0: any) => void;
}

export const CommentForm = ({comments, setComments}: Props) => {
  const { user } = useAuth0()
  const [input, setInput] = React.useState('')
  const submitComment = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    console.log(comments)
    setComments([...comments, {
      _id: Date.now(),
      name: user.name,
      email: user.email,
      movie_id: 'qwe123123q',
      text: input,
      date: Date.now()
    }])
    setInput('')
  }
  return (
    <div className='comment-form'>
      <form onSubmit={submitComment}>
        <TextField value={input} onChange={e => setInput(e.target.value)} id="standard-basic" label="Add a comment" fullWidth />
        <Button onClick={submitComment} className='submit-comment-btn' variant="contained" color="primary">Submit</Button>
      </form>
    </div>
  )
}

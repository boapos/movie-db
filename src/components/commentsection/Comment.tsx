import React from 'react'
import avatar from '../../images/avatar.png'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  id: string;
  name: string;
  text: string;
  date: string;
}

const Comment = ({id, name, text, date}: Props) => {
  const { user } = useAuth0()
  return (
    <div className='comment'>
      <img src={name === user.name? user.picture : avatar} alt="dp"/>
      <div className="deets">
        <h3>{name}</h3>
        <p>{text}</p>
        <p className='date'>{date}</p>  
      </div>
    </div>
  )
}

export default Comment

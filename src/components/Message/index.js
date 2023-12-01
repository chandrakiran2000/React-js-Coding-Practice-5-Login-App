// Write your code here

import './index.css'

const Message = props => {
  const {login} = props
  const messagetext = login ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{messagetext}</h1>
}

export default Message

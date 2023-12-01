// Write your code here
import './index.css'

const Login = props => {
  const {btnin} = props
  return (
    <button className="login" onClick={btnin} type="button">
      Login
    </button>
  )
}
export default Login

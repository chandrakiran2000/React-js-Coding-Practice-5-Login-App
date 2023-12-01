// Write your code here
import './index.css'

const Logout = props => {
  const {btnout} = props
  return (
    <button className="logout" onClick={btnout} type="button">
      Logout
    </button>
  )
}
export default Logout

// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {check: false}

  onLogout = () => {
    this.setState(prevState => ({
      check: !prevState.check,
    }))
  }

  onLogin = () => {
    this.setState(prevState => ({
      check: !prevState.check,
    }))
  }

  render() {
    const {check} = this.state

    return (
      <div className="home">
        <div className="messagecard">
          <Message login={check} />
          <div className="btn-card">
            {check ? (
              <Logout btnout={this.onLogout} />
            ) : (
              <Login btnin={this.onLogin} />
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Home

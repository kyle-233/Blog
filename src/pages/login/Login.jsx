import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Emial</label>
        <input type="text" className="loginInput" placeholder="Enter your emial..." />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">REGISTER</Link>
      </button>
    </div>
  )
}

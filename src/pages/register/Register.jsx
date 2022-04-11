import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Emial</label>
        <input type="text" className="registerInput" placeholder="Enter your emial..." />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">LOGIN</Link>
      </button>
    </div>
  )
}

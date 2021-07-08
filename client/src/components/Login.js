import React, { useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { login } from '../slices/userSlice';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export const Login = () => {
  const name = useRef();
  const password = useRef();
  const errorStatus = useSelector(state => state.auth.errorStatus);
  // const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ name: name.current.value, password: password.current.value }));
    history.push('/');
    console.log('[suhed');
  }

  // useEffect(() => {
  //   // if isUserLoggedIn turned to true redirect to /home
  //   if (user) { 
  //     history.push("/home");
  //   }
  // }, user)

  return (
    <div className="d-flex flex-row align-items-center login-container">
      <div className="d-flex flex-row justify-content-center w-50">
        <img src={logo} className="w-50" alt="logo" />
      </div>
      <div className="w-50">
        <form className="d-flex flex-column align-items-center rounded w-50 p-3 c-form" onSubmit={handleSubmit}>
          <input  
            type="text"
            placeholder="Username"
            required
            className="form-control p-3 mb-4"
            ref={name}
          />
          <input  
            type="password"
            placeholder="Password"
            required
            className="form-control p-3 mb-4"
            ref={password}
          />
          {errorStatus      
            ? <span>Wrong username or password.</span> 
            : null
          }
          <button className="btn btn-primary font-weight-bold w-75 p-3 mb-4" type="submit">Log In</button>
          <button className="btn btn-success font-weight-bold w-75 p-3">
            <Link className="text-white no-underline" to="/register">Register</Link>
          </button>
        </form>
      </div>
    </div>
  )
}


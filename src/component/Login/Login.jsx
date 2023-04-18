import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthUser } from "../../AuthContext/AuthContext";

const Login = () => {
 
  const {loginUser} = useContext(AuthUser)
  const navigate = useNavigate()
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  console.log(location)

    const loginHandler = event => {
        // ======FIRST STEP TO LOGIN USER==========
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
        .then(result => {
          const singleUser = result.user
          navigate(from, {replace: true})
        })
        .catch(error => {
          console.log(error)
        })
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  required
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <small>Are you New this site <Link to="/signup"><span className="text-blue-600">Create account</span></Link></small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

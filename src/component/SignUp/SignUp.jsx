import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthUser } from '../../AuthContext/AuthContext';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const SignUp = () => {

    const {user, createUser} = useContext(AuthUser)

// ==========SIGNUP SUBMIT HANDLER EVENT==========
    const signUpHandler = (event) => {
//   ==================FIRST STEP TAKE EMAIL AND PASSWORD===========      
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        
    
        createUser(email, password)
        .then(result => {
          const logindUser = result.user
          console.log(logindUser)
          sendEmailVerification(logindUser)
          .then(() => {
            alert('please check your email')

          })

          updateProfile(logindUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
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
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={signUpHandler} className="card-body">

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>

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
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>

              <small>Already have an account? please <Link to="/login"><span className="text-blue-600">Login</span></Link></small>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;